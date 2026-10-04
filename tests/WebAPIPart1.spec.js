const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail:"sharmaravi962@gmail.com",userPassword:"Yahoo183@"}
const orderPayLoad = {orders:[{country:"India",productOrderedId:"6960eae1c941646b7a8b3ed3"}]}
let token;
let orderId;
test.beforeAll( async() => 
{
    const apiContext = await request.newContext();
    const loginResponse= await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data:loginPayLoad
            } )
            expect(loginResponse.ok()).toBeTruthy();
            const loginResponseJson = await loginResponse.json();
            token =loginResponseJson.token;
            console.log(token);

            //
            const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
                {
                    data: orderPayLoad,
                    headers: {
                        'Authorization' : token,
                        'Content-Type' : 'application/json'
                    },
                })
                const orderResponseJson = await orderResponse.json();
                console.log(orderResponseJson);
                orderId = orderResponseJson.orders[0];
});

test.beforeEach(() => 
{

});

//create order is success
test('TC001 - Place the order', async ({page}) => 
    {
        await page.addInitScript(value => {
            window.localStorage.setItem('token', value);
        }, token );
        
        await page.goto("https://rahulshettyacademy.com/client/");
        await page.locator("button[routerlink*='myorders']").click();
        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");
        for(let i=0; i< await rows.count(); ++i)
        {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if(orderId.includes(rowOrderId))
            {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const orderIdDetails = await page.locator(".col-text").textContent();
        await page.pause();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
    });
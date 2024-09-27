import {test} from '@playwright/test'

//Before all test wil be execute just once  
// test.beforeAll(()=>{
// })

//execute before every test in the Test suite 
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()

})

test('Locator syntax rules', async({page}) => {
    //by  Tag Name
    await page.locator('input').first().click()

    //by ID
    await page.locator('#inputEmail').click()

    //by Class value
    page.locator('.shape-rectangle')

    //by attribute
    page.locator('[placeholder="Email"]')

    //by entire Class Value
    page.locator ('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selectors
    page.locator ('input[placeholder="Email"]')

    //by partial text match
    page.locator(':text("Using")')

    //by exact text match
    page.locator(':text-is("Using the Grid")')

})



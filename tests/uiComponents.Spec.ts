import {test,expect} from '@playwright/test'

test.beforeEach (async({page}) =>{
    await page.goto('http://localhost:4200/')

})


test.describe ('Form Layouts page', ()=>{
    test.beforeEach (async({page}) =>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layout').click()
        
    })
    
    test('input fields',async({page})=>{
        const usingTheGridEmailinput = page.locator('nb-card', {hasText: "Using The Grid"}).getByRole('textbox', {name: "Email"})
        await usingTheGridEmailinput.fill('jelena@test.com')
        await usingTheGridEmailinput.clear()
        await usingTheGridEmailinput.pressSequentially('jelena2@test.com', {delay:200})

        //generic assertions
        const inputValue = await usingTheGridEmailinput.inputValue()
        expect(inputValue).toEqual("jelena2@test.com")

        //locator assertion
        await expect(usingTheGridEmailinput).toHaveValue('jelena2@test.com')

    })
        

})
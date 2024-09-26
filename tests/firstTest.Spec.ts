import {test} from '@playwright/test'

//Before all test wil be execute just once  
// test.beforeAll(()=>{
// })

//execute before every test in the Test suite 
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()

})


// This is single test
test('the first test', async ({page})=> {
    await page.getByText('Form Layouts').click()

})


test('navigare to Datapicker page', async ({page})=> {
    await page.getByText('Datepicker').click()

})


//test suite BeforeEach will be executed for the tests in the suite
test.describe('suite 1', ()=> {
test.beforeEach(async({page}) => {
    await page.getByText('Forms').click()

})

test('the first test1', async ({page})=> {
    await page.getByText('Form Layouts').click()

})

test('navigare to Datapicker page1', async ({page})=> {
    await page.getByText('Datepicker').click()

})

})






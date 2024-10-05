import {test, expect} from  '@playwright/test'


test.beforeEach(async({page}, testInfo)=>{

    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
    testInfo.setTimeout(testInfo.timeout + 2000)

})


test('auto waiting', async({page}) =>{

    const succcesbutton = page.locator('.bg-success')

    //await succcesbutton.click()

    //const text = await succcesbutton.textContent()

    // await succcesbutton.waitFor({state:"attached"})
    // const text = await succcesbutton.allTextContents()
    // expect(text).toContain('Data loaded with AJAX get request.')

    await expect(succcesbutton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
   
    
    
    
    })

    test ( 'alternative waits', async({page}) => {
        const succcesbutton = page.locator('.bg-success')

        //____ wait for element
        // await page.waitForSelector('.bg-success')

        //wait for particula respons
        // await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

        //__wait for network calls to be complted ('NOT recomended')
        await page.waitForLoadState('networkidle')

    const text = await succcesbutton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')



    })



    test('timeouts', async({page}) =>{
       // test.setTimeout(10000)
        test.slow
        const succcesbutton = page.locator('.bg-success')
        //overide timeout
        //await   succcesbutton.click({timeout: 16000})
        await   succcesbutton.click()
       
        
        })
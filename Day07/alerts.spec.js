import {test,expect} from '@playwright/test'

test('alert handling', async({page}) =>{
    page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.waitForTimeout(10000)
    page.on('dialog',async(alert) =>{
    let alertType = alert.type()
    console.log(alertType)
    console.log(alert.message())
    if(alertType === "alert"){
        await alert.accept()
    }else if(alertType === "confirm"){
        await alert.dismiss()
    }else if(alertType === "prompt"){
        await alert.accept("sample Text")
    }else{
        console.log("others")
    }
})
    await page.locator(`//button[text()="Click for JS Alert"]`).click()
    const alertResult = await page.locator(`#result`).innerText()
    console.log("After clicking on JS Alert: "+ alertResult)
    await expect(page.locator(`#result`)).toContainText("successfully")

    await page.locator(`//button[text()="Click for JS Confirm"]`).click()
    const confirmResult = await page.locator(`#result`).innerText()
    console.log("After clicking on JS confirm: "+ confirmResult)
    await expect(page.locator(`#result`)).toContainText("Cancel")

    await page.locator(`//button[text()="Click for JS Prompt"]`).click()
    const promptResult = await page.locator(`#result`).innerText()
    console.log("After clicking on JS prompt: "+ promptResult)
    await expect(page.locator(`#result`)).toContainText("sample Text")
})

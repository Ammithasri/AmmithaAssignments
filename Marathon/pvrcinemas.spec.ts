import {test,expect} from '@playwright/test'

test('pvr cinemas', async({page}) =>{
await page.goto("https://www.pvrcinemas.com/")
await page.getByRole(`heading`,{name: "Chennai"}).click()
await page.locator(`//span[text()="Select Movie"]`).click()
await page.locator(`(//span[text()="THE ODYSSEY"])[3]`).click()
await page.locator(`//span[text()="Today"]`).click()
await page.locator(`//span[text()="PVR Heritage RSL ECR Chennai"]`).click()
await page.locator(`//span[text()="10:10 PM"]`).click()
await page.getByRole(`button`,{name: "Submit"}).click()
await page.getByRole(`button`,{name: "Accept"}).click()
await page.waitForTimeout(3000)
await page.getByRole(`button`,{name: "Accept"}).click()
const seats = page.locator(`//span[contains(@id,'PE.PRIME')]`)
await seats.nth(0).click()
await seats.nth(1).click()
let grandTotal1 = await page.locator(`//div[@class="grand-prices"]`).innerText()
grandTotal1 = grandTotal1.trim()
console.log(grandTotal1)
await page.getByRole(`button`,{name: "Proceed"}).click()
let grandTotal2 = await page.locator(`(//h6/span)[3]`).innerText()
grandTotal2 = grandTotal2.trim()
console.log(grandTotal2)
if(grandTotal1 === grandTotal2){
    console.log("Grand Total is matching and displayed on screen")
}

})
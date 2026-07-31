import test, { chromium } from '@playwright/test';

test('salesforce loginn', async() => {
	
// launch browser
const browser = await chromium.launch({headless: false})
// create browser context
const context = await browser.newContext()
// open new page
const newPage = await context.newPage()
//Navigate to salesforce
await newPage.goto("https://login.salesforce.com/")

// enter username
await newPage.locator(`#username`).fill("dilipkumar.rajendran@testleaf.com")
// enter password
await newPage.locator(`#password`).fill("TestLeaf@2025")
await newPage.locator(`#Login`).click()
await newPage.waitForTimeout(10000); // 1 second = 1000 milliseconds
const pageTitle = await newPage.title()
const pageUrl  = newPage.url()

console.log("Successfully logged in...")
console.log("Title of the page is :"+ pageTitle)
console.log("Url of the page :" + pageUrl)
});
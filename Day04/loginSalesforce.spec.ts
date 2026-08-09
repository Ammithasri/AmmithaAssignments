// login salesforce using xpath 

import test, { chromium } from '@playwright/test';

test('salesforce loginn', async({ }) => {
    
// launch browser
const browser = await chromium.launch({headless: false})
// create browser context
const context = await browser.newContext()
// open new page
const newPage = await context.newPage()
//Navigate to salesforce
await newPage.goto("https://login.salesforce.com/")

// xpath using attribute id - to enter username 
await newPage.locator(`//input[@id="username"]`).fill("dilipkumar.rajendran@testleaf.com")

// xpath using contains @partial att value - type to enter password
await newPage.locator(`//input[contains(@type,"pass")]`).fill("TestLeaf@2025")

//xpath using attribute name - to click
await newPage.locator(`//input[@name="Login"]`).click()
await newPage.waitForTimeout(10000); // 1 second = 1000 milliseconds

console.log("Successfully logged in...")
// to verify element is present in the page after login
const pageTitle = await newPage.title()
console.log("Title of the page is :"+ pageTitle)

const label = await newPage.locator(`//h1[text()= "Home"]`).innerText()
console.log(label)
console.log("user landed in home page")
});


// completed

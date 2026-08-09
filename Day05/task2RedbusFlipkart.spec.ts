// Day 5 - Task 2 Login to Redbus and flipkart using msedge and firefox, print title and URL
import {test, chromium, firefox} from '@playwright/test';

// launch redbus using msedge browser and print page title and url
test('launch redbus in edge', async() =>{
 const browser = await chromium.launch({channel: 'msedge', headless: false})
 const context = await browser.newContext()
 const page  = await context.newPage()
 await page.goto("https://www.redbus.in/")
 
 const redbusTitle = await page.title()
 console.log("Title of Redbus is " + redbusTitle)

 const redbusUrl =page.url()
 console.log("Url is " + redbusUrl)

})

// launch flipkart using firefox browser and print page title and url
test('launch flipkart in firefox', async () => {
 const browser = await firefox.launch({headless: false})
 const context = await browser.newContext()
 const page = await context.newPage()
 await page.goto("https://www.flipkart.com/")
 console.log("launched the browser")
 
 const flipkartTitle = await page.title()
 console.log("Title of flipkart is "+ flipkartTitle)

 const flipkartUrl = page.url()
 console.log("Url is "+ flipkartUrl)

})

//completed
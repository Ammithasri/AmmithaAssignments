// Day 5 Task3 locators
//a. Create lead using salesforce 
import {test, expect}  from '@playwright/test'

test('create a lead in salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel(`Username`).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel(`Password`).fill("TestLeaf@2025")
    await page.getByRole(`button`,{name: "Log In"}).click()
    await page.locator(`.slds-icon-waffle`).click()
    await page.waitForTimeout(10000)
    await page.getByRole(`button`,{name: "View All Applications"}).click()
    await page.locator(`(//p[contains(@title,'sales')])[2]`).click()
    await page.getByRole(`link`,{name: "Leads"}).click()
    await page.getByRole(`button`,{name:"New"}).click()
    await page.getByRole(`combobox`,{name: "Salutation"}).click()
    await page.locator(`//span[text()='Ms.']`).click()
    await page.getByRole(`textbox`,{name: "Last Name"}).fill("A")
    await page.getByRole(`textbox`,{name: "Company"}).fill("KAA corp")
    await page.getByRole(`button`,{name: "Save", exact: true}).click()
    await expect (page.getByText("was created")).toBeVisible()
})

// b. Create and edit a lead in leaftpas
test('Edit a lead in leaftaps', async ({ page }) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.getByLabel(`Username`).fill("democsr")
    await page.getByLabel(`Password`).fill("crmsfa")
    await page.getByRole(`button`).click()
    await page.getByRole(`link`, { name: "CRM/SFA" }).click()
    await page.getByRole(`link`, { name: "Leads" }).click()
    await page.getByRole(`link`, { name: "Create Lead" }).click()
    await page.locator(`#createLeadForm_companyName`).fill("KAA Corp")
    await page.locator(`#createLeadForm_firstName`).fill("Ammitha")
    await page.locator(`#createLeadForm_lastName`).fill("A")
    await page.locator(`.smallSubmit`).click()
    await page.getByRole(`link`,{name: "Edit"}).click()
    await page.locator(`#updateLeadForm_companyName`).fill("KAA")
    await page.getByRole(`button`,{name: "Update"}).click()

})

// c. Create Individuals in salesforce

test('create an individual in salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel(`Username`).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel(`Password`).fill("TestLeaf@2025")
    await page.getByRole(`button`,{name: "Log In"}).click()
    await page.locator(`.slds-icon-waffle`).click()
    await page.waitForTimeout(10000)
    await page.getByRole(`button`,{name: "View All Applications"}).click()
    await page.getByRole('link', { name: 'Individuals' }).click();
    await page.getByRole(`button`,{name:"Individuals List"}).click()
    await page.locator(`//a[@title='New']`).click()
    await page.locator(`//input[@placeholder="Last Name"]`).fill("Sri")
    await page.locator(`(//button[@title="Save"])[2]`).click()
    const toastMessage = await page.locator(`//div[text()='Individual']/following-sibling::div`).innerText()
    console.log(toastMessage)
})


// d. Edit Individual in salesforce

test('edit an individual in salesforce', async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.getByLabel(`Username`).fill("dilipkumar.rajendran@testleaf.com")
    await page.getByLabel(`Password`).fill("TestLeaf@2025")
    await page.getByRole(`button`,{name: "Log In"}).click()
    await page.locator(`.slds-icon-waffle`).click()
    await page.waitForTimeout(10000)
    await page.getByRole(`button`,{name: "View All Applications"}).click()
    await page.getByRole('link', { name: 'Individuals' }).click();
    await page.getByRole(`button`,{name:"Individuals List"}).click()
    await page.locator(`//a[@title='New']`).click()
    await page.locator(`//input[@placeholder="Last Name"]`).fill("Sri")
    await page.locator(`(//button[@title="Save"])[2]`).click()
    await page.getByRole('link', { name: 'Individuals' }).click();
    await page.getByRole(`searchbox`,{name:"Search this list..."}).fill("Sri")
    await page.getByRole(`searchbox`,{name:"Search this list..."}).press('Enter')
    await page.getByRole(`button`,{name:"Show actions"}).first().click()
    await page.getByRole(`menuitem`,{name:"Edit"}).click()
    await page.getByRole(`button`,{name:"Salutation --None--"}).click()
    await page.getByRole(`option`,{name:"Mr."}).click()
    await page.getByRole(`textbox`,{name:"First Name"}).fill("Ammitha")
    await page.locator( `//span[text()="Save"]`).click()
})

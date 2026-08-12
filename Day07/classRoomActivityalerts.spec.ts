import test from '@playwright/test'

// login to leaftaps, create a lead
test('handle alerts', async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    const frame = page.frameLocator(`#iframeResult`)

})
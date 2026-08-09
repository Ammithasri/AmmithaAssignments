import {test,expect} from '@playwright/test'

test('decathlon', async({page}) =>{
    await page.goto("https://www.decathlon.in/")
    await expect (page.getByRole(`link`,{name: "Decathlon Home"})).toBeVisible()
    await page.locator(`//input[@type="search"]`).click()
    await page.getByPlaceholder("Search for 60+ sports and 6,000+ products").fill("shoes")
    await page.getByPlaceholder("Search for 60+ sports and 6,000+ products").press("Enter")
    await expect(page.locator(`//div[contains(text(),' results for shoe')]`)).toBeVisible()
    await page.getByRole(`button`,{name: "Gender"}).click()
    await page.locator(`(//span[text()="Men"])[1]`).click()
    await page.locator(`//span[text()="Size"]`).click()
    await page.locator(`(//span[text()="Uk 8 - eu 42"])[1]`).click()
    await page.locator(`//span[text()="Most relevant"]`).click()
    await page.locator(`//span[text()="Highest discount "]`).click()
    const product = page.locator(`//div[@data-test-id="product-card-product-image:stickers"]`)
    await product.nth(0).click()
    const productTitle = await page.locator(`//span[@data-test-id="pdp-product-info-name"]`).innerText()
    await page.locator(`//span[text()="UK 8 - EU 42"]`).click()
    await page.getByRole(`button`,{name:"Add to cart"}).click()
    await page.getByRole(`button`,{name:"Go to cart"}).click()
    const productTitleCart = await page.locator(`//span[@data-test-id="text:cart-product-name"]`).innerText()
    console.log(productTitle)
    console.log(productTitleCart)
    if(productTitle === productTitleCart ){
        console.log("Item added to cart successfully")
    }
    console.log("end")

   

})


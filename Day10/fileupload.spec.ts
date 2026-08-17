// class assignment for file upload 

import {test,expect} from '@playwright/test'
import path from 'path'

test('upload file', async ({ page }) => {
    await page.goto(`https://the-internet.herokuapp.com/upload`)
    const fileUploadButton = page.locator(`#file-upload`)
    const filePath = path.join(__dirname,"../../Test Data/spiderman.jpg")
    console.log(filePath)
    await fileUploadButton.setInputFiles(filePath)
    await page.locator(`#file-submit`).click()
    await expect(page.locator(`#uploaded-files`)).toHaveText(/spiderman.jpg/)
   
})



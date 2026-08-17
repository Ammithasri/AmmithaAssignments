"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const path_1 = __importDefault(require("path"));
(0, test_1.test)('upload file', async ({ page }) => {
    await page.goto(`https://the-internet.herokuapp.com/upload`);
    const fileUploadButton = page.locator(`#file-upload`);
    const filePath = path_1.default.join(__dirname, "../../Test Data/spiderman.jpg");
    console.log(filePath);
    await fileUploadButton.setInputFiles(filePath);
    await page.locator(`#file-submit`).click();
    await (0, test_1.expect)(page.locator(`#uploaded-files`)).toHaveText(/spiderman.jpg/);
});

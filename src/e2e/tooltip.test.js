import puppeteer from 'puppeteer';

describe('test', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch();
    });

    test('should show tooltip', async () => {
        const page = await browser.newPage();
        await page.goto('http://localhost:4173');
        await page.locator('btn').click;
    });

    afterEach(async () => {
        await browser.close();
    });
});
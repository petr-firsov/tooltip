import puppeteer from 'puppeteer';

test('should show tooltip', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://C:/Users/peter/Desktop/tooltip/dist/index.html');
    await page.locator('btn').click;
});


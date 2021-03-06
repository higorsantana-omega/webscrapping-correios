import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  console.log(browser)
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

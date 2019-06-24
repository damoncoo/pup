
const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({headless: false}, ['--start-fullscreen']
  );
  const page = await browser.newPage();

  await page.goto('https://baidu.com');
  await page.screenshot({path: 'baidu.png'});
 
  await browser.close();
})();

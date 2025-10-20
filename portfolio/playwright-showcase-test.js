const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Navigating to localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Wait for the page to fully load
  await page.waitForTimeout(2000);

  // Scroll to the Design Showcase section
  console.log('Scrolling to Design Showcase section...');
  await page.evaluate(() => {
    const showcaseSection = document.querySelector('#showcase');
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  await page.waitForTimeout(2000);

  // Take full page screenshot
  console.log('Taking full page screenshot...');
  await page.screenshot({
    path: 'screenshot-design-showcase-full.png',
    fullPage: true
  });

  // Take screenshot of just the showcase section
  const showcaseElement = await page.$('#showcase');
  if (showcaseElement) {
    console.log('Taking Design Showcase section screenshot...');
    await showcaseElement.screenshot({
      path: 'screenshot-design-showcase-section.png'
    });
  }

  // Test mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(1000);

  await page.evaluate(() => {
    const showcaseSection = document.querySelector('#showcase');
    if (showcaseSection) {
      showcaseSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  await page.waitForTimeout(1000);

  console.log('Taking mobile screenshot...');
  await page.screenshot({
    path: 'screenshot-design-showcase-mobile.png',
    fullPage: true
  });

  // Check for console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('Browser console error:', msg.text());
    }
  });

  console.log('Screenshots saved successfully!');
  await browser.close();
})();

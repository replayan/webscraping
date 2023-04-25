import puppeteer from "puppeteer-core";
async function run() {
  let browser;

  try {
    const auth = "USERNAME:PASSWORD";
    browser = await puppeteer.connect({
      browserWSEndpoint: `wss://${auth}@zproxy.lum-superproxy.io:9222`,
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto("https://www.amazon.com/Best-Sellers/zgbs");
    console.log("page loaded");

    const productsData = await page.evaluate(() => {
      const products = Array.from(
        document.querySelectorAll(".a-carousel-card")
      );
      return products.map((product) => {
        try {
          const titleElement = product.querySelector(
            ".p13n-sc-truncate-desktop-type2"
          ).innerText;
          const priceElement = product.querySelector(
            "._cDEzb_p13n-sc-price_3mJ9Z"
          ).innerText;
          return {
            title: titleElement ? titleElement.trim() : null,
            price: priceElement ? priceElement.trim() : null,
          };
        } catch (error) {
          console.error("Error processing product", error);
          return null;
        }
      });
    });

    console.log(productsData);

    await page.close();
  } catch (error) {
    console.error("scrape failed", error);
  } finally {
    await browser?.close();
  }
}

run();

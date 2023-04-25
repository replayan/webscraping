# Web Scraping App using Puppeteer and BrightData Proxies

This is a web scraping app built with Puppeteer and BrightData proxies that allows you to easily scrape data from websites. With this app, you can:

- Scrape data from any website using Puppeteer.
- Route your requests through BrightData's residential or data center proxies for better performance and reliability.
- Customize your scraping settings, such as navigation timeout, page viewport, and user agent.

## Requirements

- Node.js version 14 or higher.
- A BrightData account and API key.
- A valid BrightData proxy session token.

## Usage

1. Open the `index.js` file and modify the `SCRAPING_URL` variable to the URL of the website you want to scrape.

2. Modify the scraping settings as desired by editing the `SCRAPE_SETTINGS` object. The available settings are:

- `timeout`: the maximum amount of time to wait for a page to load, in milliseconds.
- `viewport`: the size of the browser viewport, in pixels.
- `userAgent`: the user agent string to use for the browser.

3. Run the app using the following command:

```bash
node index.js



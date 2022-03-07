const puppeteer = require("puppeteer");
const cheerio = require("cherio");

const link = "https://event.binus.ac.id/";

events = [];
const fetch = async () => {
  const browser = await puppeteer.launch({
    //   headless: false,
  });
  const page = await browser.newPage();
  // await page.setRequestInterception(true);
  await page.goto("https://event.binus.ac.id/", { waitUntil: "networkidle0" });
  // await page.waitForNavigation();
  let res = await page.evaluate(() => document.body.innerHTML);
  const $ = await cheerio.load(res);

  await $(".event").each((index, item) => {
    const link = $(item).find(".action-wrapper>a").attr("href");
    if (!link) return;
    const title = $(item).find(".headline-title").text().trim();
    const details = $(item).find(".value-event-start-date").text().trim();
    const data = { title: title, details: details, link: link };
    //  data.details = this.details;
    //  data.link = this.link
    events.push(data);
  });
  // await console.log(events);

  // await page.screenshot({fullPage:true,path:"Images/nyeh.png"})
  await browser.close();
};

// fetch();
module.exports={events,fetch}
// await page.screenshot({fullPage:true,path:"Images/nyeh.png"})

//todos
//parse the date with todays data and only print the today and tomorrow date

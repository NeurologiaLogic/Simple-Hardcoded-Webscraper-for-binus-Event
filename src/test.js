const { fetch, events } = require("./puppeteer");

const meh = async (msg) => {
  if (msg === "event") {
    await fetch();
    let dt = await events;
    console.log(dt);
    await console.log(dt);
  }
};
meh("event");

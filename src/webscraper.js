var axios = require("axios");
const cheerio = require("cherio");

//single page webscrape
const link = "https://event.binus.ac.id/";

  events = [];
//event list
//event
const fetchData = async () => {
  await axios
    .get(link)
    .then((res) => {
      const $ = cheerio.load(res.data);
      //loop parent
      //get all the events
      $(".event-list").each((_idx, el) => {
        const data = new Object();
        const title = $(".value-text").text();
        //  const details = $(el).find().text()
        //  const link = $(el).find().text()
        data.title = title;
        //  data.details = this.details;
        //  data.link = this.link
        events.push(data);
      });
      console.log(events);
    })
    .catch((e) => {
      console.log(e);
    });
};

fetchData(link);
module.exports = fetchData();
//process
//get the parent loop over all the iterations
//look for the childs

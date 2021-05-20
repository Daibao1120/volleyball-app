const fs = require("fs");
const client = require("./db_client.js");
const csv = require("csv-parser");
const stripBom = require("strip-bom-stream");
const results = [];

fs.createReadStream("./data/attendee.csv")
    .pipe(stripBom())
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
        const fix_data = results.map((d) => {
            d.Height = +d.Height;
            d.Weight = +d.Weight;
            d.Number = +d.Number;
            d.BlockingMH = +d.BlockingMH;
            d.SpikingMH = +d.SpikingMH;
            d.Birthday = d.Birthday.replace(/\//g, "-");

            return d;
        });
        console.log(fix_data);
        client
            .db("volleyball")
            .collection("attendee")
            .insertMany(fix_data, (err, res) => {
                if (err) throw err;
                client.close();
                console.log(results);
            });
    });
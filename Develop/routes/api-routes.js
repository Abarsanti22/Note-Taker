const fs = require('fs');

var uniqid = require("uniqid");
module.exports = function (app) {

    app.get("/api/notes", (req, res) => {
    console.log("Execute GET notes request");
    let data = fs.readFileSync("./app/data/db.json", "utf8");

    res.json(JSON.parse(data));
  });
  app.post("/api/notes", (req, res) => {

    const newNote = {
        ...req.body,
        id: uniqid(),
      };


    console.log("Post Request for new notes");

    let data = fs.readFileSync("./app/data/db.json", "utf8");
    const dataJSON = JSON.parse(data);
    dataJSON.push(newNote);


    

// var _ = require("lodash");
// const notes = require("./notes.js");
// console.log("another page is loaded");

// var age = notes.age;

// var result = notes.addNumber(age + 19, 10);
// console.log(result);

// var data = ["person", "person", 1, 2, 1, 2, "name", "age"];

// var filter = _.uniq(data);
// console.log(filter);

// JSON
// const jsonString ='{"name": "John","age": 25,"city": "New york"}';
// const jsonObject = JSON.parse(jsonString)
// console.log(jsonObject.name);

// const objectToConvert = {
//     "name": "alice",
//     age: 25
// }

// const json = JSON.stringify(objectToConvert)
// console.log(json);

const express = require("express");
const { size } = require("lodash");
const app = express();
const port = 3000;
const db = require("./db");

const bodyParser = require("body-parser");
const MenuItem = require("./models/MenuItem");
app.use(bodyParser.json());

const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

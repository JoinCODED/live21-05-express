const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

/**
 * Make a GET route "/cute/:animal"
 * Which takes one parameter :animal and returns it as a cute animal
 *
 * For example get("/cute/cat")
 * The resposnse should be { animal: "cute cat"}
 */

/**
 * Make a POST route "/band"
 * Which expects the name of the band in the request body and returns a band object of it
 * A successful response should haeve the code 201
 *
 * For example post("/band") with body {name: "Arctic Monkeys"}
 * The response should be
 * {
 *    name: "Arctic Monkeys",
 *    slug: "arctic-monkeys",
 *    fans: 0
 * }
 */

/**
 * Using Multer, add an image upload route
 *
 * Make a POST route "/upload" which receives two form data fields:
 *   - an "image" field with a single image file
 *   - a "newFileName" field which the request uses to save the file on server
 * Then responds with an object containing the URL of the file saved in the media directory
 *
 * For example post("/upload") with attached image "hello world.png" and newFileName "test"
 * The response should be
 * {
 *    url: "https://localhost:8000/media/test.jpg"
 * }
 *
 * NOTICE the extention should be automatially taken from the original file name
 */

module.exports = app;

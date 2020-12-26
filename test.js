//TODO: convert the image data from binary to base64
const fs = require("fs");

const imageBin = await fs.readFileSync("../assets/otter-logo.png", {
  encoding: "binary",
});
const buffer = Buffer.fro;
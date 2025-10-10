/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import input from "@inquirer/input";
import qr from "qr-image";
import fs from "fs";

// getting url from user input
const url = await input({ message: "Enter URL" });

// save user input to txt file
fs.writeFile("url.txt", url, (err) => {
  if (err) throw err;
  console.log("file saved!");
});

// creating the qr image from user entered url
const qr_img = qr.image(url);
qr_img.pipe(fs.createWriteStream("i_love_qr.png"));

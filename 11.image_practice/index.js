const containerEl = document.getElementById("container");

const imgPath = ["images/bird.jpg", "images/cat.jpg", "images/dog.png"];
let imgList = "";
for (let i = 0; i < imgPath.length; i++) {
  imgList += `<img src=${imgPath[i]}/>`;
}
containerEl.innerHTML = imgList;

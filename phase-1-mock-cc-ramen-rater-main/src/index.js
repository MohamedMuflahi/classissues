const ramenMenu = document.getElementById("ramen-menu");
const newName = document.getElementById("new-name");
const restaurant = document.getElementById("new-restaurant");
const image = document.getElementById("new-image");
const detailImage = document.getElementsByClassName("toptop")
const rating = document.getElementById("new-rating");
const name = document.getElementById("topText");

//fetch api

fetch("../db.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    cb(data);
  });
function cb(data) {
   changeImg(data.ramens[0].image);
   changeName(data.ramens[0].name)

}
function changeImg(img){
    detailImage.src = img;
    console.log(detailImage.src);
}
function changeName(data){
    name.innerHTML = data;

}
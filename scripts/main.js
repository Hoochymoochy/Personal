var quoteArea = document.querySelector('.quote')
var author = document.querySelector('.author')
var rightB = document.querySelector('.rightButton')
var leftB = document.querySelector('.leftButton')
var picture = document.querySelector('.myPics')

var array = ["pics/picOne.jpg", "pics/picTwo.jpg","pics/picThree.jpg", "pics/picFour.jpg","pics/unnamed.jpg"]
var i = 0;


rightB.addEventListener('click',()=>{
  if(i < 4){
    i++
    picture.src = array[i];
    console.log(i)
  }
})



leftB.addEventListener('click',()=>{
  if(i > 0){
    i--
    picture.src = array[i];
  }
})

fetch('https://api.quotable.io/random')
  .then(response =>  response.json()
  .then(data => quoteArea.textContent = data.content));

  fetch('https://api.quotable.io/random')
  .then(response =>  response.json()
  .then(data => author.textContent = data.author));
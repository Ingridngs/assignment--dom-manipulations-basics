
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1

  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  // you do the rest
  answerPTagWithValue.innerHTML=answerPTagWithValue.textContent *=2

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
var circle = document.querySelector('#circle-bw')

if(circle.style.backgroundColor !== "black"){
  circle.style.backgroundColor = "black"
  } else {
    circle.style.backgroundColor = "white"
  
}

   
})
//manipular primero 
// depsues doblar 
document.querySelector("#blow-up button").addEventListener('click',function(){
// TASK #4}

const sizeOne = document.querySelector(".circle-red")

   if(sizeOne.style.width === "40px"){

   sizeOne.style.width = (40 * 2)+"px"
   sizeOne.style.height =  sizeOne.style.width

   return sizeOne.style.width
   }
   

   if (sizeOne.style.width === "80px") {
     sizeOne.style.width = (80 * 2)+"px"
     sizeOne.style.height =  sizeOne.style.width
     return sizeOne.style.width
   }

    if (sizeOne.style.width === "160px") {
     sizeOne.style.width = (160 * 2)+"px"
     sizeOne.style.height =  sizeOne.style.width
     return sizeOne.style.width
   }

   if (sizeOne.style.width === "320px") {
     sizeOne.style.width = (160 / 4)+"px"
     sizeOne.style.height =  sizeOne.style.width
     return sizeOne.style.width
   }






})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
})

const inactiveAll= document.querySelectorAll("li")
const arrayOfinactive= [...inactiveAll]
for(let i = 0; i < arrayOfinactive.length; i++){
  const ina =inactiveAll[i]

  if( ina.textContent==="inactive user"){
    ina.classList.add(".inactive")
    ina.stylr.display="none"
  }
}






document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

var changeBox= document.querySelector("#reverse-squares  .student-workspace .answer-box")

changeBox.style.backgroundColor="black"

changeBox.style.display="flex"

changeBox.style.flexDirection="row-reverse"

changeBox.classList.add("reverse-squares")

})




document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

var item= document.querySelectorAll("#pig-latin .content-box .answer-box #tasks li")
const arrayOfElements= [...item]


for (let i= 0; i < arrayOfElements.length ; i++){

  const element= item[i]
  let text= element.textContent
  let resText= text.split("").reverse().join("")

     element.textContent=resText
   }

})

document.querySelector("#cycle-image button").addEventListener('click',function(){


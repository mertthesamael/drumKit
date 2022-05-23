for (let i = 0; i <7; i++){
document.querySelectorAll("button")[i].addEventListener("click", clicked);

}

function clicked(){
  let audio = new Audio("sounds/tom-1.mp3")
  switch (this.innerHTML){
    case "w" : let tom1 = new Audio("sounds/tom-1.mp3")
    tom1.play()
    break;
    case 'a': let tom2 = new  Audio("sounds/tom-2.mp3")
    tom2.play()
    break;
    case 's': let tom3 =new Audio("sounds/tom-3.mp3")
    tom3.play()
    break;
    case 'd': let tom4= new  Audio("sounds/tom-4.mp3")
    tom4.play()
    break;
    case 'j': let crash = new Audio ("sounds/crash.mp3")
    crash.play()
    break;
    case 'k': let kick = new Audio ("sounds/kick-bass.mp3")
    kick.play()
    break;
    case 'l': let snare = new Audio ("sounds/snare.mp3")
    snare.play()
    break;
  }
   buttonAnimation(this.innerHTML)

}
document.addEventListener("keydown", function(k){
  let audio = new Audio("sounds/tom-1.mp3")
  switch (k.key){
    case "w" : let tom1 = new Audio("sounds/tom-1.mp3")
    tom1.play()
    break;
    case 'a': let tom2 = new  Audio("sounds/tom-2.mp3")
    tom2.play()
    break;
    case 's': let tom3 =new Audio("sounds/tom-3.mp3")
    tom3.play()
    break;
    case 'd': let tom4= new  Audio("sounds/tom-4.mp3")
    tom4.play()
    break;
    case 'j': let crash = new Audio ("sounds/crash.mp3")
    crash.play()
    break;
    case 'k': let kick = new Audio ("sounds/kick-bass.mp3")
    kick.play()
    break;
    case 'l': let snare = new Audio ("sounds/snare.mp3")
    snare.play()
    break;
  }
 buttonAnimation(k.key)
})
function buttonAnimation (currentKey){
  let activeButton = document.querySelector("."+currentKey);
  console.log('.'+currentKey)
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed")
   },100)

}

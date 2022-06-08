const start = document.querySelector(".start")
const score = document.querySelector(".score")
const hole = document.querySelectorAll(".hole")
const mole = document.querySelectorAll(".mole")
let number=0;





function randomNumber(){
    let random =Math.floor((Math.random() * 6));
    hole[random].classList.add("up")
    
}





start.addEventListener("click",()=>{
    start.textContent="Restart"
    hole.forEach(element=>{
        element.classList.remove("up");
 })
    number=0;
    score.textContent=number;
    var intervalId = window.setInterval(function(){
        hole.forEach(element=>{
            element.classList.remove("up");
     })
        randomNumber()
        
     }, 750);
    
})


     mole.forEach(e => {
        e.addEventListener("click",()=>{
            e.parentElement.classList.remove("up");
            number++
            score.textContent=number
     });
     
     })
     




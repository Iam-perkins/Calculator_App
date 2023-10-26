const but9= document.getElementById("but9");
let buttons= document.querySelectorAll("button");
const clearButton = document.getElementById("otherbut9");
let container = document.getElementById("first");
let buttonChoice ;

but9.addEventListener("click",(e)=>{
    document.getElementById("first").innerHTML=" ";
    document.getElementById("first").innerHTML=9;

})

clearButton.addEventListener("click",(e)=>{
    document.getElementById("first").innerHTML=" ";
    document.getElementById("first").innerHTML=0;

})

buttons.forEach(buttons=>{
    

    buttons.addEventListener('click',(e)=>{
    
       e.target.innerHTML;
       buttonChoice=e.target.innerHTML;
       container= buttonChoice;

    })
})

const but9= document.getElementById("but9");
let buttons= document.querySelectorAll("button");
const clearButton = document.getElementById("otherbut9");
let container = document.getElementById("first");
const plus = document.getElementById("+");
let buttonChoice ;

     buttons.forEach(buttons => buttons.addEventListener("click",(e)=>{
        buttonChoice=e.target.id;
        document.getElementById("first").innerHTML=" ";
        container.innerHTML=buttonChoice;
     }))

/*but9.addEventListener("click",(e)=>{
    document.getElementById("first").innerHTML=" ";
    document.getElementById("first").innerHTML=9;

})
*/
clearButton.addEventListener("click",(e)=>{
    document.getElementById("first").innerHTML=" enter";
  

})

   plus.addEventListener("click",(e)=>{
    
   })
function add( a, b){
    return a+ b;
}
function multiply(a, b){
    return a*b;
}
function substract(a, b){
    return a-b;
}
function divide(a, b){
    return a/b;
}

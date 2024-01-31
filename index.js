
function btnclick(){
    let p1 = document.getElementById("p1-el")
    console.log(p1)
    let rand = Math.random()*6
    let num2 = Math.floor(rand)+1
    p1.textContent =  rand + "   -   " + num2
}
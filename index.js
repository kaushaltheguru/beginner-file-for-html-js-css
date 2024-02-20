
let countries = ["china","india","usa","indonesia","brazil"]
function btnclick(){
    let p1 = document.getElementById("p1-el")
    p1.textContent = "";
    for(let i=0; i<countries.length; i++)
    {
        p1.textContent += `Country with Rank ${i+1} in population is ${countries[i]}    `;
    
    }
    
}
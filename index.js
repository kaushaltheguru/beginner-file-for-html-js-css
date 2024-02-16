let countries = ["china","india","usa","indonesia","brazil"]


function btnclick(){
    let p1 = document.getElementById("p1-el")
    console.log(p1)
    p1.innerHTML = "The Most Populus Countries are as below<br>"
    for(i=0; i<countries.length; i++)
    {    
    p1.innerHTML += "<br>"+countries[i] + "<br>"
    }
}
let countries = ["sm1","india","usa","indonesia","sm2"]
let p1 = document.getElementById("p1-el")

function btnclick(){
    
    p1.innerHTML="";
    console.log(p1)
    p1.innerHTML = "Countries before sorting <Br>"
    displayArray();
    countries.shift();
    countries.unshift("china")
    countries.pop();
    countries.push("brazil");
    displayArray();


}

function displayArray()
{
    p1.innerHTML += "<br>The Most Populus Countries are as below<br>"
    for(i=0; i<countries.length; i++)
    {    
    p1.innerHTML += "<br>"+countries[i] + "<br>"
    }
}
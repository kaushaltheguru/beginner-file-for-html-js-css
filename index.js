let countries = ["Rock","Paper","Scissor"]
let p1 = document.getElementById("p1-el");
let p2 = document.getElementById("p2-el");


function btnclick(){
  
  let j = displayRandomArray(); 
  let player1 = countries[j];
  p1.innerHTML +=  "<br>PLayer One "+player1;

  let k = displayRandomArray();
  let player2 = countries[k];
  p1.innerHTML += "<br> Player Two "+player2;


    if(player1 === "Rock")
    {p2.innerHTML="<br> p1 rock"
        if(player2 == "Rock"){
            p2.innerHTML="Draw"
        }else if(player2 == "Paper"){
            p2.innerHTML="Player 2 Won"
        }else if(player2 =="Scissor"){
            p2.innerHTML="Player 1 Won"
        }
    }else if(player1 == "Paper")
    {
        if(player2 == "Rock"){
            p2.innerHTML="Player 1 Won"
        }else if(player2 == "Paper"){
            p2.innerHTML="Draw"
        }else if(player2 =="Scissor"){
            p2.innerHTML="Player 2 Won"
        }

    }else if(player1 == "Scissor")
    {
        if(player2 == "Rock"){
            p2.innerHTML="Player 2 Won"
        }else if(player2 == "Paper"){
            p2.innerHTML="Player 1 Won"
        }else if(player2 =="Scissor"){
            p2.innerHTML="Draw"
        }

    }


}

function displayArray()
{
    p1.innerHTML += "<br>The Most Populus Countries are as below<br>"
    for(i=0; i<countries.length; i++)
    {    
    p1.innerHTML += "<br>"+countries[i] + "<br>"
    }
}

function displayRandomArray()
{
    let i = Math.random()*countries.length;
    let j = Math.floor(i);
    return j;
}
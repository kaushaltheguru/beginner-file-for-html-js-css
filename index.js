
let ta = document.getElementById("ta-el");

function btnclick(){
    let p1 = document.getElementById("p1-el")
    //console.log(p1)
    //p1.textContent = p1.textContent + " and looks like this button works"
    
    let age = integer(ta.textContent);
    let discount = "";

    if(age<6)
    {
        discount = "free"
    }else if(age<17)
    {
        discount = "Child Discount"
    }else if(age<26)
    {
        discount = "Student Discount"
    }else if(age<66)
    {
        discount = "full price -- you have to instead pay for every one else's discount"
    }else
    {
        discount = "senior Citizen"
    }
    p1.textContent = "You are Eligible for: " + discount;

}
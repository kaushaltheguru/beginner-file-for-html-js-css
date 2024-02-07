
let person = {
    firstName: "rahul",
    lastName: "aggrawal",
    character: "bad",
    age: 52,
    sn:"",
    printPersonDetail: function(){
      let s = "My name is "+ this.firstName + " " + this.lastName + " and my character is very " + this.character
      return s; 
    },
    setName: function(s){
        this.lastName = s+" "+this.lastName;
    }

    }


console.log(person[0])
function btnclick(){
    let p1 = document.getElementById("p1-el")
    console.log(p1)
    person.setName("donkey");
    p1.textContent = p1.textContent + " and looks like this button works" + person.printPersonDetail();
}
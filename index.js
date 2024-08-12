// Declaration Variable

let my_name = "DevHub";
let age = 18;
let isStudent = true;

// console.log("My name is: :", my_name)
// console.log("I'm study:", isStudent)
// console.log("I'm ", age)

function greet(my_name) {
    alert("Hello "+ my_name)
}


let score = 85

if(score >= 90){
    console.log("Very Good!");
} else if (score >= 80) {
    console.log("Good!");
} else {
    console.log("Keep Tryings")
}

if (isStudent) {
    console.log("Let focus");
} else {
    console.log("Relax then");
}

// Loop

for (let i = 0; i < 5; i++) {
    console.log("Print out: ", i);
}

// DOM 
function changeBg() {
    document.body.style.background = "white"
}

const expand = document.querySelectorAll(".form__content--header input")
expand.forEach(showExpand)

function showExpand(item){
    const i = item.parentElement.lastElementChild
    const frame = item.parentElement.parentElement.lastElementChild 
    item.addEventListener("click", () => {
        if(item.checked == true){
            frame.style.display = "block"
            i.style.display = "block"
        }
        else{
            frame.style.display = "none"
            i.style.display = "none"
        }
    })
    i.addEventListener("click", () => {
        frame.style.display = "none"
        i.style.display = "none"
        item.checked = false
    })
}

function checkPilot(){
    
}

const submit = document.querySelector(".btn-submit button")
submit.addEventListener("click", () => {
    if(expand[0].checked == true){
        //check
    }
})

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.join()); // Output: "HTML5,CSS3,Javascript"
console.log(list.join(",")); // Output: "HTML5,CSS3,Javascript"
console.log(list.join("")); // Output: "HTML5CSS3Javascript"
console.log(list.join(", ")); // Output: "HTML5, CSS3, Javascript"
console.log(list.join(" - ")); // Output: "HTML5 - CSS3 - Javascript"

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.toString()); // Output: "HTML5,CSS3,Javascript"

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.push("Bootstrap 4", "ReactJS")); // Output: 5
console.log(list); // Output: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Output: []
console.log(list); // Output: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(1, 1)); // Output: ["CSS3"]
console.log(list); // Output: ["HTML5", "Javascript"]

var list = ["HTML5", "CSS3", "Javascript"];
console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS")); // Output: ["Javascript"]
console.log(list); // Output: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]

// Initialization
var Car = {
    type : "500",
    model : "Lexus",
    color : "White"
};

console.log(Car.model) // Output: Lexus

// Initialization
var Car = {
    addCar : function(){
        console.log("This function add car");
    },
    deleteCar : function(){
        console.log("This function delete car");
    }
};

class Person {
    constructor(name, age) {
        this.name= name;
        this.age= age;
    }
    show() {
        return `My name is: ${this.name}, ${this.age} age`;
    }
}

let person1 = new Person("Peter", 18);


var string = JSON.stringify({name: "X", born: 1990});
console.log(string);
// Output: {"name":"X","born":1990}

var obj = JSON.parse(string);
console.log(obj.name);
// Output: X
console.log(obj.born);
// Output: 1990

function doSomething() {
    console.log('doSomething');
}

var run = function() {
    console.log('run');
}

// normal writing without parameters
let run = () => {
    console.log('run'); // out -> run
}
// Shorten without parameters if there is only 1 line of code in the function
let run = () => console.log('run'); // out -> run
// has parameters
let run = (a,b) => {
    return a + b;
}
// has parameters,and there is only 1 command line
let run = (a,b) => a + b;
// only 1 parameter and there is only 1 command line
let run = a => console.log(a);
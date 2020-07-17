// // 5 variable of different types
// //string
// //number
// //array
// //boolean
// //object

// var a = "Hello World";
// var b = 7
// var c = ["cats", "dogs", "dragons"]
// var d = false;
// var e = {
//    name: "Lizz",
//    age: 26,
//    faveThings: ["skating", "coding", "singing"],
//    isAMom: true,
// }
// console.log( a, b, c, d, e);

// function printStuff() {
//     let color = "blue";
// }

// //make 10 different functions
// //one to pass in an array
// //one to pass in a callback
// //one to pass in string
// //..ob ject
// //boolean


// function gimmeLove() {
//     let affection = true;
// }
// function sayMyName() {
//     let name = "Lizz";
// }
// function hollaBack() {
//     let sayHi = gimmeAHoller();
//     let gimmeAHoller = "whats up";
// }
// function theBangers() {
//     let music = ["How far Ill go", "Say my name", "Almost lover"];
    
// }
// function myHouse() {
//     let house = {
//         color: brown,
//         stories: 1,
//         hasGarage: true,

//     };
// }
// function sayKitty() {
//     let phrase = "kitty";
// }
// function isItCold() {
//     let cold = true;
// }
// function holidayList() {
//     let holidays  = {
//         Jan: "New Years",
//         Feb: "Valentines day",
//         March: "St patricks Day",
//         April: "Easter",
//         May: false,
//         June: false,
//         July: "The fourth",
//         August: false,
//         September: "Labor day",
//         October: "Halloween",
//         November: "Thanksgiving",
//         December: ["Christmas", "New Years Eve"]

//     };
// }
// function singleOrTaken() {
//     let status = "its complicated";
// }
// function lastOne() {
//     let last = 1;


// }

// function displayCoolBikes(array){
//     let result = [];

//     for (let i = 0; i < array.length; i ++)
//     let bike =array[i];

//     if( bike.length > 7){
//         result.push(bike);
//     }
// }
// return result;


const sectionOne = document.getElementById("section-one")
console.log(sectionOne);

const sectionTwo = document.getElementById("section-two")
console.log(sectionTwo);
const sectionThree= document.querySelector("#section-three")
console.log(sectionThree);
const sectionFour = document.querySelector("#section-four")
console.log(sectionFour);
const sectionFive= document.querySelector("#section-five")
console.log(sectionFive);
sectionOne.textContent = "lakers";
sectionTwo.textContent = "warriors";
sectionThree.textContent = "celtics";
sectionFour.textContent = "red sox?"
sectionFive.textContent = "i dont know sports except rugby and hockey";

const paraOne = document.querySelector(".paragraph-one");
console.log(paraOne);
paraOne.textContent = "Lebron James";

const paraTwo = document.querySelector(".paragraph-two");
paraTwo.textContent= "Steph Curry";
console.log(paraTwo);
const paraThree = document.querySelector(".paragraph-three");
paraThree.textContent= "Kemba Walker";
console.log(paraThree);
const paraFour= document.querySelector(".paragraph-four");
paraFour.textContent= "Kyrie Irving";
console.log(paraFour);
// const paraFive = document.querySelector(".paragraph-five");
// paraFive.textContent= "Damien Lillard";
// console.log(paraFive);

const containerSix = document.createElement("div")
console.log(containerSix);
containerSix.classList.add("container-six");
//console.log(containerSix);

const sectionSix = document.createElement("h2");
console.log(sectionSix);
sectionSix.setAttribute("id","section-six")
sectionSix.textContent ="Rockets";

const paraSix= document.createElement("p");
paraSix.classList.add("paragraph-six")
paraSix.textContent ="James Harden";
console.log(paraSix);

const body = document.querySelector("body");
body.appendChild(containerSix);
containerSix.appendChild(sectionSix); 
containerSix.appendChild(paraSix);

// create another container
const containerSeven = document.createElement("div")
// add class
containerSeven.classList.add("container-seven");
console.log(containerSeven);
// create another section
const sectionSeven = document.createElement("h2");
  // add an id
sectionSeven.setAttribute("id","section-seven")
 // add textContent
sectionSeven.textContent ="Time for Rugby";

console.log(sectionSeven);
// create another paragraph
  const paraSeven= document.createElement("p");
  // add a class
   
paraSeven.classList.add("paragraph-seven")
// add textContent
paraSeven.textContent ="Springboks";
console.log(paraSeven);
// append the container to the body


body.appendChild(containerSeven);

// append section to the container

containerSeven.appendChild(sectionSeven); 
// append the paragraph to the container
containerSeven.appendChild(paraSeven);




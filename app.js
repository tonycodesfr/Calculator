// const display = document.querySelectorAll(".keyPad");
// console.log(display);

// display.forEach((element) => {
//   element.addEventListener("click", () => {
//     alert("working");
//   });
// });
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const rightB = document.querySelector(".rightB");
const leftB = document.querySelector(".leftB");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const decimal = document.querySelector(".decimal");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
const Clear = document.querySelector(".Ac");
const percent = document.querySelector(".percent");
let characters = document.querySelector(".characters");
characters;
let one1 = 1;
let two2 = 2;
let three3 = 3;
let four4 = 4;
let five5 = 5;
let six6 = 6;
let seven7 = 7;
let eight8 = 8;
let nine9 = 9;
let zero0 = 0;

one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});

two.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + two2;
});

three.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + three3;
});

four.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + four4;
});

five.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + five5;
});

six.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + six6;
});

seven.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + seven7;
});

eight.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + eight8;
});

nine.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + nine9;
});
zero.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + zero0;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});
one.addEventListener("click", function () {
  characters.innerHTML = characters.innerHTML + one1;
});

document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    characters.innerHTML = "";
  }
});

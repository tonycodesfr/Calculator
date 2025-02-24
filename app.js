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
const divide = document.querySelector(".division");
const equals = document.querySelector(".equals");
const Clear = document.querySelector(".Ac");
const percent = document.querySelector(".percent");
let characters = document.querySelector(".characters");

let expressions = "";
one.addEventListener("click", function () {
  expressions += "1";
  characters.innerHTML = expressions;
});

two.addEventListener("click", function () {
  expressions += "2";
  characters.innerHTML = expressions;
});

three.addEventListener("click", function () {
  expressions += "3";
  characters.innerHTML = expressions;
});

four.addEventListener("click", function () {
  expressions += "4";
  characters.innerHTML = expressions;
});

five.addEventListener("click", function () {
  expressions += "5";
  characters.innerHTML = expressions;
});

six.addEventListener("click", function () {
  expressions += "6";
  characters.innerHTML = expressions;
});

seven.addEventListener("click", function () {
  expressions += "7";
  characters.innerHTML = expressions;
});

eight.addEventListener("click", function () {
  expressions += "8";
  characters.innerHTML = expressions;
});

nine.addEventListener("click", function () {
  expressions += "9";
  characters.innerHTML = expressions;
});

zero.addEventListener("click", function () {
  expressions += "0";
  characters.innerHTML = expressions;
});

rightB.addEventListener("click", function () {
  expressions += "(";
  characters.innerHTML = expressions;
});

leftB.addEventListener("click", function () {
  expressions += ")";
  characters.innerHTML = expressions;
});

divide.addEventListener("click", function () {
  expressions += "/";
  characters.innerHTML = expressions;
});

multiply.addEventListener("click", function () {
  expressions += "*";
  characters.innerHTML = expressions;
});

minus.addEventListener("click", function () {
  expressions += "-";
  characters.innerHTML = expressions;
});

plus.addEventListener("click", function () {
  expressions += "+";
  characters.innerHTML = expressions;
});

decimal.addEventListener("click", function () {
  expressions += ".";
  characters.innerHTML = expressions;
});

Clear.addEventListener("click", function () {
  expressions += "";
  characters.innerHTML = "";
  location.reload();
});

equals.addEventListener("click", function () {
  let result = eval(expressions);
  characters.innerHTML = result;
});

let number = document.querySelector("#input");
let button = document.querySelectorAll("button");
let clicked = false;
let addition = document.getElementById("plus");
let substract = document.getElementById("minus");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let clear = document.getElementById("clear");
let del = document.getElementById("del");
let square = document.getElementById('square')
let input1 = false;
let calculate = false;
let result = [];
let adding  = false; 
let minusing  = false; 
let dividing  = false; 
let multiplying  = false; 
let sqrOf  = false; 
let restart = false;
let a, b, back, ans, op, sqr, sqrt, per, keyin, ans2;

console.log(typeof(sqrOf))

function buttonNo(a) {
    if(restart === true){
        number.value = ''
        restart = false
    }
  input.value += a;
  clicked = true;
}

function calc() {
  if (input1 === false) {
    a = number.value;
    result.push(a);
    number.value = "";
    console.log(a);
    input1 = true;
  } else if (input1 === true) {
    b = number.value;
    result.push(b);
    number.value = "";
    console.log(b);
    input1 = false;
  }
}

addition.addEventListener("click", () => {
  adding = true;
  return calc();
});
substract.addEventListener("click", () => {
  minusing = true;
  return calc();
});
divide.addEventListener("click", () => {
  dividing = true;
  return calc();
});
multiply.addEventListener("click", () => {
  multiplying = true;
  return calc();
});

clear.addEventListener("click", () => {
  number.value = number.value.substr(0, number.value.length - 1);
  if (number.value.length == 1) {
    number.value = "";
    result = [];
  }
});

del.addEventListener("click", () => {
  number.value = "";
  result = [];
});


function totalanswer() {
  b = number.value;
  result.push(b);
  if (adding === true) {
    op = result.join("+");
    adding = false;
  } else if (minusing === true) {
    op = result.join("-");
    minusing = false;
  } else if (dividing === true) {
    op = result.join("/");
    dividing = false;
  } else if (multiplying === true) {
    op = result.join("*");
    multiplying = false;
  }
  ans = op.toString();
  console.log(eval(ans));
  number.value = eval(ans);
  keyin = number.value.toString();
  number.value = eval(keyin)
  result = [];
  if(restart === false){
  restart = true
 }
}

function square1 (){
    if(sqrOf=== false){
        a = number.value
        result.push(a)
        console.log(result[0])
        sqr = result[0].toString()
        number.value = eval(sqr**2)
        result = []
    }
    if(restart === false){
        restart = true
       }
}
function percent (){
    if(sqrOf=== false){
        a = number.value
        result.push(a)
        console.log(result[0])
        per = result[0].toString()
        number.value = eval(a/100)
        result = []
    }
    if(restart === false){
        restart = true
       }
}

function squareroot(){
        a = number.value
        result.push(a)
        console.log(result[0])
        sqrt = result[0].toString()
        number.value = eval(Math.sqrt(a))
        result = []
        if(restart === false){
            restart = true
           }
        }


function totalanswer1(){
  if(adding === false && minusing === false && multiplying === false && dividing === false){
    a = number.value
    result.push(a)
    op = result.join("");
    ans = op.toString();
    ans2 = result.toString()
    number.value = eval(ans2) 
    console.log(ans2)
  }
  }

document.getElementById('equal').addEventListener('click', ()=>{
  if(clicked === true){
    return totalanswer()
  }
  else{
    return totalanswer1();
  }
})

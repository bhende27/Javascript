//comments
/*Multi
line
comments*/

//1.Ways to print in Javascript
//2. javascript console API
// console.log("Hello world");
// alert("me");
//document.write("This is document write"); //Not recommonded
// console.error("This is an error");
// console.warn("Warning");


//3. java script variables
//variables to store data values
var num = 34;
var num1 = 45;
let num2;

num2 = num + num1;
// document.write(num2);

//4.Data Types in JavaScripts
//Primitive Data  types Number,null, undefined string,  Booleans, symbol
//reference data types: Arrays, Objects
//
var str1 = "This is the string";
var str2 = "This is also a string";

//Objects: Key value Pair Like Dict in Python
var marks = {
    ravi: 34, shubham: 78, dhawal: 99.9746
};
// console.log(marks);

//Booleans

var a = true;
var b = false;

//undefined null data type
//var und= undefined;
var und;   // by default it it undefined

var n = null;   //different from undefined, it mean nothing

//Arrays: Collection of different data types

var arr = [1, 2, 3, "four", 4, 5];

//5.Opertors 
//Airthmatic Operators + - / *
var x, y;
x = 34;
y = 56;
// console.log("The value of x+y is", x+y);
// console.log("The value of x-y is", x-y);
// console.log("The value of x/y is", x/y);
// console.log("The value of x*y is", x*y);

//Assignment =, +=, -=, *=, /=
var z = x;
z += y;

// Comparision Operator ==, !=, <=, >=, <,>


//Logical Operator (&& and),(|| or ), (!not)



//Functions

function avg(a, b) {
    return (a + b) / 2;
}

// c1= avg(4,6);
// c2= avg(45, 78);
// console.log(c2);

//conditional if-else

var age = 2;

// if(age>18){
//     console.log("You are a adult");
// }
// else if(age<18 && age >12){
//     console.log("you are minor");
// }
// else{
//     console.log("you are child");
// }

//For Loop

var arr = [1, 2, 3, 4, 5, 6, 7];
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// });

let j = 0;     //block level scope
//const a = 0;  //constant variable

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// do{
// console.log(arr[j]);
// j++;
// }while(j<arr.length)

//break and continue statement

//array methods

let A=['Fan', 'Camera', 34, null, true];
// A.pop()  //removes last indexed element
// A.push('D');  //pushes element at last index
// A.shift()  ..removes element at index 0

//A.unshift("dhawal")  //pushes element at index 0
// A.sort()
//let p=A.toString()



//String methods in javascript

// let str= "This is a String";

//  var l = str.length;
// let c = str.indexOf("String");
// let sliced =str.slice(1, 6);
// d=str.replace("String", "Str");


//Javascript Dates

// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.getUTCFullYear());
// console.log(myDate.getTimezoneOffset());





//DOM Manupulation **IMPORTANT**

let elem= document.getElementById('click');

let elemclass= document.getElementsByClassName('container');

// elemclass[0].style.background= "yellow";

elemclass[0].classList.add('bg-primary');
elemclass[0].classList.add('text_success');
elemclass[0].classList.remove('text_success'); 

//accessing inner HTML and  text inside 
// let p= elemclass[0].innerHTML
//let p= elemclass[0].innerText;


//Accessing element by tag name
let tn= document.getElementsByTagName('div')
createdElement= document.createElement('p');   //Creating element in javascript
createdElement.innerText= "This is created element";
tn[0].appendChild(createdElement);
createdElement2= document.createElement('b');
createdElement2.innerText= "This is bold created";
tn[0].replaceChild(createdElement2, createdElement);
tn[0].removeChild(createdElement2);


// Selecting using query
// sel= document.querySelector('.container');
// sell= document.querySelectorAll('.container');



function clicked(){
     console.log("Button was clicked");
    document.getElementsByClassName('container')[1].innerHTML = "<b> We have clicked on this button</b>";
}
// window.onload =function(){
//     console.log("Document was loaded");
// } 

// Events in Javascripts: Actions by client or user

// let prev = document.querySelectorAll('.container')[1].innerHTML;
// firstcont.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prev;
//     console.log("mouse up container");
// })
// firstcont.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked on this button</b>"
//      console.log("mouse on container");
// })



// click.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked on this button</b>"
// })

// firstcont.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerText = "<b> We have clicked on this button</b>"
// })





// Arrow Functions  When to insert function in middle of something
// function summ(a, b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

// Set Timeout and Set Interal

// logkaro = ()=>{
//     console.log("Logged after 3 sec");
// }

// setTimeout(logkaro, 3000);  //After loading invokes the function

//setInterval(logkaro, 3000);   //Invokes the function continiously after certain interval

 //Javascript LocalStorage
// localStorage.setItem('name','dhawal');
// localStorage.getItem('name');
//localStorage.removeItem('name');
//localStorage.clear()



 //Javascript Json  String

//{key: value, key : value};

// obj= {name: "Dhawal", Age : 22, X: {A: 3,B:6} };
// jso= JSON.stringify(obj);
// parsed= JSON.parse("{\"name\":\"Dhawal\",\"Age\":22,\"X\":{\"A\":3,\"B\":6}}");

//javascript localstorage






//Javascript Versions










 




































































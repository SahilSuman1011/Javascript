// line below is used to print on the console window
//console.log('Jai Shree Ram');

//creating an object

//const rectangle = {
 //   length:1,
 //   breadth:2,
//
//
   // draw: function() {
   //     console.log('draw');
    //}
    //};//

//factory function

//function createRectangle(len, bre){
//    return rectangle ={
//    length:len,
//    breadth:2,
//
//
 //   draw: function() {
 //       console.log('drawing Rectangle');
 //   }
//};
//}
//
//let rectangleObj1 = createRectangle(5, 4);
//rectangle.length;
//rectangle.breadth;
//rectangle.draw();

//Camelcase -> numberOfStudents
//constructorfunction -> Pascal Notation -> First letter of every word is capital -> NumberOfStudents
//It initialises or defines properties or methods.
//class Rectangle {
  //  constructor() {
    //    this.length = 1;
     //   this.breadth = 2;
       // this.draw = function () {
         //   console.log('drawing');
       // };
   // }
//}

//Object creation using constructor function :

//let rectangleObject = new Rectangle();

//rectangleObject.color = "yellow";
//console.log(rectangleObject);

//delete rectangleObject.color;
//console.log(rectangleObject);

//let Rectangle1 = new function(
//    'length', 'breadth' ,
//' this.length = len;
//this.breadth = bre;
//this.draw = function () {
 //   console.log('drawing');
//}');

// object creation using Rectangle1

//let rect = new Rectangle1(2,3)

//console.log(rect)

//let a = {value : 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value)

// let a = {value : 10};
// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

//  let rectangle = {
//      length:2,
//     breadth:4
// }

// //for in loop
// for(let key in rectangle){
//     console.log(key, rectangle[key]);
// }

 //for off loop
// for(let key of Object.keys(rectangle) ){
//     console.log(key);
// }

// object cloning #1
// let src={
//     a:10,
//     b:20,
//     c:30
// }

// let dest = {};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;

// console.log(dest);

// object cloning #2

// let src ={
// a:10,
// b=20,
// c=30
// };

// let dest = Object.assign{}, src,;

// console.log(dest);

// src.a++;

// console.log(dest);

// object cloning #3

//let lastName = 'Wayne';
//
//let firstName = new String('Bruce');
//
//let message = 'This is \n my \n first Message';
//
//let words = message.split(' ');
//
//console.log(message);

//let date = new Date('december 22 1965');
//
//console.log(date);

//let numbers = [1,4,5,7];
//console.log(numbers);
//
//Searching

//console.log(numbers);

//  To check if a number exist in an array 

//if(numbers.indexOf(2) != -1)
//console.log("present");

//console.log(numbers.includes(7));

// in case of References

//let courses = [
 // {no:1, naam:'Love'},
//  {no:2, naam:'Ram'}
//];

//console.log(courses);

//console.log(courses.indexOf({no:1, naam:'Love'}));

//let course = courses.find(course => course.naam === 'Love');


//console.log(course);

// to remove elements :
//let numbers = [1,2,3,4,5,6,7];

//numbers.pop();
//numbers.shift();
//numbers.splice(2, 1); 
//console.log(numbers);

// to empty an array :

//let numbers = [1,2,3,4,5];
//let numbers2 = numbers;
//numbers = [];

//numbers.length = 0;

//console.log(numbers);
//console.log(numbers2);

//let combined = first.concat(second);
//console.log(combined);

//let sliced = combined.slice(2,3);
//console.log(sliced);

//let marks = [10,20,30,40,50,60,70,80];
//let sliced = marks.slice();
//console.log(sliced);

//let first = [1,2,3];
//let second = [4,5,6]; 
//let combined = [...first,'a', ...second, 'b'];

//console.log(combined);

//let arr = [10,20,30,40,50];

//for(let value of arr){
  //console.log(value);
//}

//arr.forEach(number=> console.log(number));

// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// let message = 'this is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// let numbers = [1,-2,-1,33];

// let filtered = numbers.filter(value => value >= 0);

// let items = filtered.map(function(num){
//   let obj = {value : num};
//   return obj;
// })

// console.log(items);

// FUNCTIONS IN JAVASCRIPT

// function run(){
//   console.log('running');
// }

//  calling function to print

// run();


//function assignment 
// let stand = function walk(){
//   console.log('walking'); 
// };

// stand();

// function sum(a,b){
//   let total = 0;

//   return a+b;
// }

// let ans = sum(1,2,3,4,5,6);
// console.log

// Rest operator

// function sum(num, ...args){
//   console.log(args);
// }

// sum(1,2,3,4,5,6);

// Default Parameters 

// function interest(p,r=5,y=10){
//   return p*r*y/100;
// }

// console.log(interest(1000, 10, 5));

// let person = {
//     fName :'Ram',
//     lName : 'Chandra',
//     get fullName() {
//       return `${person.fName} ${person.lName}`;  
// },
// set fullName(value) {
//   if(typeof value !== String){
//     throw new Error("you have not sent a string");
//   }
//   let parts = value.split(' ');
//   this.fName = parts[0];
//   this.lName = parts[1]; 
// }
// };

// //console.log(person);
// try{
// person.fullName = true;
// }
// catch (e) {
//   alert(e);
// }
// console.log(person.fullName());

// function a(){
//   const a = 5;
// }
// const ab = 5;
// function b(){
//   const a = 5;
// }

//let arr = [1,2,3,4];
// let total = 0;

// for(let value of arr)
// total = total + valuecurrr;

// console.log(total);

// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Printing Total Sum :");
// console.log(totalSum);

// function eventfunction(){
//   console.log('I have clicked on window')
// };

// document.addEventListener('click', function () {
//   console.log('I have clicked on the document');
// });
// document.removeEventListener('click', function () {
// //   console.log('I have clicked on the document');
// // });

// const content = document.querySelector('#wraaper');

// content.addEventListener('click', function(event){
//   console.log(event);
// })

// adding 100para
//const t1 = performance.now();

// let fragment = document.createDocumentFragment(); 
// for(let i=1; i<=100; i++){
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is para' + i;

//   fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);


//const t2 = performance.now();
//console.log("this took" + (t2-t1) + " ms");

// optimising it

// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//   let element = document.createElement('p');
//   element.textContent = 'This is para' + i;

//   myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took" + (t4-t3) + " ms");

// function addPara(){
//   let para = document.createElement('p');
//   para.textContent = 'js is single';
//   document.body.appendChild(para);
// }

// function appendNewMessage(){
//   let para = document.createElement('p');
//   para.textContent = 'Jai siya Ram';
//   document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// function sync(){
//   console.log('first');
// }
// sync();

// console.log('second');

// let meraPromise1 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log('i am inside promise1');
//   }, 5000);
//   return 2;
//   resolve(2233);
// //  reject;
// })

// meraPromise1.then((value) => {console.log(value)});

// meraPromise1.catch((error) => {console.log("Recieved an error")});
// console.log('pehla');
   
// async function abcd() {
//  return 7;
// }

// async function utility(){
// let delhiMausam = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("delhi mein bohat garmi hai");
//   },1000);
// });

// let hyderabadMausam = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("hyd mein bhi bohat garmi hai");
//   },5000);
// });


//    let dM= delhiMausam;
//    let hM= hydMausam;

//    return(dM, hM);
// }
// let obj = {
//   heading:"head"
// }
// async function utility() {

// let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// let output = await content.json();
// console.log(output);
// }

// utility();



async function heelper(){

let options = { 
  method: 'POST',
body: JSON.stringify({
  title: 'Bruce Wayne',
  body: 'Fighter',
  userId: 1111,
  Weight: 70;
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
};

let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
let response = content.json();
}

async function utility(){
  let ans = await helper();
  console.log(ans);
} 
utility();
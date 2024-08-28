// const bton= document.getElementById('btn')

// bton.addEventListener('click', ()=>(alert('clicked')));


// -------------------------------------------------String________________
const str =
  "loremLorem ipsum dolor sit amet consectetur adipisicing elit.";

// console.log(str.slice(3,8)); //emLor

// console.log(str.replace('i', '1')); //loremLorem 1psum dolor sit amet consectetu adipisicing elit. (1st target letter will replace )

// console.log(str.trim()); //removes the unwanted spaces from ending n starting. (use trimStart()/trimEnd())

// console.log("Upper case string: "+myString.toUpperCase());  // will make the string into uppercase (.toLowerCase do the opposite)

// console.log("Substr using 2 parameters: "+str.substr(2,5)); //Substr using 2 parameters: remLo (2 is starting point, 5 is length)

// console.log('null'.match('ll')); //[ 'll', index: 2, input: 'null', groups: undefined ]

// console.log(str.split(" ",7)); //will split the target with each space, in 7 parts only (not more)

// // to make sure that string has @ and .com (STRING VERIFICATION)
// let emailPattern = new RegExp("(?=.@*)(?=.+.com)");
// //to make sure that given number has digits between 0-9 and max length of 10 digits 
// let phoneNumberPattern = new RegExp("(?= [0-9]{10})"); 
// //to make sure password has characters a to z, number 0-9 and special symbol @,#,$,%,!,^,&,*,+ or underscore
// let passworPattern = new RegExp("(?=.*[0-9])(a-zA-Z)(?=.*[@#$%!^&*+_])"); 

// let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}' 
// let obj = JSON.parse(stringJSON); 
// console.log(obj); 
// //OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 

// let dataJSON = { firstName: "Sam", lastName: "Fernandes" }; 
// let obj = JSON.stringify(dataJSON); 
// console.log(obj); 
// //OUTPUT: {"firstName":"Sam","lastName":"Fernandes"} 



// -----------------------------------------------------------------------------

const number= 123.2234
const arr= [];

// console.log(number.toFixed(0));
for (let i = 0; arr.length!= 10; i++) {
    arr.push(i+1);
}

// console.log(Math.round(Math.random()*10)+1);
// console.log(Math.sqrt(64));
// console.log(arr);
// console.log(Math.max(1,2,3)); //(try Math.min())


// ------------------------ DICE ROLL NUMBER gen----------------------
let num=0;
while (num > 6 || num < 1) {
    num = Math.floor(Math.random() * 10) + 1
    if (num<=6 && num >=1) {
        // console.log(`it's ${num}`);
    }
}

// ------------------------------Date n Time ---------------------------
// let samay= new Date(23,1,7)
// console.log(samay.toDateString());
// console.log(Date.now().toExponential());

// -----------------------Array (Slice VS Splice)-----------------------
const arr1= [0,1,2,3,4,5]
const arr2= ['A', 'B', 'C']
const arr3= [0,1,2,[0,1,2,[0,1,2,3]]] //nested array

// console.log('slice',arr1.slice(1,4)); //it works on a copy/ref. of the org array.(primitive) (slice [ 1, 2, 3 ]
// console.log('after slice',arr1); //after slice [ 0, 1, 2, 3, 4, 5 ]

// console.log('splice', arr1.splice(1,4)); //it works on the org array.(non-primitive) (splice [ 1, 2, 3, 4 ]
// console.log('after splice',arr1);//after splice [ 0, 5 ]

// arr1.splice(1, 0, 6);
// Inserts at index 1
// console.log('after adding 6 into index[1]',arr1); //[0, 6, 1, 2, 3, 4, 5]


// console.log(arr1.concat(arr2));
const newarr= [0,...arr1,'z',...arr2];
// console.log(newarr) //[0, 0, 1, 2, 3, 4, 5, 'z', 'A', 'B', 'C']

let [empName, , location] = ["Shaan", 104567, "Bangalore"];
//Here second element of array is skipped and third element is assigned to location variable
// console.log(empName); // Shaan
// console.log(location);  // Bangalore

let [empName2, ...rest] = ["Shaan", 104567, "Bangalore"];
// console.log(empName2);// Shaan
// console.log(rest);// [104567,'Bangalore']

let myArray2 = ["Android", "iOS", "Windows"];

// console.log(myArray2.join()); // Android,iOS,Windows

// console.log(myArray2.join('-'));// Android-iOS-Windows



// console.log(arr3.flat(3)); // making a nested array into a single array (primitive {taking ref. not original array})

// console.log(Array.from("Deepak")); //converting a string into array by separating each element of string

// let math= 50, history= 30, IT= 80;
// console.log(Array.of(math, history, IT)); // here we created an array using some variable (as input), may be array, obj etc.


// -------------------------------------------- OBJECT ---------------------------------------------------------

const obj1= {
    Name: 'Deepak',
    Surname: 'Das',
    Email: 'Das05@hmail.com',
    phone: 1122334455
}
const obj2= {
    Name: 'Raja',
    Surname: 'Kumar',
    Prev_Job:{
        id: 1001,
        Name: 'TCS',
        role: 'Developer'
    }
}
// console.log('before freeze', obj1.Name='Pravu', obj1); //updating Name in obj1
// Object.freeze(obj1) //here we freezed the created object so that next value update will not happen.
// console.log('after freeze', obj1.Name='Deepak', obj1);

const ConcatObj= {...obj1, ...obj2} //speard method
// console.log(ConcatObj); // concating obj using spread method (same as for array)
// console.log(Object.keys(obj2)); //printing all the keys in the selected object.
// console.log(Object.values(obj2)); //printing all the values avl in the selected object.

// ------------------------------------FUNCTION-----------------------------------------------------------

function test1(number) {
    return `example1: number is ${number}`
}
// console.log(test1(3));
// NOTE: If u are returning something inside func., then func should execute inside clg() to show the output.(test1)
// NOTE: if u are directly using clg inside func. u have to just simply execute the func().(test2)
function test2(number) {
    // console.log(`example2: number is ${number}`);
}
// test2(4)
// --------------------------
function ShoppingCartValue(...prices) { //...price: is rest operator, to pass multiple value in a single arg. will return in an array
    return prices
}
function ShoppingCartValue(a,b, ...prices) { // here first two variable will take first two args, remaining will be in prices array.
    return prices,a,b
}
// console.log(ShoppingCartValue(200,400,500,600,365));
// ------------------------
function ObjnArrayPass(array,object) {
    // console.log(`arr1[1] is: ${array[1]} & obj1.Name is: ${object.Name}`);
}ObjnArrayPass(arr1,obj1);
// -------------------------

let myArray = ["Andrew", "James", "Chris"];// Array destructuring in functions
function showDetails([arg1, arg2]) {
	console.log(arg1); // Andrew
	console.log(arg2); // James
}
// showDetails(myArray);

// --------------------------
let myObject = { name: "Mark", age: 25, country: "India" };//Object destructuring in functions
function showDetails({ name, country }) {
	console.log(name, country); // Mark India
}
// showDetails(myObject);

// ---------------------IIFE (Immediately Invoked Function Expression)---------------------------------------------------------
(function IFIE1() {
    // console.log('print me')
})();
// Here first (function), and second () for instant execution.
// semicolon ; is important while using an iife, to tell that where the execution is ending.
(()=>{
    // console.log('print IFIE 2');
})(); //iife using arrow func.
// ----------------------------------------Switch case------------------------------------

const month= 3;

switch (month) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        // console.log('mar');
        break; //once case match, brek will stop the execution from that.

    default:
        console.log('no matching values'); //this will execute if nothing above is matching
        break;
}

// ---------------------------------- array loops n more -----------------------------------------------------
// forOf
for (const iterator of arr1) {
    // console.log(iterator);
}
// for (<var initilization> of <itterable array/string>)
for (const i of 'object') {
    // console.log(i);
}

// object is not itterable using 'forOf' loop so we can use 'forIn' loop
for (const key in obj1) {
    console.log(key); //printing all keys in obj1
    console.log(obj1[key]); //fetching value for keys
}
// 'for each' loop........fetch each value of an array. (also index and whole array).
arr1.forEach((arrItem, index, arr)=>{
    // console.log(arrItem, index);
})

const ObjArray= [{name: 'Ram', score: 100}, {name: 'Laxman', score: 90}, {name: 'Sita', score: 50}]
// lets fetch the each value residing in the ObjArray using forEach.
ObjArray.forEach((i)=>{
    // console.log(`${i.name}'s score is ${i.score}`);
})
// array.filter........... will filter out in a new array, using the given condition.
const numarray= arr1.filter((num)=> num >1) 
// new variable= array.filter((temp)=> (condition to return in new variable))
console.log(numarray);

// array.reduce()......... fetch each index value of array and do certain operation on each.
const reduceVal= arr1.reduce((accumulator, curr)=> {
    return accumulator+curr 
},0) //Reduce take a initial value (here 0), and the current value from the itterated array[index] to perform operation.
// console.log(arr1);
// console.log(reduceVal);




// ----------------------------------------------BASICS 2--------------------------------------------------------------------
// Class n Objects-------------------------------
class calculator{ //creating a class object
    constructor(num1,num2){ //fetching n assigning value using constructor
        this.num1= num1
        this.num2= num2
    }
    static disply(){ //This is a static function.
        console.log('----------this is a calculator app---------');
    }
    add(){ //function for operation 
        return this.num1+this.num2
    }
    substract(){
        return this.num2-this.num1
    }
    // we can make more function to do more operation.
}
class NewCalculator extends calculator{ //Here, using EXTENDS method we can add more args to a new class with the ref. prev. class-args.
    constructor(num1, num2, num3){
        super(num1,num2) //using Super we can use the prev. class args.
        this.num3= num3
    }
    multiply(){ //adding additional operation
        return this.num3 * this.num2
    }
}
// Calling above class.
let calc= new calculator(100,200)
// calculator.disply() //accessing the static function
// console.log(calc.add());
// console.log(calc.substract());
// console.log(new NewCalculator(1,2,3).multiply()); //accessing the EXTENDS class.


// -------------------------------------------PROMISE(RESOLVE, REJECT) & FETCH(API) & more----------------------------------------------

// Promise provides an asyncronous function which gonna success (resolve) or reject (reject) in future. till then it will be in pending state.
// lets take an example of pizza delivery app. where its display if store is open or closed:

let Dominoz= new Promise((resolve, reject)=>{
    let shopOpen= true;

    setTimeout(() => {
        if (shopOpen) {
        // resolve('pizza can be delivered') // can access using .then (promise fulfilled: OUTPUT)
        } else {
        // reject('store closed') // can access using .catch (promise rejected: ERROR)
        }
    }, 2000); //response will come after 2sec.
    
})
Dominoz.then((result)=>{ //then used for print output (here 'result' will be the values comes from Dominoz)
    // console.log(result); // (if true) 'pizza can be delivered' (resolve val)
}).catch((error)=>{// catch used for print error
    // console.log(error); // (if false) 'store closed' (reject val)
}).finally(()=>console.log('Thank you'));

// ASYNC AWAIT fetch()---------------------------------------------------------------------------------------------------
// async await is like a replica of promise(()=>{}).
// Its usually used for make a work await till the the another is done. Lets take an example:
const Afunc= async function() {
    await fetch('https://api.slingacademy.com/v1/sample-data/users') 
    // below codes will wait till the await function fetch the url data
    .then((data)=> data.json()) //converting fetched data into JSON().
    .then((userdetails)=>console.log(userdetails)) //printing JSON() converted data.
}



// TERNARY OPERATOR______________________________________________________

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
    // (if) ? ismember === true do '$2.00' : (else) do '$10.00';
  }
  
//   console.log(getFee(true));
//   // Expected output: "$2.00"
  
//   console.log(getFee(false));
//   // Expected output: "$10.00"
  
//   console.log(getFee(null));
  // Expected output: "$10.00"--------------------------------------------

/*The nullish coalescing (??) --------------------------------------------
operator is a logical operator that returns its right-hand side operand 
when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. */

const foo = null ?? 'default string';
// console.log(foo);
// // Expected output: "default string"

const baz = 0 ?? 42;
// console.log(baz);
// Expected output: 0
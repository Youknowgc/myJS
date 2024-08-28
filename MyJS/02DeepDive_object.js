// Lets check why we can't change some pre-provided value by JS.
// ex: math.PI

// console.log(Math.PI); //3.141592653589793 

//  As we know Math is an object, let deep dive into it....
const Deep= Object.getOwnPropertyDescriptor(Math, 'PI')
// syntax:  object.<method to get configuration>('object name', 'property')

/* console.log(Deep);
{
  value: 3.141592653589793, // value of PI
  writable: false, // In default we cant change the value of PI as writable is false
  enumerable: false, // Itteration also False.
  configurable: false 
}*/

// Lets create an object and configure it as we want.....

const myObj= {
    name: 'DEMO',
    value: 123,
}

let update= myObj.name= 'RAM'
console.log(myObj.name,'before config.'); //Ram

// lets check its configuration...
console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); 

// Lets change its configuration...
Object.defineProperty(myObj, 'name' ,{
    writable: false,
    enumerable: false, //comment this line to see changes in iiteration
})
let update2= myObj.name= 'Luky'
console.log(myObj.name,'After config.'); //Ram (coz, writable is false... in future no one can edit the 'name' of 'myObj')
console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); 

// for itteration.
// for (const iterator of Object.entries(myObj)) { //As direct Object is not itterable, we used Object.entries('Object') here.
//     console.log(iterator); //[ 'value', 123 ] (coz enumerable: false)
// }

for (const key in myObj) {
    console.log(`${key}:${myObj[key]}`);
}
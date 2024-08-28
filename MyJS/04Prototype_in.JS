// creating and accessing prototype
// syntax: (object/ array/ string).prototype.'prototype name'= function(){}
// Prototype: is a function that can be created inside any datatypes and accessed using . as an object.

let myheros= ['Thor', 'Hulk']
let myheros2= ['superman', 'batman']

let heroPower= {
    Thor: 'Hammer',
    Hulk: 'Punch'
}

// NOTE:-------- Every thing in JS goes through object
// Array, string, function each thing is goes through a super object.
// there is nothing super than Object (that is NULL)
// It means Object is the top parent and Array, string, function are its children
// if we do something with Object the it can be fetchd by its childrens.
// Example:

Object.prototype.Baap= function () { //Here we created a function prototype in Object.
    return(`I am a parent prototype `);
}

// console.log(myheros.Baap(),'in array');  // And that prototype is fetchable by 'myheros' array.
// console.log(heroPower.Baap(),'in object');  // And that prototype is fetchable by 'heropower' object.

// Same, if we do the above with any of the children, that can't be accessed by it another type of siblings
// if we creating some prototype in array, it can be accessed in any pre-defined array, but not in a string or object
// Example:

Array.prototype.beta= function () {
    console.log (`I am array children prototype for ${this}`)
}

// myheros.beta(); // Success ('beta' prototype is present in array)
// myheros2.beta(); // success (coz 'beta' is available globally for every array)
// heroPower.beta(); // Failed (coz it is not defined in that object)

// Summary: If we creating any prototyoe in object then it can be accessable by Array, object and other childrens.
// But if we creating the same for any children, then it can't be accessable by any siblings or parent type.

// INHERITANCE in Prototype--------------------------------------------------------------------------------------------------
// inheritance means sharing someone's proprties with someone in JS....EXAMPLE:

const user={
    name: 'deepak',
    email: 'deepak@email.com'
}

const office={
    organization: 'Infosys',
    unit: 'CIS'
}

const attendance={
    IsLoggedIn: true
}

// OLD METHOD:
office.__proto__= user //Assigning {user} properties in {office}.
// console.log(`${office.name} works in ${office.organization}`); //deepak works in Infosys

// Morden syntax:
Object.setPrototypeOf(attendance, user) // Giving {user} access to {attendance}.
// console.log(`user ${attendance.name}, isLoggedIn: ${attendance.IsLoggedIn}`); //user deepak, isLoggedIn: true

// 'THIS' using prtotype-------------------------------------------------------------------

// lets create a prototype for string.
String.prototype.lengthCheck= function () {
    console.log(`${this}`);
    console.log(`length is ${this.trim().length}`);
}

let dummyStr= 'lorem123  '
// dummyStr.lengthCheck() // lorem123  length is 8

// 'harry   '.lengthCheck(); //harry   length is 5
// '   '.lengthCheck();

// 'this' depends upon who is calling it.

/*
things to be master before REACT

1. functions
2. All Array methods (map, filter, reduce, itterations n more)
3. Objects n methods (destructuring, itterations)
4. spreard n rest operator.
5. Asynchronous function (promise, Async, Await, fetch, setTimeout)
6. Import n Export ES6
-----------------------------------------------------------------------*/




// Array------------
let arr1 = [1, 2, 3, 4]
let arr2 = ['a', 'b', 'c', 'd', 'a']

// Array.map()
// console.log(arr1.map(e=> e+1)) //[2,3,4,5], map returns a new array with updated value according to the c/bfunction.

// array.sort()
// console.log(arr1.sort((a,b)=> b-a)); //[4,3,2,1], sort in descending order (for number values only) 

//array.filter()
// console.log(arr1.filter(e=> e>2))//[3,4], itterate through each (e)lements. return an array that meets the conditions for each e

// array.reduce()
// console.log(arr1.reduce((acc,curr)=> acc + curr,0)) 
//10, give a result after adding all the current value(curr) with its previous value(acc)
// 0 is the first acc here so... 0+1=1...1+2=3...3+3=6...6+4=10

//Set(array)
// console.log(new Set(arr1))//4, Set is a method of array needs 'new'...its removes duplicates values and retuns an object.

//rest method
function rest(...arr) { //here ...variable takes arbitary numbers of arguments as an array, its called rest method
    // console.log(arr.flat())//[[1,2,3,'a','d','f']]
}
rest([1, 2, 3], ['a', 'd', 'f'])

//speard method
let newarr = [...arr1, ...arr2] //Speard means concating two or more elements into one.
// console.log(newarr)//[1,   2,   3,   4,   'a', 'b', 'c', 'd', 'a'] 







//object---------------------------
let obj = { one: 1, 'prop-2': 2 }

// console.log(obj["prop-2"], obj.one)//2 1, way of accessing an Object.

// console.log('prop-2'in obj);//true, checks if given key is available in object? true: false

// console.log(Boolean(obj['yo']))//false, checks if (inside) thing is true of false

obj['ram'] = 4
console.log(obj);

// console.log((new Date).toLocaleString());









// ASYNCRONOUS FUNCTIONS (JS belives in line by line execition, to avoid that we use this kind of functions)--------

// setTimeout()----------------------
let delayOP= function () {
    console.log('after some sec..');
};
console.log('hi')
setTimeout(delayOP,5000) //this will call after the given miliseconds... JS will throw this to callback queue in background.
console.log('by')

//PROMISE ------------------------------------
// Promise provides an asyncronous function which gonna success (resolve) or reject (reject) in future. till then it will be in pending state.
// lets take an example of pizza delivery app. where its display if store is open or closed:
let Dominoz = new Promise((resolve, reject) => {
    let shopOpen = true;

    setTimeout(() => {
        if (shopOpen) {
            resolve('pizza can be delivered') // can access using .then (promise fulfilled: OUTPUT)
        } else {
            reject('store closed') // can access using .catch (promise rejected: ERROR)
        }
    }, 2000); //response will come after 2sec.
})

Dominoz.then((result) => { //then used for print output (here 'result' will be the values comes from Dominoz)
    // console.log(result); // (if true) 'pizza can be delivered' (resolve val)
}).catch((error) => {// catch used for print error
    // console.log(error); // (if false) 'store closed' (reject val)
})
// .finally(() => console.log('Thank you')); //obvious output for any result.


//Async Await--------NOTE: async and await work only with functions that return promises.
//lets take same pizza example here.
function delay() {
    return Dominoz //here dominoz already a promise function which takes 2sec to return
}

async function checkPizza() {
    console.log('processing...');
    let result= await (delay()); //await wait till this function execute.
    console.log(result);//without await it will return the function type and staus.
    console.log('thank you'); //untill await runs this will pending.
}
checkPizza()


// fetch(api)--------------- fatch returns a promise, se we can use then and catch
function api() {
    return new Promise((resolve, reject)=>{
    resolve(
        // fetch('https://jsonplaceholder.typicode.com/todos/1') //CANT ACCESS DUE TO SECURUIY REASONS
        // .then(Response=> Response.json())
        // .then(json=>console.log(json))
    )
    reject(err=>console.log('something is wrong', err))
})}

async function main() {
    console.log('fetching API...');
    console.log('result:',await api());
    console.log('byeee');
}

// class n constructor
class user{ //created a class named 'user'
    constructor(name, id, password) { //constructor takes args (same as func())
        // assigning each args into variables.
        this.name= name
        this.id= id
        this.pass= password //using this. so that each variable can use anywhere inside the class
    }

    newPassword(){ //Method
        return this.pass+'abc';
    }

    capi(){
        return this.name.toUpperCase();
    }

    static noInherit(){ //Static function
        console.log('I am a static method');
    }
}

const chai= new user('das', 123, '123') //Class constructor 'user' cannot be invoked without 'new'
// console.log(chai.newPassword()); //123abc
// console.log(chai.capi()); //DAS


// BEHIND THE SCENE------------------------------------------------------------
// behind the scene everything is working like prototype

function employee(name, id, password){
    this.name= name
    this.id= id
    this.pass= password
}

employee.prototype.cap= function(){
    return this.name.toUpperCase();
}
let emp= new employee('das', 123, '123') //Class constructor 'user' cannot be invoked without 'new'
console.log(emp.cap()) //DAS


// INHERITANCE in Class----------------------------------------------------------------------------
// we know what is is inheritance how it works in prototype
// let's see how it works in class, with an example:

class admin extends user{ //here 'extends' inheriting 'user' class properties into 'admin'
    constructor(adminID, name, password){
        super(name)
        this.adminID= adminID
        this.password= password
    }

    
}

const newAdmin= new admin('d123','deepak','123')
console.log(newAdmin.capi()); //because of inheritance we are able to use capi() method for admin. //DEEPAK
// console.log(newAdmin instanceof user);// true

// STATIC method in Class----------------------------------------------------------------------------------
// Static method is a method that only can be call using its own classname (ex: user.noInherit();)
//  EXAMPLE: 
//           we have already created a static method in 'user' class named 'noInherit'
//           let's see if is it accessible by 'admin' class or not.

// Calling a static method------------
// newAdmin.noInherit(); //FAIL
// chai.noInherit(); //FAIL
user.noInherit(); //SUCCESS (coz static method can only called by its own classname it was defined inside.)
// its dosen't support inheritance.
// Sometime we need to provide some configured data as output.
// And that can be archieved using get and set method.
// lets take an example with password.

class user{
    constructor(username, password){
        this.username= username
        this.password= password
    }

//stx:set 'variable'('any var') {this._'set variable' = 'any var'} 
    set password (value) {  
        this._password = value //('_' represents private variable)
    }
// set is a method which take the reference of target variable and hold it in a different variable (_var)

//stx: get 'variable'(){return 'output'}
    get password (){
        return `${this._password.toUpperCase()}`
    }
// In get, we can define that how someone should get the output for target variable.
// We can also make different get+set for different variable.

    set username(value){
        this._username= value
    }

    get username(){
        let newUser='';
        for (const I of this._username) {
            if (I== '@') {
                break
            }
            else{
                newUser+= I
            }
        }
        return newUser;
    }

}

let userdetails= new user('me@mail.com', 'me@123')
let realUser= new user('deepak@das.com', 'deepak@123')
console.log(`user's name is ${realUser.username}, and password is ${realUser.password}`);

// Set: fetch and assign
// get: configure the output and log
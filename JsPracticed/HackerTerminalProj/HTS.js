/*
initilizing hacking...
Reading your files...
password files detected...
sending all password and personal files to server...
cleaning up...
*/

let hacktextarr= [
    'initilizing hacking',
    'Reading your files',
    'password files detected',
    'sending all password and personal files to server',
    'cleaning up',
    'HACK successful'
]
let main= document.getElementById('main')

async function hackText(text) {
    let span= document.createElement('span');
    main.append(span)
    span.innerHTML= `</br>${text}`
    if (hacktextarr[5]===text) {
        clearInterval(dotinterval)
    }

    let dotinterval= setInterval(()=>{
        span.innerHTML+='.'
    },1000)
    setTimeout(() => {
        clearInterval(dotinterval)
    },await ms);

}

function random(){
    let num= Math.ceil(Math.random()*7000)
    console.log(num);
    return(num= num<1000?random():num);
}
let ms=  random()
function printMessages(arr) {
    arr.forEach((message, index) => {        
        setTimeout(hackText, index *ms,message);
    });

}
printMessages(hacktextarr);

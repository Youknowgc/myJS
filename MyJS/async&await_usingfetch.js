// async await using fetch and promise function.

function fech(){
    return new Promise((resolve, reject)=>{
    resolve(
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response=> Response.json())
        .then(json=>{return (json)})
    )
    reject(err=>console.log('something is wrong', err))
});
}

// fech()

async function main() {
    console.log('hello')
    let data= await fech()
    console.log('result:',data)
    console.log('bye')
    console.log(typeof(fetch('https://jsonplaceholder.typicode.com/todos/1')))
}
main()




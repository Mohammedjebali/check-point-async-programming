//task1
async function iterateWithAsyncAwait(array) {
    for (let i = 0;i < array.length;i++) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
                
            }, 1000);
        })
        console.log(array[i]);
        
    }
}
var tab=["first","second","third","forth"]
//iterateWithAsyncAwait(tab)


async function awaitcall() {
    const response=fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(json => console.log(json))
    
}
//awaitcall()

//task3

async function awaitcall() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    if (response.status!==200) {
        throw new Error("there is somthing wrong")
    }
    const data=await  response.json()
    console.log(data);

    } catch (error) {
        console.log("error to fetch data",error);
        
        
    }
}
//awaitcall()

//Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

async function function1() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
    console.log("function 1 is completed");
    
}

async function function2() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
    console.log("function 2 is completed");
    
}
async function function3() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000);
    })
    console.log("function 3 is completed");
    
}
async function chainedAsyncFunctions() {
    await function1()
    await function2()
    await function3()

}
//chainedAsyncFunctions()

//task4





//task5
//Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.
async function parallelCalls(array) {
    const response= await Promise.all(array.map(Element=>fetch(Element)))
    console.log(response);
    

    
}
const URLs=["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/comments"]
parallelCalls(URLs)
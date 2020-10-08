function greet(){
    return "hello world"
}

greet()=== "hello world"



async function greet(){
    const value = await someOtherPromise()
    return "hello world"
}

greet() === Promise<"hello world">

//await takes away the need for .then and .catch
//wait for this promise to resolve before moving on to the next line of code
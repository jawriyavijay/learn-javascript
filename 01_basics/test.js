/*
console.log("test")

let a='x';
let b=1;
let c=true;

//console.table([a,b,c])
//console.log(`Value of a variable is ${a} and ${b}`)

const mfun = function(){
    console.log(`Value of a variable is ${a} and ${b}`)
}

mfun()

const xlist = ['aaj samaj', 'amar ujala'];
const mylist = xlist;
mylist[0]='Indian express';
console.table(xlist)


function prt(a,b,...unlimited){
    console.table([a,b,...unlimited])
}

prt(1,2,4,1,4,5,6,5)
// Heap & Stack
*/

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
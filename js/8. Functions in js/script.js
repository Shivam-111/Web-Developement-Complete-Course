// Functions in javascript

// const a = 10;
// const b = 2;
// const aPlusb = a+b;
// console.log("Result: ",aPlusb);

// const x = 12;
// const y = 6;
// const xPlusy = x+y;
// console.log("Result: ",xPlusy);

// const l = 20;
// const k = 4;
// const lPlusk = l+k;
// console.log("Result: ",lPlusk);

//----------------------------------------------------------
// function simulation(a,b){
//     const result = a+b;
//     console.log("Result: ",result);
// }
// simulation(2,5)

// function greet(username){
//     console.log("Hello",username);
// }
// greet('Shivam')



//anonymous function
// let summation = function(a,b){
//     const result  = a+b;
//     return result
// }
// //function call
// console.log(summation(20,30));


//Nested Function..
function addSquare(x,y){

    const a = square(x)
    const b = square(y)
    function square(num){
        return num*num
    }
    return a+b
}
console.log(addSquare(1,2));







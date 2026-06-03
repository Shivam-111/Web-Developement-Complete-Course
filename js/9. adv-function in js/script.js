// Named function.........   (by using function keyword)
// function greet(){          
//     console.log("Hey Everyone");
// }
// greet()

//Anonymous function.........(we deleted function Name)
// let greet2 = function(){
//     console.log("Hey Everyone");
// }
// greet2()

// Arrow Function..........   (We we deleted function keyword)
// let greet3 = ()=> {
//     console.log("Hey Everyone");
// }
// greet3()


// ARROW FUNCTIONS===================
// const greet = (msg) =>{
//     console.log("Hello",msg);
// }
// greet('Shivam')

// const square = (num) => {
//     return num*num
// }
// console.log(square(2));

// const square = (num) => num*num
// console.log(square(2));




//CALL BACK FUNCTIONS=====================================================
//it is a functions which will be pass as an argument to another function.

// const calculate = (a, b, operation)=>{
//     return operation(a,b)
// }

//anonymous functions - methode 1 ---------------------
// const additionn = console.log(calculate(2,3, function(n1,n2){
//     return n1+n2
// }))
// console.log(additionn);

//named functions - methode 2 -------------------------
// function sub(a,b){
//     return a-b
// }
// const substraction = calculate(2,3,sub)
// console.log(substraction);

//arrow function - methode 3 --------------------------
// const mul = (a,b) => a*b 
// const multiplication = calculate(2,3,mul)
// console.log(multiplication);



// const arr = [2,3,4,5,6,0,-1,-2,-3]
//_______________________________________
// methodes for finding negative number
// >> methode 1
// const printFirstNegativeNumber = (num)=> num< 0
// >> methode 2
// const printFirstNegativeNumber = (num)=>{
//     return num < 0
// }
// >> methode 3
// const printFirstNegativeNumber = (num)=>{
//     if(num<0){
//         return num
//     }
// }
//(finding negative number)
// const printFirstNegativeNumber = (num)=> num< 0
// const result = arr.find(printFirstNegativeNumber)
// console.log(result);

// arr.forEach((num,index)=>{
//     console.log("Element: ",num,"index",index);
// })























// lets practice together------
// const evenorodd = (num) => {
//     if(num%2 == 0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
        
//     }
// }
// console.log(evenorodd(2));3

// function addSquare(a,b){
//     const c = square(a)
//     const d = square(b)
//     function square(num){
//         return num*num
//     }
//     return c+d
// }
// console.log(addSquare(2,3));



// function evenodd(n){
//     if(n%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }
// }
// evenodd(2)

// const evenodd = (num) =>{
//     if(num%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number");
//     }  
// }
// evenodd(2)




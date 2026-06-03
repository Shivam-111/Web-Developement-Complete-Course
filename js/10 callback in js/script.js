//  async wait >> promice chians >> callbacks hell
// callback : a function pass as an argument to another function.


// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(function(){
//     console.log("This will be executed after three second");
// }, 3000)


// function getCandies(callback1){
//     setTimeout(()=>{
//         const Candies = "🍬🍫🍭"
//         console.log("here is your candies Candies",Candies);
//         callback1(Candies)
//         // return Candies     #it shows undefined in outpu t
//     },5000)
// }

// function handOverKeys(Candies,callback2){
//     setTimeout(()=>{
//         const Keys = Candies+"🗝️";
//         console.log("In our Handover methode",Keys);
//         callback2(Keys)
//     },3000);
// }

// function onboarding(Keys,callback3){
//     setTimeout(()=>{
//         const onboarded = Keys+"🏨";
//         console.log("In our onbourding methode",onboarded);
//         callback3(onboarded)
//     },3000);
// }

// // console.log(getCandies()); #it shows undefined in output
// getCandies((Candies)=>{
//     handOverKeys(Candies,(Keys)=>{
//         onboarding(Keys,(onboarded)=>{
//             console.log("Welcome to our restaurant",onboarded);
//         })
//     })
// })


// NOTE USE (WINDOWS+.) FOR EMOJIES %%%%%%%%%%%%%%%%%%%%%%%



// =========================== APNA COLLEGE ============================
// CALLBACK : a function pass as an argument to another function.

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b)
// }
// calculator(1,2,sum)   // sum passed as an argument :sumcalback


// function name(a){
//     console.log(a);
// }
// function fulllname(a,namecallback){
//     namecallback(a)
// }
// fulllname("Shivam",name)    // name passed as an argument

// ---------------------------------------------------------
// CALLBACK HELL :  nesting of callback. PYRAMID OF DOOM.
// function getdData(dataId,getnextData){
//     setTimeout(()=> {
//         console.log("data",dataId);
//         if(getnextData){
//             getnextData();
//         }
//     },2000)
// } 
// getdData(1,() => {
//     console.log("getting data 2....");
//     getdData(2,() =>{
//         console.log("getting data 3....");
//         getdData(3,()=>{
//             console.log("getting data 4....");
//             getdData(4)
//         })
//     });
// })

//-----------------------------------------------------------
// PROMICES : for solving callback hell problems.
// it is an object in js 
// it is a solution to callback hell
// handler pending , resolve , rejected.
// let promise = new Promise((resolve,reject) =>{
//     console.log("I am A Promice");
//     resolve(123)
// })

function getData(dataId,getnextData){
    return new Promise((resolve,reject) =>{
    setTimeout(()=> {
        console.log("data",dataId);
        resolve("sucess")
        if(getnextData){
            getnextData();
        }
    },2000)
});
}





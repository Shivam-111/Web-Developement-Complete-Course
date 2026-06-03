// promices in js ==========
// promices is use to simplify the callback hell
// new keyword
// then,catch,finally methode

// const ticket = new Promise(function(resolve,reject){
//     const isBoarded = false;
//     if(isBoarded){
//         resolve("You arr eligible to onboard")
//     }
//     else{
//         reject("Your not eligible to onboard")
//     }
// })

// ticket.then((data)=>{
//     console.log("ohnoo");
// }).catch((data)=>{
//     console.log("Oh no");
// }).finally(()=>{
//     console.log("this will be executed all time");
// })


function getCandies(){
    return new Promise((resolve,reject)=>{
        resolve("sucess")
        setTimeout(()=>{                    // in pending status
            const Candies = "🍬";
            // console.log("in our get candies methode",Candies);
            resolve(Candies) 
        },3000);
    })
}
console.log(getCandies());

function handoverkeys(Candies){
    return new Promise((resolve,reject)=>{
        resolve("sucess")
        setTimeout(()=>{                    // in pending status
            const keys = Candies+"🍬";
            console.log("in our get handover methode",keys);
            resolve(keys) 
        },3000);
    })
}


function onboarding(keys){
    return new Promise((resolve,reject)=>{
        resolve("sucess")
        setTimeout(()=>{                    // in pending status
            const onboarded = keys+"🍬";
            console.log("in our get onboarding methode",onboarded);
            resolve(onboarded) 
        },3000);
    })
}

getCandies()
.then((Candies)=>{
    console.log("here is the candy",Candies);
    return handoverkeys(Candies)
})
.then((keys)=>{
    console.log("in our get onboarding methode",keys);
    return onboarding(keys)
})
.then((onboarded)=>{
    console.log("Welcome to the restaurent",onboarded);
})
console.log(getCandies());







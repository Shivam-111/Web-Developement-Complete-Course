// APNA COLLEGE=====================================================
// iNLINE HANDLING 

// jAVASCRIOT HANDLING =================================

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>
// {
//     console.log("btn1 was click");
//     let a = 15;
//     a++
//     console.log(a);
// }

// let div = document.querySelector("#div");
// div.onmouseover = () => {
//     console.log("you are inside div");
    
// }

// EVENT OBJECT ===========================================
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) =>
// {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clickX,e.clickY);
// }

// EVENT LISTENERS ==========================================

// btn1.addEventListener('click', (evtobj) =>{
//     console.log("button1 was clicked - handler1");
//     console.log(evtobj);
//     console.log(evtobj.type);
// })


// btn1.addEventListener('click', () =>{
//     console.log("button1 was clicked - handler1");
// })
// btn1.addEventListener('click', () =>{
//     console.log("button1 was clicked - handler2");
// })

// const handler3 = ()=>{
//     console.log("button1 was clicked - handler3"); 
// }
// btn1.addEventListener('click',handler3) 

// btn1.addEventListener('click', () =>{
//     console.log("button1 was clicked - handler4");
// })

// // remove element
// btn1.removeEventListener("click",handler3)


// Qs create a toggle button that changes the screen to dark mode 
// when cleked & light mode when Clicke aginn.
// let modebtn = document.querySelector("#mode");
// let currmode = "light";

// modebtn.addEventListener("click",()=>{
//     if(currmode === "light"){
//         currmode = "dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currmode = "light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode);
// })



// FOR CSS FILE =================================
let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click",()=>{
    if(currmode === "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
    }
    else{
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currmode);
})






























// TUTEDUDE=============================================================

// //Event handling in javascript

// // 1. Event Handlers:
// // (onClick, onload, onMouseover, onMouseout, onKeypress,onkeydown, onkeyup

// // function onClickFun(){
// //     console.log("The Box has been click");
// // }
// // function onMouse(){
// //     console.log("The mouse is moved");
    
// // }
// // function onMouser(){
// //     console.log("The mouse is moved");
    
// // }
// // function onkeypress(){
// //     console.log("Key Pressed");
    
// // }
// function keypressEvent(){
//     console.log("The box has been clicked");
// }
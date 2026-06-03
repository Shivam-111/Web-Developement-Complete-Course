// APNA COLLGE ===============================================
// Dom Manipulation 
// Document OBject Model..

// used for dynamic changes and Manipulation inside js

// STEP 1 SELECTING WITH ID..................
// console.dir(document.body);
// let heading = document.getElementById("heading");  //it return h1 value
// console.dir(heading);


// STEP 2 SELECTING WITH CLASS.................
// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);                      // it returns html collections

//  let button = document.getElementById("myid");
//  console.dir(button);

//  let headings = document.getElementsByClassName("myclass");
//  console.dir(headings);
//  console.log(headings);
 

// STEP 3 SELECTING WITH CLASS.................
//  let paras = document.getElementsByTagName("p");
//  console.dir(paras);


// STEP 4 Query selector tag is important
// let firstelements = document.querySelector("p");
// console.dir(firstelements);

// let allselector = document.querySelectorAll("p,#myid,#button");
// console.dir(allselector);


//========= HOMEWORK ==========================================
// PROPERTIES=========================
// 1st tagname
// let tag = document.querySelector("#myid");
// console.dir(tag);

// 2nd innertext 
// let div = document.querySelector("div"); //innertext in console
// console.dir(div);

// 3rd innerhtml
// let div = document.querySelector("div"); //innerHTML in console
// console.dir(div);

// 4th textcontent

// THEIR ARE THREE TYPES OF NODES ARE AVAILABLE IN DOM................
// 1.text node
// 2.comment node
// 3.elemnt node   //always work on this node.
// HOMEWORK AND IMPORTANT ...(MDN reference)
// 1.first child 
// 2.last child
// 3.children
//------------------------------------------------------------------------



// Questions 
// create a h2 heading element with text "Hello JAvascript" 
// Append  "From Apna College atudents" to tesxt using javacript
// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText = h2.innerText +"From apna college student";

//create 3 dives with common class name - "box".
//  Access them & add some  unic text to each of them.

// let divs = document.querySelector(".box");
// divs[0].innerText = "new uniq value 1";


//=========================================================================================
// ========================== ADVANCED LEVEL ==============================================
// APNA COLLEGE

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name= div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute('class'));

let para = document.querySelector("p");
console.log(para.setAttribute('class',"new class"));












 
 












































// TUTEDUDE===================================================================



// DOM Manipulation 
// Documrnt Object Model
// Tree like Structure

// console.log(document.body);

const bodybackground = document.body;
// bodybackground.style.backgroundColor = "green"

// 1st Approach:
// const box4 = document.getElementById('box4');
// console.log('box4');

// 2nd Approch:
// const div = document.getElementsByTagName('div')
// console.log(div);
// const h1 = document.getElementsByTagName('h1')
// console.log(h1);

// 3rd approach:
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);



// MODYFYING HTML ELEMENT
// const box1 = document.getElementById('box-1');
// box1.innerHTML="<b>Shivam Dipte</b>"     //we can also change element style
// box1.innerText = "Shivam Dipte"   //we can modify only text

// document.getElementById('box-1').innerText = "Shivam Dipte"
// document.getElementById('p').innerText="Shivam Dipte"

// const box1 = document.getElementById('box-1');
// box1.style.backgroundColor="yellow"

// const box2 = document.getElementById('box-2')
// box2.classList.add('circle')

// const box3 = document.getElementById('box-3')
// box3.classList.remove('circle')

// const boxes = document.getElementsByClassName('box');
// for(let i=0; i<boxes.length;i++){
//     boxes[i].classList.add('circle')
// }
// box3.classList.remove('box')



// Creating a new Elements

// 1st is to get the access
// 2nd is to get contents
// 3rd is appending

// const newPara = document.createElement('p');
// newPara.innerText ='This is our new paragraph '

// const cont = document.getElementById('cont');
// cont.appendChild(newPara)

// newPara.classList.add('box')
// newPara.classList.add('circle')



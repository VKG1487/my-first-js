// const button=document.querySelector('.btn')

// button.classlist.add('blue')

// function message(){
//     alert('Button clicked!')
// }
// button.addEventListener('click',message)
// button.removeEventListener('click',message)

// const button=document.querySelector('#btn')
// const button2=document.querySelector('#stop')
// button2.addEventListener('click',function(){
//button.removeEventListener('click',message)
// })


// const btn=document.querySelector("#btn")
// btn.addEventListener('keydown',function(event){
//     console.log(event.key)
// })

// btn.addEventListener('keyup',function(event){
//     console.log(event.key)
// })

// const handleSubmit=(event)=>(
//     event.preventDefault()
//     console.log("form submitted")
// )

// const form=document.querySelector("form")
// form.addEventListener("submit",handleSubmit())

// const btn=document.querySelector("button")
// const div=document.querySelector(".container")

// btn.addEventListener("click",function(){console.log("button")})
// div.addEventListener("click",function(){console.log("Div")})
// div2.addEventListener("click",function(){console.log("Div2")})

// debugger
// var a= 78
// let b= 345


// console.log(a)
// console.log(b)


// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside Function")
// }

// print()

// let total = 100;
// function calculate(){
//     console.log(total)
//     let total= 100;
// }
// calculate()

// console.log(("First Line")
// setTimeout()=>{
//     console.log("After 2 Second")
// },2000)

// console.log("Second Line")


// setTimeout((){
//     alert("After 9 sec")
// }, 9*1000)

// setTimeout(()=>
// {
//     clearInterval(timerId)
// },10*1000)

// let num = 1;

// function printNumber() {
//     console.log(num);

//     if (num < 10) {
//         num++;
//         setTimeout(printNumber, 2*1000);
//     }
// }

// printNumber();
// function print(){
//     console.log("Hello Students")
// }

// function greet(num){   //Higher Order Function
//     console.log("Welcome to my class")
//     setTimeout(()=>{
//         console.log("INSIDE SET TIMEOUT")
//         let firstname="alexa"
//         num(firstname)
//     },2000);
//     }

// greet(print)


// console. log("Starting homework ... ");

// setTimeout(( ) => {
// console.log("Homework done!");
// console.log("Starting dinner ... ");

// setTimeout ( ( ) = {
// console.log( "Dinner done!");
// consolole.log("Getting ready to go out ... ");

// setTimeout(() =>\{
// console.log( "Going to the playground!" );
// }, 1000); "after Winner"

// }, 1500); "dinner time"

// }, 2000); "homework time"



// function finishHomework(callback) {
// console.log("Starting homework ... ");
// setTimeout(() => {
// console. log("Homework done!");
// callback();
// }, 2000);
// }

// function eatDinner(callback) {
// console. log("Starting dinner ... ");
// setTimeout(() =>{
// console. log("Dinner done!");
// callback();
// }, 1500);
// }
// function goToPlayground( ) {
// console. log("Going to the playground!");
// }
// // Chained in steps, but cleaner
// finishHomework(() => {
// eatDinner(() => {
// goToPlayground( );

// });
// });

// const input=document.querySelector("#task")
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     if(input.value===""){
//         alert("Add the Task")
//         return
//     }

//     const li=document.createElement("li")
//     const deleteButton=document.createElement("button")

//     deleteButton.innerText="Delete"
//     li.innerText=input.value

//     li.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener("click",()=>{
//         lists.removeChild(li)
//     })
//     input.value=""
// })


// const p = new Promise(function (resolve, reject) {
//     "resolve()"
//     "reject()"
//     setTimeout(() => {
//         let done = true;
//         if (done) {
//             resolve({ Name: "alex", age: 34 })
//         } else {
//             reject({ message: "network issue" })
//         }
//     }, 2000)
// })

// "console.log(p)"

// p.then((data) => {
//     console.log("Resolved", data)
// }).catch((err) => {
//     console.log("Rejected", err)
// }).finally(() => {
//     console.log("Finally Block")
// })

// function doHomework() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let homeworkDone = true;
//             if (homeworkDone) {
//                 console.log("Homework is done");
//                 resolve("Homework complete");
//             } else {
//                 reject("Homework not done");
//             }
//         }, 2000);
//     });
// }

// function eatDinner() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let dinnerEaten = true;
//             if (dinnerEaten) {
//                 console.log(" Dinner is eaten");
//                 resolve("Dinner complete");
//             } else {
//                 reject(" Didn't eat dinner");
//             }
//         }, 2000);
//     });
// }

// function goToPlayground() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let permission = true;
//             if (permission) {
//                 console.log(" Went to the playground");
//                 resolve("Playground time!");
//             } else {
//                 reject(" Not allowed to go out");
//             }
//         }, 2000);
//     });

// }

// "Promise Chaining Starts"
// doHomework()
//     .then((data) => {
//         console.log(data);
//         return eatDinner();
//     })
//     .then((data) => {
//         console.log(data);
//         return goToPlayground();
//     })
//     .catch((error) => {
//         console.log("Something went wrong:", error);
//     })
//     .finally(() => {
//         console.log("Day ended - Go to sleep");
//     });


// console.log("First line")
// setTimeout(()=>{
//     console.log("Inside Timeout")
// },0)

// const p =new Promise((resolve,reject)=>{
//     resolve()
// })

// p.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside Catch")
// })

// const p2=new Promise((resolve,reject)=>{
//     resolve()
// })

// p2.then(()=>{
//     console.log("Inside Promise(P2)")
// }).catch(()=>{
//     console.log("Inside Catch(P2)")
// })
// console.log("Last Line")

// async function sendData(){
//     try{
//         const response=await fetch("https://dummyjson.com/products/add",{
//             method: "POST",
//             headers: {"Content-Type":"application/json"},
//             body: JSON.stringify({
//                 title:"Macbook",
//                 description:"Macbook Pro",
//                 price:100000,
//                 discountPercentage:5,
//                 rating:4.5,
//                 stock:5,
//                 brand:"Apple",
//             })
//         })
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("Data Not Found")
//     }
// }
// sendData()


// let obj={
//     title:"Snigdha",
//     description:"Vibhash",
// }

// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.setItem("name","Snigdha")
// localStorage.setItem("Age",17)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))

// localStorage.removeItem("age")

// localstorage.clear()



// sessionStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.setItem("name","Snigdha")
// sessionStorage.setItem("Age",17)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("obj")))


document.cookie="name=Snigdha; expires=Never; 01 Aug 2008 12:00:00 UTC"
document.cookie="age=17; expires=Never; 01 Aug 2008 12:00:00 UTC"

console.log(document.cookie)


async function sample() {
    await fetch("http://127.0.0.1:5500/index.html")
}
sample()























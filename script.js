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



function finishHomework(callback) {
console.log("Starting homework ... ");
setTimeout(() => {
console. log("Homework done!");
callback();
}, 2000);
}

function eatDinner(callback) {
console. log("Starting dinner ... ");
setTimeout(() =>{
console. log("Dinner done!");
callback();
}, 1500);
}
function goToPlayground( ) {
console. log("Going to the playground!");
}
// Chained in steps, but cleaner
finishHomework(() => {
eatDinner(() => {
goToPlayground( );

});
});















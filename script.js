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


const btn=document.querySelector("#btn")
btn.addEventListener('keydown',function(event){
    console.log(event.key)
})

// btn.addEventListener('keyup',function(event){
//     console.log(event.key)
// })
const input = document.getElementById('myInput')
const btn  = document.getElementById('myBtn')

// const addText = ()=>{
// const para = document.createElement('p') 
// para.innerText= input.value;
// document.body.appendChild(para)

// console.log(input.value)
// }

const btnClick = ()=>{
    sessionStorage.setItem("key1",input.value)
}
btn.addEventListener('click',btnClick)

alert(sessionStorage.getItem("key1"))
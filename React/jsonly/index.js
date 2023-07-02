const input = document.getElementById('myInput')
const btn  = document.getElementById('myBtn')
const deleteBtn  = document.getElementById('delete')

const it = document.getElementById('myBtn-1')


const btnClick1 = ()=>{
    alert("hli")
     }
    it.addEventListener('click',btnClick1)

// const addText = ()=>{
// const para = document.createElement('p') 
// para.innerText= input.value;
// document.body.appendChild(para)

// console.log(input.value)
// }


//////session storage

// const btnClick = ()=>{
//     sessionStorage.setItem("key1",input.value)
// }
// btn.addEventListener('click',btnClick)

// deleteBtn.addEventListener('click',()=>{
//     sessionStorage.removeItem("key1")
// })

// if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1"))
// }


const btnClick = ()=>{
    localStorage.setItem("key1",input.value)
}
btn.addEventListener('click',btnClick)

deleteBtn.addEventListener('click',()=>{
    localStorage.removeItem("key1")
})

if(localStorage.getItem("key1")){
    alert(localStorage.getItem("key1"))
}
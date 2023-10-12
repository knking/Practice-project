
const addbtn = document.querySelector(".add-btn")
let addFlag = false
let modalCont = document.querySelector(".modal-cont")
addbtn.addEventListener("click",function (e){
    addFlag =!addFlag
    if(addFlag){
        modalCont.style.display="flex"
    }else{
        modalCont.style.display="none"
    }
})
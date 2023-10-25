
const addbtn = document.querySelector(".add-btn")
const removeBtn = document.querySelector(".remove-btn")
let addFlag = false
let removeFlag = false
let modalCont = document.querySelector(".modal-cont")
let mainCont = document.querySelector(".main-cont")
let textArea = document.querySelector(".textarea-cont")
let allPriortyColor = document.querySelectorAll(".priorty-color")
let lockElem = document.querySelector(".ticket-lock")

let lock = "fa-lock";
let unlock = "fa-lock-open"

let colors = ["lightpink","lightblue","lightgreen","black"]
let defalutlColor=colors[colors.length -1]
console.log("color", defalutlColor)

//listner for all prirorty color

allPriortyColor.forEach((colorElem,idx ) => {
    colorElem.addEventListener('click',(e)=>{
        allPriortyColor.forEach((prirprtyColorElement,i)=>{
            prirprtyColorElement.classList.remove("border")
        })
        colorElem.classList.add("border")
        defalutlColor = colorElem.classList[0]
    })
});

addbtn.addEventListener("click",function (e){
    addFlag =!addFlag
    if(addFlag){
        modalCont.style.display="flex"
    }else{
        modalCont.style.display="none"
    }
})

removeBtn.addEventListener('click',(e)=>{
    removeFlag =!removeFlag
})

//generate random id 

function generateRandomCharacterId(length) {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }


modalCont.addEventListener('keydown',(e)=>{
    if(e.key==="Shift"){
        let res = generateRandomCharacterId(5)
        createTicket(defalutlColor,textArea.value,res)
        modalCont.style.display="none";
        addFlag=false;
        textArea.value= "";
    }

})


function createTicket(ticketColor, ticketTask, ticketId){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class",'ticket-cont')
    ticketCont.innerHTML= `
    <div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${ticketId}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
    `;
    mainCont.appendChild(ticketCont);
    handleRemove(ticketCont)
    handleLock(ticketCont)
    handleColor(ticketCont)
}

function handleRemove(ticket){
if(removeFlag){
    ticket.remove()
}
}

function handleLock(){
    let tikcetLockElem =  document.querySelector(".ticket-lock")
  let ticketLock = tikcetLockElem.children[0];
  let ticketTaskArea = document.querySelector(".task-area")
  ticketLock.addEventListener('click',(e)=>{
    if(ticketLock.classList.contains(lock)){
        ticketLock.classList.remove(lock)
        ticketLock.classList.add(unlock)
        ticketTaskArea.setAttribute("contenteditable","true")
    }else{
        ticketLock.classList.remove(unlock)
        ticketLock.classList.add(lock)
        ticketTaskArea.setAttribute("contenteditable","false")
    }
     
  })
}
function handleColor(ticket){
let ticketColor= ticket.querySelector(".ticket-color")
ticketColor.addEventListener('click',(e)=>{

let currentTicketColor =ticketColor.classList[1]

let currentTicketColorIdx=colors.findIndex((color)=>{
return currentTicketColor === color;
})

currentTicketColorIdx++;
console.log(currentTicketColor, currentTicketColorIdx)
let newTicketColorIdx= currentTicketColorIdx % colors.length;
let newTicketColor = colors[newTicketColorIdx]
ticketColor.classList.remove(currentTicketColor)
ticketColor.classList.add(newTicketColor)
})
}

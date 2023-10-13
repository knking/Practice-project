
const addbtn = document.querySelector(".add-btn")
let addFlag = false
let modalCont = document.querySelector(".modal-cont")
let mainCont = document.querySelector(".main-cont")

addbtn.addEventListener("click",function (e){
    addFlag =!addFlag
    if(addFlag){
        modalCont.style.display="flex"
    }else{
        modalCont.style.display="none"
    }
})

modalCont.addEventListener('keydown', (e) =>{
    
    if(e.key ==="shift"){
        console.log("hi")
        createTicket();
    }
})

function createTicket(){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class",'ticket-cont')
    ticketCont.innerHTML= `
    <div class="ticket-color"></div>
    <div class="ticket-id">Smaple_id</div>
    <div class="task-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, excepturi. Nihil ipsa tempora, quis atque dignissimos repellendus adipisci magni sint. In minus mollitia nulla sequi voluptate magnam sit. Delectus, nam.
     </div>
    `;
    mainCont.appendChild(ticketCont);
}

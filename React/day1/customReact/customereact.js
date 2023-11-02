

function customRender(reactEleemnt,container){
const domElement= document.createElement(reactEleemnt.type)
domElement.innerHTML=reactEleemnt.children

for (const prop in reactEleemnt.props) {
if(prop==='children') continue
domElement.setAttribute(prop,reactEleemnt.props[prop])
}

// domElement.setAttribute('href',reactEleemnt.props.href)
// domElement.setAttribute('target',reactEleemnt.props.traget)
container.appendChild(domElement)
}

const reactEleemnt={
    type:"a",
    props:{
          href:"https://google.com",
          traget:"_blank",
    },
    children:"Click on me to visit google"
}

let root=document.getElementById("root")
customRender(reactEleemnt,root)
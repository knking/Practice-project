
import Card from "./Card";

const App = ()=>{

    const list = ["hitesh","anurag","krishna"]
    
    return(
        <div>
        Hello from App component 
        <Card myname ="Hitesh" list={list}/>
    </div>
    )
   
}

export default App;
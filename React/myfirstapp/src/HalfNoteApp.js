import { useState } from "react"

const Todo = () => {

    const [itemList, setitemList] = useState([])

    const [item, setItem] = useState("");

    const addItems = () => {
        setitemList([...itemList, item])
        setItem("")
    };
    return (
        <>
            <h2>Todo List</h2>
            <input type="text" value={item} placeholder="Enter your list here" onChange={(e) => setItem(e.target.value)}></input>
            <button onClick={addItems}>Add Items</button>
            <p>You Items are below</p>
            <ul>
                {
                    
                        itemList.map((itm) => (
                            <li key={itm}>{itm}</li>
                        ))
                    
                
                }
            </ul>

        </>
    )
};

export default Todo;
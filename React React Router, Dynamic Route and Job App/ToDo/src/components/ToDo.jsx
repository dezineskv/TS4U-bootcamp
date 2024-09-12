import React, { useState } from 'react'

const ToDo = () => {
const [task, setTask] = useState("");

const [list, setList] = useState([]);

// handles input
const handleChange = (event) => {
    setTask(event.target.value)
}
// handles click
const handleAdd = () => {
    setList([...list, task])
    setTask("")
}
// declare delete function and pass id equal to the index. use splice method to remove it (index, #of items).
const handleDelete = (id) => {
    console.log(id);
    const updatedList = [...list];
    updatedList.splice(id, 1);
    setList(updatedList);
}
  return (
    <div>
        <h1>To Do App</h1>
        <div>
            <input type="text" value={task} onChange={handleChange} />
            <button  style={{marginLeft: '20px'}} onClick={handleAdd}>Add Task</button>
        </div>
        <div>
            { 
                list.map((item, i) => <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} key={i}>
                <p>{item}</p>
                {/* to pass index in function use arrow function */}
                <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
            )}
        </div>
    </div>
  )
}

export default ToDo;
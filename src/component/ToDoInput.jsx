import React from 'react';
import './ToDoInput.css';

function ToDoInput(props)
{
  function add()
    {
      console.warn(props.task);
      console.warn(props.description);
      console.warn(props.date);

      let listEntry={
        task:props.task,
        description:props.description,
        date:props.date
      }
      let newListEntry=[...props.list,listEntry];
      props.setList(newListEntry);
    }
  return(
    <div id="input">
      <h1>To Do List</h1>
      <input type="text" placeholder="Enter Your Task" value={props.task} onChange={(e)=>props.setTask(e.target.value)}/> <br/> <br/>
      <input type="text" placeholder="Enter Description" value={props.description} onChange={(e)=>props.setDescription(e.target.value)}/> <br/> <br/>
      <input type="date" placeholder="Enter Completion Date" value={props.date} onChange={(e)=>props.setDate(e.target.value)}/> <br/> <br/>
      <button onClick={add}>Add Task</button>
    </div>
  )
}

export default ToDoInput;
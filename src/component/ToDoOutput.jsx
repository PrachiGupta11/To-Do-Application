import React, { useRef, useState } from 'react';
import ToDoItem from './ToDoItem';
import './ToDoOutput.css';

function ToDoOutput(props) {
  

  function deleteBtn(index) {
    console.warn("delete button called", index);
    console.log(props.list)
    let data=[...props.list];
    let item1=data.filter((val,ind)=>{return ind!=index})
   props.setList(item1)
    // let item1 = props.list.slice(0, index);
    // let item2 = props.list.slice(index + 1);
    
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Task</td>
            <td>Description</td>
            <td>Completion Date</td>
          </tr>
        </thead>
        <tbody>
          {
            props.list.map((item, index) =>
              <ToDoItem item={item} key={index} index={index} deleteBtn={deleteBtn}/>     
            )
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default ToDoOutput;
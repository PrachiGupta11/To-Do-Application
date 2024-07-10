import React, { useEffect, useState } from 'react';
import './ToDoOutput.css';
function ToDoItem(props) {
  const [checked, setChecked] = useState(false);
  const [dueMessage, setDueMessage] = useState("");
  const [borderColor, setBorderColor] = useState(false);
  
  function list() {
    setChecked(!checked);
  }
  useEffect(() => {
    const currentDate = new Date();
    const itemDate = new Date(props.item.date);
    console.log(props.item.date);
    if (itemDate < currentDate) {
      console.log("date passed");
      setBorderColor(!borderColor);
      setDueMessage("Due Date is passed");
    }
    else {
      console.log("not passed");
      setDueMessage(props.item.date);
    }
  }, [])


  
  return (

    <tr>
      <td className={checked ? "checkedData" : ''}>{props.item.task}</td>
      <td className={checked ? "checkedData" : ''}>{props.item.description}</td>
      <td className={checked ? "checkedData" : 'colorDate'} style={borderColor ? { border: "1px solid yellow" } : { border: "1px solid red" }} onChange={() => dueDate(props.index)}>{props.item.date}</td>
      <td><input type="checkbox" className='checkbox' value={checked} onChange={() => list(props.index)} /></td>
      <td><button onClick={() => props.deleteBtn(props.index)}>Delete</button></td>
      {/* <td><button onClick={()=>{props.deleteButton(props.index)}}>Delete</button></td> */}
      <td>{dueMessage}</td>
    </tr>

  )
}

export default ToDoItem;
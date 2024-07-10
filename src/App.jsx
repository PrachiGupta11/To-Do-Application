import './App.css'
import ToDoInput from './component/ToDoInput'
import ToDoOutput from './component/ToDoOutput'
import { useState } from 'react';

export default function App() {
  const [task,setTask]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
  const [list,setList]=useState([]);
  
  return (
    <div>
       <ToDoInput task={task} setTask={setTask} description={description} setDescription={setDescription} date={date} setDate={setDate} list={list} setList={setList}/>
      <hr/>
       <ToDoOutput task={task} setTask={setTask} description={description} setDescription={setDescription} date={date} setDate={setDate} list={list} setList={setList}/>
    </div>
  )
}

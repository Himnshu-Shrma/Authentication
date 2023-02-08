import React, { useRef,useState } from 'react'

export default function Inbox(props) {

const [newTask,setNewTask]=useState(false)
const titleRef=useRef()
const calenderRef=useRef()
const newTaskHandler=()=>{
    setNewTask(true)
}
const addHandlers=(e)=>{
    e.preventDefault()
    if(titleRef.current.value===""){
        window.alert("Please Enter Something ")
        return;
    }
    const newObj={
        number:props.list.length+1,
        title:titleRef.current.value,
        date:new Date(calenderRef.current.value)

    }
    props.append(newObj)
    setNewTask(false)
}
const cancleHandlers=()=>{
    setNewTask(false)
}
  return (
    <>
    <div>
        <h3>
            Inbox
        </h3>
        {!newTask && (
            <>
            <p>Click here to Add New Task</p>
            <button className='buttons' onClick={newTaskHandler}> New Task</button>
            </>
        )}
        {newTask && (
            <form className='new-task-box'>
                <input className="input" type='text' ref={titleRef}/>
                <div className='btn-box'>
                    <button className='buttons' onClick={addHandlers}>Add Task</button>
                    <button className='buttons' onClick={cancleHandlers}>Remove Task</button>
                    <input className='calender' type='date' ref={calenderRef} defaultValue={new Date}/>
                </div>
            </form>
        )}
    </div>
    <div>
        {props.list.map((list)=>{
            return(
                <div className='box' key={list.number}>
                    {list.number}.   <span>{list.title}</span> <sub> <i>Dated:</i> ({list.date.toLocaleDateString()})</sub> 
                    
                </div>
            )

        })}
    </div>
    </>
  )
}

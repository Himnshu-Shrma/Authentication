import React, { useState } from 'react'
import Today from './Today'
import Inbox from './Inbox'
import NextSevenDays from './NextSevenDays'
const list=[
    
]

export default function MainSection(props) {
    const [filteredList,setFilteredList]=useState(list)
    const addTodoList=(obj)=>{
        list.push(obj)
        setFilteredList(list)
    }
  return (
    <div >
        {props.active==="Inbox"&&(
            <Inbox list={filteredList} append={addTodoList}/>
        )}
        {props.active==="Today" && <Today list={filteredList}/>}
        {props.active==="Next7Days" && <NextSevenDays list={filteredList}/>}
        
    </div>
  )
}

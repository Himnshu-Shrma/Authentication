import React from 'react'

export default function ListRender(props) {
  return (
    <>
        {props.list.map((list)=>{
            return (
              <div className='box' key={list.number}>
                 {list.title} ({list.date.toLocaleDateString()})
            </div>
)
        })}
        </>
    
  )
}

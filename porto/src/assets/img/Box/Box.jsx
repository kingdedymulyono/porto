import React from 'react'
import "./Box.css"
// import "./Boxanim.css"
const Box = ({children,id}) => { 

  return (
    <div id={id} className='box mx-auto w-100 '>
      {children}
    </div>
  )
}

export default Box    
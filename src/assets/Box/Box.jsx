import React from 'react'
import "./Box.css"
import Image from '../Image/Image'
const Box = (prop) => {
  return (
    <div className={prop.classlist}>
      <Image src={prop.src}/>
    </div>
  )
}

export default Box
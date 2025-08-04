import React from 'react'

const Image = (prop) => {
  return (
    <img src={prop.src} className={prop.classlist} alt="" />
  )
}

export default Image
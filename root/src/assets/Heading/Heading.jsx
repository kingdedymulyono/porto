import React from 'react'
import Form from '../Form/Form'
const Heading = ({nama}) => {
    const handleLogin = (username) => {
        console.log(username)
    }
  return (
    <div>Halo {nama}</div>
  )
}

export default Heading
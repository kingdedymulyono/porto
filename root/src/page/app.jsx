import React from 'react'
import Navbar from '../assets/Navbar/Navbar'
import Heading from '../assets/Heading/Heading'
import Data from '../assets/d/data'
const app = () => {
  return (
    <>
        <Navbar href={"../../index.html"} title={"Home"}/>
        <br />
        <br />
        <Heading nama="Dedy"/>
        <Data nama="Dedy"/>
    </>
  )
}

export default app
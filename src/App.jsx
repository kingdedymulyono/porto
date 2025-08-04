import React from 'react'
import Navbar from './assets/Navbar/Navbar'
import Content from './assets/Content/Content'
// import Fontawesome from './assets/Fontawesome/Fontawesome'
const App = () => {
  return (
  <>
    <Navbar href="../../../src/page/about.html" title="About"/>
    <div className='w-100 py-5'>
      <Content />

    </div>
  </>
  )
}


export default App 
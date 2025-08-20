import React from 'react'

const Flex = ({children,id}) => {
  return (
    <div className='my-2 d-flex flex-column h-100 justify-content-center gap-2' id={id}>{children}</div>
  )
}

export default Flex
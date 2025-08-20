import React from 'react'

const Flexrow = ({children,id}) => {
    return (
        <div className='my-2 d-flex flex-row h-100 flexRow justify-content-center gap-2' id={id}>{children}</div>

    )
}

export default Flexrow
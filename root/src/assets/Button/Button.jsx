import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faUser } from '@fortawesome/free-solid-svg-icons'
const Button = (prop) => {
    return (
        <button className={prop.classlist} id={prop.id} type={prop.tipe} onClick={prop.btnFunc}>
            <FontAwesomeIcon icon={prop.icon} className='mx-1' />
            <span>
                {prop.text}
            </span>
        </button>
    )
}

export default Button
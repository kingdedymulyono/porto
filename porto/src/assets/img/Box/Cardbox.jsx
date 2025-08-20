import React from 'react'
import Flex from '../../Flex/Flexcol'
import Flexrow from '../../Flex/Flexrow'
const Cardbox = (prop) => {
    return (
        <div data-aos={prop.anim} data-aos-delay={prop.delay} className="border border-black p-2 rounded-4 w-50 shadow-sm smallCard">
            <h6>{prop.title}</h6>
            <p className='m-0 fw-light'>{prop.text}</p>
        </div>
    )
}

export default Cardbox
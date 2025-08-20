import React from 'react'
const Fullcardbox = (prop) => {
    return (
        <div data-aos={prop.anim} data-aos-delay={prop.delay} className="border border-black p-2 rounded-4 w-100 shadow-sm">
            <h5>{prop.title}</h5>
            <p className='m-0 fw-light'>{prop.text}</p>
        </div>
    )
}

export default Fullcardbox
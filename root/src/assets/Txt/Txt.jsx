import React from 'react'

const Txt = (prop) => {
  return (
    <div className={prop.classlist}>
        <span className=''>{prop.teks}</span><br />
        {/* <span id='addHTML' className=' text-secondary fs-6 fw-light'>
            {prop.addHTML}
        </span> */}
    </div>
  )
}

export default Txt
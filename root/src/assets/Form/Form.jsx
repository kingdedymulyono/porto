// import React from 'react'
import React, { useState } from 'react'; 
import "./form.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
const Form = () => {

    const handleBtn = () =>{
        location.href='https://instagram.com/dedyas'
    }
    const [nama, setNama] = useState('');
    const handleChange = (event) => {
        setNama(event.target.value)
    }
    return (
        <>
            <div className='formBox w-75 mx-auto my-5 rounded-4 p-3 shadow-lg'>
                <form action="">
                    <h2>Hallo!</h2>
                    <h5 className='text-secondary fw-light'>Login sebelum masuk</h5>
                    <div className="">
                        <input type="text" className='border border-primary border-1 form-control rounded-3 my-2' placeholder='Masukkan Nama ' id='nama' 
                        value={nama}
                        onChange={handleChange}/>
                    </div>
                    <Button text="Masuk" class="btn btn-primary" type="button" id="btn1" btnFunc={handleBtn} icon={faAngleDoubleRight}/>
                </form>
                <p className='mt-1'>User Adalah {nama}</p>
            </div>
        </>
    )
}

export default Form
import React from 'react'
import { useState } from 'react'
import Button from '../Button/Button';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
const Counter = () => {
    const [num, updateNum] = useState(0);
    const addNum = () =>{
        updateNum(num + 1)
    }
    const decNum = () =>{
        updateNum(num - 1)
    }
    return (
        <>
            <div>Poin sekarang : {num}</div>
            <div className="mt-2"></div>
            <Button text="Tambah" class="btn btn-light me-2" type="button" id="btnTambah" btnFunc={addNum} icon={faPlus}/>
            <Button text="Kurang" class="btn btn-outline-light me-2" type="button" id="btnKurang" btnFunc={decNum} icon={faMinus}/>
        </>
    )
}

export default Counter
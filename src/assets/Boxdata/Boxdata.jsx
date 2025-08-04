import React from 'react'
import { useState } from 'react'
import Showdata from '../Showdata/Showdata'
const Boxdata = () => {
    var [cari,updCari] = useState('');
    var [filter,updFilter] = useState('')
    const handleChange = () => {
        updCari(cari=event.target.value)
    }
    const handleOption= () => {
        updFilter(filter=event.target.value)
    }
    return (
        <>
            <div className="d-flex gap-2 my-2">
                <select name="filter" id="filter" className="form-select w-25" onChange={handleOption}>
                    <option value="filter" selected hidden>Filter</option>
                    <option value="Kelas">Kelas</option>
                    <option value="Jurusan">Jurusan</option>
                    <option value="Ekskul">Ekskul</option>
                </select>
                <input type="text" className="form-control w-25" onChange={handleChange}/>
                {/* <p>apacoba {filter}</p> */}
            </div>
            <Showdata select={cari} opsi={filter} />
        </>
    )
}

export default Boxdata
import React, {useState} from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({href,title}) => {
    return (
        <>
            <nav>
                <div>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div>INI APLIKASI PERTAMAKU</div>
                <div>
                    <a href={href} className='text-white text-decoration-none'>{title}</a>
                </div>
            </nav>
        </>
    )
}
export default Navbar
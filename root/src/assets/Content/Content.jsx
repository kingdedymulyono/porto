import React from 'react'
import "./Content.css"
import ppdedyas from "./ppdedyas.jpg"
// import html from "../html.png"
// import css from "../css.png"
// import js from "../js.png"
// import php from "../php.png"
// import xampp from "../xampp.png"
// import Box from '../box/box'
import Txt from '../Txt/Txt'
import Image from '../Image/Image'
import Button from '../Button/Button'
import Box0 from '../Box0/Box0'
// import Showdata from '../Showdata/Showdata'
import Boxdata from '../Boxdata/Boxdata'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faMailForward, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
var teks = []
teks[0] = `Saya adalah seorang junior developer yang mempelajari bidang frontEnd Developer dan ingin menguasai Android development di masa depan.Tagline saya adalah "Ingin Menjadi Frontend Handal (namun) Enggan Desain" ~IMFHED~ `
console.log(teks)
const Content = () => {
    return (
        <>
            <div className="my-5 mx-auto bg-primary bg-gradient w-75 rounded-5 shadow-lg box">
                <div className="p-4 text-white">
                    <p>
                        <span className='fs-6 fw-lighter text-light'>Created by</span><br />
                        Dedy Anang Setiawan
                    </p>
                    <figure className='w-25 mx-auto'>
                        <Image src={ppdedyas} classlist="rounded-circle" />
                    </figure>
                    <Txt classlist="w-100 itemBox p-2 rounded-3 mb-2" teks={teks[0]} />
                    <div className="d-grid">
                        <div className="my-4 pb-1">
                            <h2>
                                About Me
                            </h2>
                            <div className="container w-100 d-grid ">
                                <Box0 />
                            </div>
                            <div id="data" className="my-2 rounded-3 itemBox p-4 shadow-lg">
                                <Boxdata />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex ">

                        <Button text="IG" classlist="my-2 d-flex justify-content-center align-items-center gap-2 shadow-lg btn btn-light w-25 me-1" icon={faInstagram} />
                        <Button text="Email" classlist="my-2 d-flex justify-content-center align-items-center gap-2 shadow-lg btn btn-light w-25 me-1" icon={faMailForward} />
                        <Button text="FB" classlist="my-2 d-flex justify-content-center align-items-center gap-2 shadow-lg btn btn-light w-25 me-1" icon={faFacebook} />
                    </div>
                    <textarea name="ap" id="cb" className=' form-control'></textarea><br />
                    <Button text="Submit" classlist="my-2 d-flex animBtn d-flex align-items-center shadow-lg btn btn-info w-25 me-1" icon={faAngleDoubleRight} />

                </div>
            </div>
        </>
    )
}

export default Content
import React from 'react'
import Box from './Box'
import Flex from '../../Flex/Flexcol'
import Flexrow from '../../Flex/Flexrow'
import dedyasImg from '../../../../public/dedyas.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Box1 = () => {
    return (
        <>
            <Box id="box1">
                <Flexrow id="topDiv">
                    <div className="w-50 halfDiv m-4">
                        <Flex>
                            <h4 className='m-0 text-white fw-light'>FrontEnd Dev</h4>
                            <h1 className='m-0 text-white fw-bold'>HELLO , IM  </h1>
                            <h1 className='m-0 text-white fw-bold'>DEDYAS</h1>
                            <button id='btn1'
                                className='p-2 px-3 mt-2 my-auto rounded-pill border-2 border-light w-75'>
                                <span className='mx-2'>
                                    Visit me on GIthub
                                </span>
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </Flex>
                    </div>

                    <div className="w-50 halfDiv my-4">
                        <div className="d-flex justify-content-center">
                            <img className='boxImg bg-light-subtle rounded-circle w-50' src={dedyasImg} alt="" />
                        </div>
                    </div>
                </Flexrow>
                <div className="w-100 fadeBox mt-4">
                </div>
            </Box>
            <h2 className='text-center'>Swipe Up ⬆️</h2>
            <i>
                <h4 data-aos='fade-up' className='text-center w-75 mx-auto my-5 py-3 fw-light'>"Always be a <strong className='fw-bold'>better</strong> version of yourself than <strong className='fw-bold'>yesterday</strong>"</h4>
            </i>
        </>
    )
}

export default Box1
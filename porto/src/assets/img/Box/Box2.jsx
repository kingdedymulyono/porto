import React from 'react'
import Flex from '../../Flex/Flexcol'
import Box from './Box'
import Cardbox from './Cardbox'
import Fullcardbox from './Fullcardbox'
import Flexrow from '../../Flex/Flexrow'
const Box2 = () => {
    let teks = [];
    teks.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptatibus nesciunt in modi doloribus amet repellat excepturi veniam! Excepturi mollitia nobis hic aut! Minima quia sint?")
    teks.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, quia! Similique necessitatibus amet excepturi quasi, in alias eaque, dolores doloribus rerum perferendis sint accusamus!")
    teks.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quisquam sint itaque voluptas, minus hic praesentium magnam doloribus pariatur nulla, quia beatae quibusdam aspernatur.")
    teks.push("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus doloribus eligendi sed tenetur! Voluptatibus velit sequi praesentium non, excepturi asperiores corporis tempore nesciunt pariatur fugiat repudiandae, minus dignissimos id.!")
    return (
        <div>
            <Flex>
                <Box>
                    <div data-aos="fade-zoom-in" data-aos-delay="100" className="p-3 border w-50 mx-auto rounded-4 border-black text-center mt-3 shadow">
                        <h6 className=' fw-semibold m-0'>About me
                        </h6>
                    </div>
                    <div className="w-75 mx-auto my-4">
                        <Fullcardbox anim="fade-up" delay="0" title="Myself...." text={teks[0]} />
                        <Flexrow id='noFlex1'>
                            <Cardbox anim="fade-up" delay="100" title="School" text={teks[1]} />
                            <Cardbox anim="fade-up" delay="200" title="Hobby" text={teks[2]} />
                        </Flexrow>
                        <Fullcardbox anim="fade-up" delay="300" title="Skills" text={teks[3]} />
                    </div>

                </Box>
            </Flex>
        </div>
    )
}

export default Box2
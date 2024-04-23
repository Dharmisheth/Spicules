import React from "react";
import Link from 'next/link'
const Services3 = () => {
    return (
        <div>
            {/* <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                style={{
                    height: '13vh',
                    textAlign: 'center',
                    textJustify: 'auto',
                }}>
                <h1 className="text-[30px] font-bold tracking-tight text-white mb-2 text-center">
                    Hardware Design and Production</h1>
            </div>
            <div className="flex justify-end">
                <Link href="/dashbord/Marketing/Services/ContactUs">
                    <button className="relative inline-flex items-center mt-5 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact Us
                        </span>
                    </button>
                </Link>
            </div> */}
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-5 mt-4">We strive to design the most compatible, reliable, secure and functional hardware – in tune with tech and sustainability requirements - for your dream product.</h5>
            </div>
            <div className="text-[20px] ml-5 mr-5" style={{ textAlign: 'justify' }}>
                <p className=' mb-2'>An integral aspect of product development, hardware design refers to the process of creating and developing electronic components and systems that make up physical devices. This involves designing and specifying the functionality, architecture and physical characteristics of a variety of physical components, like printed circuits boards (PCBs), integrated circuits (ICs), processors, sensors, memory modules and other electronic elements.</p>
                <p className=' mb-2' >At Spicules, we have the expertise and proven design methodologies, which help us offer full scale – from specifications to complete product engineering solutions, including hardware design and production services – to clients from a variety of industry verticals. Throughout the hardware design process, we keep in view integral considerations – like durability, power consumption, thermal management, electromagnetic compatibility (EMC), signal integrity, and manufacturability into account – so that the final product meets the intended requirements and expected industry and client standards. From small form-factor designs to highly complex PCB designs, we are there with you to provide scalable and reliable Hardware design and development solutions.</p>
                <p className=' mb-2'>We have in-house resources and efficient partnerships to channel relevant resources to hardware design and production requirements of our clients. These include hardware engineers, PCB designers, firmware developers, semi-conductor suppliers, and other tech specialists to bring the design from concept to a tangible, functional device. We ensure devoted iterative design cycles and continuous improvement in hardware design to refine the design, ensure their durability and sustainability – and redressal of issues discovered, during testing and validation. We also offer supportive design capabilities, prototyping, production and certification services.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className=" mt-5 mb-5">
                <video controls style={{ width: '70%' }}>
                    <source src="/micons/vid-3.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

    )
}
export default Services3;

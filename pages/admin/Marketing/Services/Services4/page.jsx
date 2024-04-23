import React from "react";
import Image from "next/image";
import Link from 'next/link'

import BG from "/public/Mimages/img-1.webp"
const Services4 = () => {

    return (
        <div>
            {/* <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                style={{
                    height: '13vh',
                    textAlign: 'center',
                    textJustify: 'auto',
                }}>
                <h1 className="text-[30px] font-bold tracking-tight text-white mb-2 text-center">
                    Embedded Software Development</h1>
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
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-5 mt-4">Embedded Software Development Services for Connected Products</h5>
            </div>
            <div className="text-[20px] ml-5 mr-5" style={{ textAlign: 'justify' }}>
                <p className=' mb-2'>Spicules Technologies offers end-to-end embedded software services encompassing consulting, architecture, design, development, product validation, and sustenance. Our expert engineers, with domain knowledge spanning telecom, automotive, healthcare, consumer, aerospace, and defense, accelerate the development of next-generation products. We specialize in silicon validation, firmware development, device drivers, OS porting, board support packages, power management, application development, and more.</p>
            </div >
            <div style={{ display: 'flex', justifyContent: 'center' }} className=" mt-5 mb-5">
                <Image class="rounded-t-lg" style={{ width: '70%' }} src={BG} alt="" />
            </div>
        </div>
    )
}
export default Services4;
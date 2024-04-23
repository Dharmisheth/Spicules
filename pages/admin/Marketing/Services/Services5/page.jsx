import React from "react";
import Image from "next/image";
import Link from 'next/link'

import BG from "/public/Mimages/img-2.webp"
const Services5 = () => {

    return (
        <div>
            {/* <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                style={{
                    height: '13vh',
                    textAlign: 'center',
                    textJustify: 'auto',
                }}>
                <h1 className="text-[30px] font-bold tracking-tight text-white mb-2 text-center">
                    Digital Engineering</h1>
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
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-5 mt-4">Unlock Business Potential with Seamless Digital Transformation</h5>
            </div>
            <div className="text-[20px] ml-5 mr-5" style={{ textAlign: 'justify' }}>
                <p className=' mb-2'>Embark on a transformative journey with our dedicated team, specializing in delivering digital solutions for both small and large-scale enterprises. Our mission is to empower businesses through strategic digital transformation plans, paving the way for sustainable growth and enhanced operational efficiency.</p>
            </div >
            <div style={{ display: 'flex', justifyContent: 'center' }} className=" mt-5 mb-5">
                <Image class="rounded-t-lg" style={{ width: '70%' }} src={BG} alt="" />
            </div>
        </div>
    )
}
export default Services5;
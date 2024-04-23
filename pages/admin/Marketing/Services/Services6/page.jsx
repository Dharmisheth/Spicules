import React from "react";
import Image from "next/image";
import Link from 'next/link'

import BG from "/public/Mimages/img-3.webp"
const Services6 = () => {

    return (
        <div>
            {/* <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                style={{
                    height: '13vh',
                    textAlign: 'center',
                    textJustify: 'auto',
                }}>
                <h1 className="text-[30px] font-bold tracking-tight text-white mb-2 text-center">
                    Quality Engineering</h1>
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
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-5 mt-4">Unlocking Quality-Centric Solutions</h5>
            </div>
            <div className="text-[20px] ml-5 mr-5" style={{ textAlign: 'justify' }}>
                <p className=' mb-2'>In the rapidly evolving digital landscape, delivering top-notch products and services is essential for a superior consumer experience. At Spicules Technologies, we embrace a quality-centric approach to meet the demands of connected products and solutions. Our Definition-to-Delivery methodology ensures higher quality and satisfaction, offering effective quality assurance with faster time to market through QA automation. Committed to adhering for ISO standards and industry certifications, our comprehensive Quality Engineering Services cover IoT product testing, QA automation, design validation and compliance testing across diverse domains such as embedded software, hardware, web applications, cloud solutions and mobile applications.</p>
                <p className=' mb-2'>Ensuring top-notch Quality Assurance is paramount in delivering products to our customers. Recognizing the significance of this, we adhere to a robust methodology dedicated to delivering products of the highest quality. As the product matures, so does its quality, resulting in a distinctive flavor that stems from rigorous testing methods employed to meet and surpass expected standards.</p>
            </div >
            <div style={{ display: 'flex', justifyContent: 'center' }} className=" mt-5 mb-5">
                <Image class="rounded-t-lg" style={{ width: '70%' }} src={BG} alt="" />
            </div>
        </div>
    )
}
export default Services6;
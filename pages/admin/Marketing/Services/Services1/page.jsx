import React from 'react'
import Link from 'next/link'

const Services1 = () => {
    return (

            // <div class="flex justify-end">
            //     {/* <Link href="/dashbord/Marketing/Services/ContactUs">
            //         <button className="relative inline-flex items-center mt-5 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            //             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            //                 Contact Us
            //             </span>
            //         </button>
            //     </Link> */}
            // </div>
            <div>
            {/* <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                style={{
                    height: '13vh',
                    textAlign: 'center',
                    textJustify: 'auto',
                }}>
                <h1 className="text-[30px] font-bold tracking-tight text-white mb-2 text-center">
                    Embedded Product Development</h1>
            </div> */}

            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-5 mt-4">Cost Effective, High-Tech Embedded Systems – in tune with your vision.</h5>
            </div>
            <div className="text-[20px] ml-5 mr-5" style={{ textAlign: 'justify' }}>
                <p className=' mb-2'>We design, develop and deploy complex yet cost-effective embedded systems, in tune with your vision, for a variety of sectors, including healthcare, consumer electronics, industrial automation, security & surveillance, retail, banking and more.</p>
                <p className=' mb-2' >Let’s transform your ideas into marketable and sustainable smart products through our end-to-end embedded product development process. This includes designing and creating electronic devices/ systems built around a microcontroller/ microprocessor – which is then integrated into a larger physical device/ system. Our embedded product solutions are developed after thorough research and understanding of client requirements, existing solutions and the target audience/markets. This ensures that the products are reliable, efficient and cost effective.</p>
                <p className=' mb-2'>Throughout the process of embedded product development, our teams are committed to take into account crucial aspects like memory constraints, real-time performance, overall reliability, power consumption etc. These products often tend to be employed in critical industries and sectors like industrial automation, aviation, consumer electronics, automotive systems, medical devices and more – which makes the aforementioned aspects very important. We are equipped to handle every stage of embedded product development, including hardware design, firmware development, embedded software development, system integration and requisite support – using tools like integrated development environments (IDEs), simulation software, debugging tools and testing equipment.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }} className=" mt-5 mb-5">
                <video controls style={{ width: '70%' }}>
                    <source src="/micons/vid-1.mp4" type="video/mp4" />
                </video>
            </div>


        </div >
    )
}

export default Services1
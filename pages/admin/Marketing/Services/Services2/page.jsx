import React from "react"
import Link from 'next/link'

const Services2 = () => {
    return (
        <div>
            {/* <div className=" bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
                style={{
                    height: '13vh',
                    textAlign: 'center',
                    textJustify: 'auto',
                }}>
                <h1 className="text-[30px] font-bold tracking-tight text-white mb-2 text-center">
                    IoT Product Development</h1>
            </div> */}
            {/* <div className="flex justify-end">
                <Link href="/dashbord/Marketing/Services/ContactUs">
                    <button className="relative inline-flex items-center mt-5 justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact Us
                        </span>
                    </button>
                </Link>
            </div> */}
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-5 mt-4">Cost Effective, High-Tech Embedded Systems – in tune with your vision.</h5>
            </div>
            <div className="text-[20px] ml-5 mr-5" style={{ textAlign: 'justify' }}>
                <p className=' mb-2'>IoT refers to a curated ecosystem of connected devices, empowered to gather and exchange information and data about ‘things’, so they observe, identify, understand and communicate with the world around, on their own – without reliance on human interfaces.</p>
                <p className=' mb-2' >IoT promises to transform the way we live, work, and entertain. It is a revolution that’s happening right now. In a broad sense, Internet of Things is a phrase associated to set-ups where network connectivity and computing capabilities are extended to devices, everyday objects, sensors – so they are able to generate, exchange and decipher data. Today there are billions of physical devices around the world, which are connected to the Internet. IoT has the potential to revolutionize industries, improve efficiency, enhance decision-making processes, and enable new services and business models. However, it also presents challenges related to scalability, interoperability, data management, privacy, and security, which need to be carefully addressed to fully realize its benefits.</p>
                <p className=' mb-2'>At Spicules, we are committed to bring you the best of IoT solutions, which cater to your requirements.
                    Book a free discovery call.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }} className=" mt-5 mb-5">
                <video controls style={{ width: '70%' }}>
                    <source src="/micons/vid-2.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Services2;

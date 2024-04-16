
// import React from "react";
// // import Dashboard from "@/components/dashboard";
// import Image from "next/image";

// import BG from "/public/Mimages/blog1.webp"
// import BG1 from "/public/Mimages/blog2.webp"
// import BG3 from "/public/Mimages/blog3.webp"
// import BG4 from "/public/Mimages/blog4.webp"

// const blog = () => {
//   return (
//     <div >
//       {/* <Dashboard /> */}
//       <p className="text-2xl font-bold tracking-tight text-gray-900 mb-5 text-center">Spicules Insight Blogs</p>
//       <div className="grid gap-4 grid-cols-4 grid-rows-1 mb-6 justify-between ml-6 pr-4">

//         <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={BG} alt="" />
//           </a>
//           <div className="p-5">
//             <a href="#">
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Concept Of TrustZone By ARM
//               </h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Security is a big challenge for Embedded Hardware, especially for IOT/connected devices. Connection to the internet enables a venue for hacking such as Distributed Denial of Service (DDoS) attacks and unauthorized access to internal networks.

//             </p>
//             <a href="/dashbord/Marketing/blog/blog1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//               Read more
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image class="rounded-t-lg" src={BG1} alt="" />
//           </a>
//           <div className="p-5">
//             <a href="#">
//               <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">An Inside Look of Analogue to Digital & Digital to Analogue Audio Conversion
//               </h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A microphone captures an analogue sound wave, transmitting it as electrical signals to an Analogue-to-Digital Converter (ADC). The ...</p>
//             <a href="/dashbord/Marketing/blog/blog2" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//               Read more
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </a>
//           </div>
//         </div>

        

//         <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={BG3} alt="" />
//           </a>
//           <div className="p-5">
//             <a href="#">
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">World of Mobile Applications: Choosing the Right Path
//               </h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">In the vast and ever-expanding universe of mobile applications, the decision to choose the right type can significantly ...</p>
//             <a href="/dashbord/Marketing/blog/blog3" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//               Read more
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </a>
//           </div>
//         </div>

//         <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={BG4} alt="" />
//           </a>
//           <div className="p-5">
//             <a href="#">
//               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A Comprehensive Guide to Ensuring Software Quality Delivery
//               </h5>
//             </a>
//             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">In the dynamic realm of product development, delivering a top-quality product is a paramount goal for every product ...</p>
//             <a href="/dashbord/Marketing/blog/blog4" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//               Read more
//               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//               </svg>
//             </a>
//           </div>
//         </div>

//              </div>
//     </div>
//   );
// };

// export default blog;


import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Image } from "next/image";

import TopCards from "@/src/components/dashboard/TopCards"; // Import the TopCards component
import BG from "/public/Mimages/blog1.webp";
import BG1 from "/public/Mimages/blog2.webp";
import BG3 from "/public/Mimages/blog3.webp";
import BG4 from "/public/Mimages/blog4.webp";

const Blog = () => {
  return (
    <Container>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-5 text-center">Spicules Insight Blogs</h2>
      <Row className="mb-6 justify-between ml-6 pr-4">
        <Col>
          <TopCards
            bg="bg-white"
            icon="fa fa-circle"
            earning="Concept Of TrustZone By ARM"
            subtitle="Security is a big challenge for Embedded Hardware, especially for IOT/connected devices. Connection to the internet enables a venue for hacking such as Distributed Denial of Service (DDoS) attacks and unauthorized access to internal networks."
            href="/dashbord/Marketing/blog/blog1"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-white"
            icon="fa fa-circle"
            earning="An Inside Look of Analogue to Digital & Digital to Analogue Audio Conversion"
            subtitle="A microphone captures an analogue sound wave, transmitting it as electrical signals to an Analogue-to-Digital Converter (ADC). The ..."
            href="/dashbord/Marketing/blog/blog2"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-white"
            icon="fa fa-circle"
            earning="World of Mobile Applications: Choosing the Right Path"
            subtitle="In the vast and ever-expanding universe of mobile applications, the decision to choose the right type can significantly ..."
            href="/dashbord/Marketing/blog/blog3"
          />
        </Col>
        <Col>
          <TopCards
            bg="bg-white"
            icon="fa fa-circle"
            earning="A Comprehensive Guide to Ensuring Software Quality Delivery"
            subtitle="In the dynamic realm of product development, delivering a top-quality product is a paramount goal for every product ..."
            href="/dashbord/Marketing/blog/blog4"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;

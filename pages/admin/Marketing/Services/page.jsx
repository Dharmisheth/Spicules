// "use client"
// import React from 'react'
// // import Dashboard from "@/components/dashboard";
// import Image from 'next/image';

// import MS from "/public/micons/icon-1.svg"
// import MS1 from "/public/micons/icon-2.svg"
// import MS2 from "/public/micons/icon-3.svg"
// import MS3 from "/public/micons/icon-4.svg"
// import MS4 from "/public/micons/icon-5.svg"
// import MS5 from "/public/micons/icon-6.svg"

// const Services = () => {
//   return (
//     <div>
//       {/* <Dashboard /> */}
//       <h1 className="text-[30px] font-bold tracking-tight text-gray-900 mb-5 text-center">Our Services</h1>
//       <div className="grid gap-4 grid-cols-3 grid-rows-1 mb-6 justify-between ml-6 pr-4 ">

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={MS} alt="" />
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Embedded Product Development</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Let’s transform ideas into products, as we navigate through various stages of development, from system architecture to hardware/software/mechanical design.</p>
//           <a href="/dashbord/Marketing/Services/Services1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//             Learn more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//             </svg>
//           </a>
//         </div>

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={MS1} alt="" />
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">IoT Product Development</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Right from planning to building & testing, we are equipped to fulfil your requirements for development of connected systems & devices, using IoT technology.</p>
//           <a href="/dashbord/Marketing/Services/Services2" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//             Learn more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//             </svg>
//           </a>
//         </div>

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={MS2} alt="" />
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hardware Design and Production</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Well designed, configured and quality tested/assured hardware on-demand.</p>
//           <a href="/dashbord/Marketing/Services/Services3" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//             Learn more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//             </svg>
//           </a>
//         </div>

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={MS3} alt="" />
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Embedded Software Development</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Integrate non-computer devices to communicate and work with each other with optimized, intelligent embedded software.</p>
//           <a href="/dashbord/Marketing/Services/Services4" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//             Learn more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//             </svg>
//           </a>
//         </div>

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={MS4} alt="" />
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Digital Engineering</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Let’s collaborate to create smart, useful digital products – or work to leverage the data & tech to better existing systems.</p>
//           <a href="/dashbord/Marketing/Services/Services5" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg ">
//             Learn more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//             </svg>
//           </a>
//         </div>

//         <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//             <Image className="rounded-t-lg" src={MS5} alt="" />
//             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quality Engineering</h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Great product & service quality are assured, as we ensure seamless management, development, execution & maintenance of digital & IT systems.</p>
//           <a href="/dashbord/Marketing/Services/Services6" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg">
//             Learn more
//             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//             </svg>
//           </a>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Services

import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

import MS from "/public/micons/icon-1.svg";
import MS1 from "/public/micons/icon-2.svg";
import MS2 from "/public/micons/icon-3.svg";
import MS3 from "/public/micons/icon-4.svg";
import MS4 from "/public/micons/icon-5.svg";
import MS5 from "/public/micons/icon-6.svg";

// Array of service details
const services = [
  { icon: MS, title: "Service One", text: "Description for Service One.", link: "/admin/Marketing/Services/Services1/page" },
  { icon: MS1, title: "Service Two", text: "Description for Service Two.", link: "/admin/Marketing/Services/Services2/page" },
  { icon: MS2, title: "Service Three", text: "Description for Service Three.", link: "/admin/Marketing/Services/Services3/page" },
  { icon: MS3, title: "Service Four", text: "Description for Service Four.", link: "/admin/Marketing/Services/Services4/page" },
  { icon: MS4, title: "Service Five", text: "Description for Service Five.", link: "/admin/Marketing/Services/Services5/page" },
  { icon: MS5, title: "Service Six", text: "Description for Service Six.", link: "/admin/Marketing/Services/Services6/page" },
];

const Services = () => {
  return (
    <Container>
      <h1 className="text-center font-weight-bold mb-5">Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col sm="4" className="mb-4" key={index}>
            <Card>
              <CardBody>
                <div className="icon-container">
                  <Image src={service.icon} alt={`Service Icon ${index + 1}`} width={64} height={64} />
                </div>
                <CardTitle tag="h5">{service.title}</CardTitle>
                <CardText>{service.text}</CardText>
                <Link href={service.link} passHref>
                  <Button color="primary" as="a">Learn more</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* Custom CSS */}
      <style jsx>{`
        .icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .icon-container img {
          width: 64px;
          height: 64px;
        }
      `}</style>
    </Container>
  );
}

export default Services;

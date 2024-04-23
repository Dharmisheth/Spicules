// "use client"
// import React from "react";

// import Link from "next/link";
// import Dashboard from "@/components/dashboard";

// const page = () => {
//   const features = [

//   ];
//   return (
//     <div>
//       <Dashboard />
//       <div className="flex flex-row justify-center gap-14 ">
//         <Link href="/dashbord/Marketing/Emailcampaigns">
//           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Email Campaign
//             </span>
//           </button>
//         </Link>


//         <Link href="/dashbord/Marketing/Inquiries">
//           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Inquiries
//             </span>
//           </button>
//         </Link>

//         <Link href="/dashbord/Marketing/Inquiries/Listofinquiries">
//           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               List of Inquiries
//             </span>
//           </button>
//         </Link>
//         <Link href="/dashbord/Marketing/Services">
//           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Services
//             </span>
//           </button>
//         </Link>

//         <Link href="/dashbord/Marketing/blog">
//           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//             <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//               Blogs
//             </span>
//           </button>
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default page;

"use client"
import React from "react";

import Link from "next/link";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Card,
  CardSubtitle,
} from "reactstrap";

const page = () => {
  const features = [

  ];
  return (
    <>
    <Card>
    <CardTitle tag="h3" className="border-bottom p-3 mb-0">
     Marketing Management
    </CardTitle>
    <CardBody className="">
      <div className="button-group">
        {/* <Button className="btn" color="primary" size="lg" href="/admin/Leads/createlead">
          Email Campain
        </Button> */}
        <Button className="btn" color="primary" size="lg" href="/admin/Marketing/Inquiries/page">
          Inquiries
        </Button>
        <Button className="btn" color="primary" size="lg" href="/admin/Marketing/blog/page">
         Blog
        </Button>
        <Button className="btn" color="primary" size="lg" href="./Inquiries/Listofinquiries/page">
         List Of Inquiries
        </Button>
        <Button className="btn" color="primary" size="lg" href="/admin/Marketing/Services/page">
         Services
        </Button>
      </div>
    </CardBody>
</Card>
</>
  );
};

export default page;
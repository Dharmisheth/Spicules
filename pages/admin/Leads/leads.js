// import React from "react";
// // import { Link } from "react-feather";
// import {
//   Row,
//   Col,
//   CardTitle,
//   CardBody,
//   Button,
//   Card,
//   CardSubtitle,
// } from "reactstrap";
// import dynamic from "next/dynamic";

// const Leads = () => {
//   const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
//   const options = {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//       stacked: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 4,
//       colors: ["transparent"],
//     },
//     legend: {
//       show: true,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "30%",
//         borderRadius: 2,
//       },
//     },
//     colors: ["#0d6efd", "#009efb", "#6771dc"],
//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//       ],
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         options: {
//           plotOptions: {
//             bar: {
//               columnWidth: "30%",
//               borderRadius: 7,
//             },
//           },
//         },
//       },
//     ],
//   };
//   const series = [
    
//     {
//       name: "2023",
//       data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
//     },
//     {
//       name: "2024",
//       data: [10, 20, 40, 60, 20, 40, 60, 60, 20],
//     },
//   ];
//     const features = [
    
//     ];
//     return (
//  <>
//     <Card>
//             <CardTitle tag="h3" className="border-bottom p-3 mb-0">
//              Leads Management
//             </CardTitle>
//             <CardBody className="">
//               <div className="button-group">
//                 <Button className="btn" color="primary" size="lg" href="/admin/Leads/createlead">
//                   Create New Lead
//                 </Button>
//                 {/* <Button className="btn" color="primary" size="lg" href="/admin/Leads/forms1">
//                   Update Lead
//                 </Button> */}
//                 <Button className="btn" color="primary" size="lg" href="/admin/Leads/list">
//                  Lead List
//                 </Button>
//                 <Button className="btn" color="primary" size="lg" href="/admin/Leads/Upload">
//                  Import Leads
//                 </Button>
//                 <Button className="btn" color="primary" size="lg" href="/admin/Leads/Analysiss">
//                  Analysis
//                 </Button>
//                 {/* <Button className="btn" color="primary" size="lg" href="/admin/Leads/update">
//                  Analysis
//                 </Button> */}
//               </div>
//             </CardBody>
//     </Card>
//     <>
//     {/* <Card>
//       <CardTitle tag="h3" className="border-bottom p-3 mb-0">Leads Analysis</CardTitle>
//       <CardTitle tag="h5" className=" p-3">Leads Summary</CardTitle>
//         <CardSubtitle className="text-muted p-3 mb-0" tag="h6">
//           Yearly Leads Report
//         </CardSubtitle> */}
//       {/* <Chart options={options} series={series} type="bar" height="379" /> */}
//     {/* </Card> */}
//     </>
//     </>
//     );
//   };
//   export default Leads;

import React from "react";
// import { Link } from "react-feather";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Card,
  CardSubtitle,
} from "reactstrap";
import dynamic from "next/dynamic";


const Leads = () => {

 return (
 <>
    <Card>
            <CardTitle tag="h3" className="border-bottom p-3 mb-0">
             Leads Management
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg" href="/admin/Leads/createlead">
                  Create New Lead
                </Button>
                {/* <Button className="btn" color="primary" size="lg" href="/admin/Leads/forms1">
                  Update Lead
                </Button> */}
                <Button className="btn" color="primary" size="lg" href="/admin/Leads/list">
                 Lead List
                </Button>
                <Button className="btn" color="primary" size="lg" href="/admin/Leads/Upload">
                 Import Leads
                </Button>
                <Button className="btn" color="primary" size="lg" href="/admin/Leads/Analysiss">
                 Analysis
                </Button>
                {/* <Button className="btn" color="primary" size="lg" href="/admin/Leads/update">
                 Analysis
                </Button> */}
              </div>
            </CardBody>
    </Card>
    <>
    {/* <Card>
      <CardTitle tag="h3" className="border-bottom p-3 mb-0">Leads Analysis</CardTitle>
      <CardTitle tag="h5" className=" p-3">Leads Summary</CardTitle>
        <CardSubtitle className="text-muted p-3 mb-0" tag="h6">
          Yearly Leads Report
        </CardSubtitle> */}
      {/* <Chart options={options} series={series} type="bar" height="379" /> */}
    {/* </Card> */}
    </>
    </>
    );
  };
  export default Leads;
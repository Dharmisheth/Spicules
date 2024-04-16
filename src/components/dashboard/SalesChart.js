// import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
// import dynamic from "next/dynamic";

// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// const SalesChart = () => {
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
//       name: "2020",
//       data: [20, 40, 50, 30, 40, 50, 30, 30, 40],
//     },
//     {
//       name: "2022",
//       data: [10, 20, 40, 60, 20, 40, 60, 60, 20],
//     },
//   ];

//   return (
//     <Card>
//       <CardBody>
//         <CardTitle tag="h5">Sales Summary</CardTitle>
//         <CardSubtitle className="text-muted" tag="h6">
//           Yearly Sales Report
//         </CardSubtitle>
//         <Chart options={options} series={series} type="bar" height="379" />
//       </CardBody>
//     </Card>
//   );
// };

// export default SalesChart;


import React, { useState, useEffect } from 'react';
import ChartComponent from '../../../pages/admin/Leads/ChartComponenet'; // Import the ChartComponent

const List = () => {
  // Define state to store leads
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Retrieve leads data from local storage on component mount
    const storedLeads = localStorage.getItem('leads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    }
  }, []);

  // Aggregate lead data based on status and source
  const aggregateData = () => {
    const aggregatedData = {};
    leads.forEach((lead) => {
      const key = `${lead.status}-${lead.source}`;
      if (aggregatedData[key]) {
        aggregatedData[key]++;
      } else {
        aggregatedData[key] = 1;
      }
    });
    return aggregatedData;
  };

  // Function to convert aggregated data to series format for chart
  const convertToSeries = (aggregatedData) => {
    const series = [];
    const categories = [];
    Object.entries(aggregatedData).forEach(([key, value]) => {
      const [status, source] = key.split('-');
      if (!series.find((s) => s.name === status)) {
        series.push({ name: status, data: [] });
      }
      series.find((s) => s.name === status).data.push(value);
      if (!categories.includes(source)) {
        categories.push(source);
      }
    });
    return { series, categories };
  };

  const aggregatedData = aggregateData();
  const { series, categories } = convertToSeries(aggregatedData);

  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: categories,
    },
  };

  // Function to handle lead deletion
  const handleDelete = (index) => {
    const updatedLeads = leads.filter((lead, i) => i !== index);
    setLeads(updatedLeads);
    // Update local storage
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString(); // Customize as per your requirement
  };

  return (
<div>

      {/* Render the ChartComponent with appropriate props */}
      <ChartComponent options={options} series={series} />
    </div>
  );
};

export default List;

// // import React, { useState, useEffect } from 'react';
// // import { Row, Col, Table, Card, CardTitle, CardBody, Button } from "reactstrap";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEdit, faTrashAlt, faFile, faHandshake } from '@fortawesome/free-solid-svg-icons';

// // const List = () => {
// //   // Define state to store leads
// //   const [leads, setLeads] = useState([]);

// //   useEffect(() => {
// //     // Retrieve leads data from local storage on component mount
// //     const storedLeads = localStorage.getItem('leads');
// //     if (storedLeads) {
// //       setLeads(JSON.parse(storedLeads));
// //     }
// //   }, []);

// //   // Function to handle lead deletion
// //   const handleDelete = (index) => {
// //     const updatedLeads = leads.filter((lead, i) => i !== index);
// //     setLeads(updatedLeads);
// //     // Update local storage
// //     localStorage.setItem('leads', JSON.stringify(updatedLeads));
// //   };

// //   return (
// //     <div>
// //       <Card>
// //       <CardTitle tag="h3" className="border-bottom p-3 mb-0">
// //             List of Created List
// //       </CardTitle>
// //       <CardBody>
// //       <Table className="table">
// //         <thead>
// //           <tr>
// //             <th>No.</th>
// //             <th>Name</th>
// //             <th>Email</th>
// //             <th>Source</th>
// //             <th>Status</th>
// //             <th>Actions</th> {/* Add a new table heading for actions */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {leads.map((lead, index) => (
// //             <tr key={index}>
// //               <td>{index + 1}.</td>
// //               <td>{lead.name}</td>
// //               <td>{lead.email}</td>
// //               <td>{lead.source}</td>
// //               <td>{lead.status}</td>
// //               <td>
// //                     <div className="button-group">
// //                       <Button color="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /> Update</Button>
// //                       {/* <Button color="danger" onClick={() => handleDelete(rowIndex)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button> */}
// //                       <Button color="danger" onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
// //                       <Button color="success" className="mr-2"><FontAwesomeIcon icon={faHandshake} /> Deal !</Button>
// //                     </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //       </CardBody>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default List;


// import React, { useState, useEffect } from 'react';
// import { Row, Col, Table, Card, CardTitle, CardBody, Button } from "reactstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrashAlt, faFile, faHandshake } from '@fortawesome/free-solid-svg-icons';

// const List = () => {
//   // Define state to store leads
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     // Retrieve leads data from local storage on component mount
//     const storedLeads = localStorage.getItem('leads');
//     if (storedLeads) {
//       setLeads(JSON.parse(storedLeads));
//     }
//   }, []);

//   // Function to handle lead deletion
//   const handleDelete = (index) => {
//     const updatedLeads = leads.filter((lead, i) => i !== index);
//     setLeads(updatedLeads);
//     // Update local storage
//     localStorage.setItem('leads', JSON.stringify(updatedLeads));
//   };

//   // Function to get current date
//   const getCurrentDate = () => {
//     const date = new Date();
//     return date.toLocaleDateString(); // Customize as per your requirement
//   };

//   return (
//     <div>
//       <Card>
//       <CardTitle tag="h3" className="border-bottom p-3 mb-0">
//             List of Created List
//       </CardTitle>
//       <CardBody>
//       <Table className="table">
//         <thead>
//           <tr>
//             <th>No.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Source</th>
//             <th>Status</th>
//             <th>Date Added</th> {/* Add a new table heading for date added */}
//             <th>Actions</th> {/* Add a new table heading for actions */}
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead, index) => (
//             <tr key={index}>
//               <td>{index + 1}.</td>
//               <td>{lead.name}</td>
//               <td>{lead.email}</td>
//               <td>{lead.source}</td>
//               <td>{lead.status}</td>
//               <td>{lead.dateAdded || getCurrentDate()}</td> {/* Display date added or current date */}
//               <td>
//                 <div className="button-group">
//                   <Button color="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /> Update</Button>
//                   <Button color="danger" onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
//                   <Button color="success" className="mr-2"><FontAwesomeIcon icon={faHandshake} /> Deal !</Button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default List;


import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Table, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import ChartComponent from './ChartComponenet'; // Import the ChartComponent

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
      <Card>
        <CardTitle tag="h3" className="border-bottom p-3 mb-0">
          List of Created List
        </CardTitle>
        <CardBody>
          <Table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Source</th>
                <th>Status</th>
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.source}</td>
                  <td>{lead.status}</td>
                  <td>{lead.dateAdded || getCurrentDate()}</td>
                  <td>
                    <div className="button-group">
                      <Button color="primary" className="mr-2">
                        <FontAwesomeIcon icon={faEdit} /> Update
                      </Button>
                      <Button color="danger" onClick={() => handleDelete(index)}>
                        <FontAwesomeIcon icon={faTrashAlt} /> Delete
                      </Button>
                      <Button color="success" className="mr-2">
                        <FontAwesomeIcon icon={faHandshake} /> Deal !
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      {/* Render the ChartComponent with appropriate props */}
      <ChartComponent options={options} series={series} />
    </div>
  );
};

export default List;

// import React, { useEffect, useState } from 'react';
// import { Table } from 'reactstrap';

// function Page() {
//   const [inquiryData, setInquiryData] = useState([]);

//   useEffect(() => {
//     // Retrieve data from local storage
//     const storedData = localStorage.getItem('inquiryData');
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       if (Array.isArray(parsedData)) { // Check if parsedData is an array
//         setInquiryData(parsedData);
//       } else {
//         console.error('Data retrieved from local storage is not an array');
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Inquiry Page</h1>
//       <Table>
//         <thead>
//           <tr>
//             <th>No.</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Requirement</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inquiryData.map((data, index) => (
//             <tr key={index}>
//               <td>{index + 1}.</td>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.requirement}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default Page;

import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

const LeadsTable = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const savedLeads = JSON.parse(localStorage.getItem('leads')) || [];
    setLeads(savedLeads);
  }, []);

  const addLead = (lead) => {
    const updatedLeads = [...leads, lead];
    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Requirement</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.textarea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LeadsTable;

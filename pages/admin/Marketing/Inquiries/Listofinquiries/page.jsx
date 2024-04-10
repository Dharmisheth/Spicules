import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

function Page() {
  const [inquiryData, setInquiryData] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('inquiryData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) { // Check if parsedData is an array
        setInquiryData(parsedData);
      } else {
        console.error('Data retrieved from local storage is not an array');
      }
    }
  }, []);

  return (
    <div>
      <h1>Inquiry Page</h1>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          {inquiryData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.requirement}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Page;

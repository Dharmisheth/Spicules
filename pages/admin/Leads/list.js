import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Card, CardTitle, CardBody, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faFile, faHandshake } from '@fortawesome/free-solid-svg-icons';

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

  // Function to handle lead deletion
  const handleDelete = (index) => {
    const updatedLeads = leads.filter((lead, i) => i !== index);
    setLeads(updatedLeads);
    // Update local storage
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
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
            <th>Actions</th> {/* Add a new table heading for actions */}
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
              <td>
                    <div className="button-group">
                      <Button color="primary" className="mr-2"><FontAwesomeIcon icon={faEdit} /> Update</Button>
                      {/* <Button color="danger" onClick={() => handleDelete(rowIndex)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button> */}
                      <Button color="danger" onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button>
                      <Button color="success" className="mr-2"><FontAwesomeIcon icon={faHandshake} /> Deal !</Button>
                    </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </CardBody>
      </Card>
    </div>
  );
};

export default List;

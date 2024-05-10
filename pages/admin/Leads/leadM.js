// List.jsx
import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  Table,
  Row,
  Col
} from 'reactstrap';

const List = ({ leads }) => {
  return (
    <Row>
      <Col>     
        <Card>
          <CardTitle tag="h3" className="border-bottom p-3 mb-0">
            List of Created Leads
          </CardTitle>
          <CardBody>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Source</th>
                  <th>File</th>
                  <th>Checked</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead, index) => (
                  <tr key={index}>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.source}</td>
                    <td>{lead.status}</td>
                    <td>{lead.file ? lead.file.name : 'N/A'}</td>
                    <td>{lead.checked ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default List;

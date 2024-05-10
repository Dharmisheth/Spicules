import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Table, Button, Input, FormGroup, FormFeedback } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faHandshake, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

const List = ({ uploadedData }) => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const storedLeads = localStorage.getItem('leads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads).map(lead => ({ ...lead, isEditing: false, errors: {} })));
    }
  }, []);

  useEffect(() => {
    if (uploadedData && uploadedData.length > 0) {
      setLeads(uploadedData);
    }
  }, [uploadedData]);
  const validateLead = (lead) => {
    const errors = {};
    if (!lead.name.trim()) {
      errors.name = 'Name is required.';
    }
    if (!lead.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(lead.email)) {
      errors.email = 'Invalid email address.';
    }
    if (!lead.source.trim()) {
      errors.source = 'Source is required.';
    }
    if (!lead.status.trim()) {
      errors.status = 'Status is required.';
    }
    return errors;
  };

  const handleSave = index => {
    const lead = leads[index];
    const errors = validateLead(lead);
    if (Object.keys(errors).length === 0) {
      const newLeads = leads.map((l, i) => ({
        ...l,
        isEditing: false
      }));
      setLeads(newLeads);
      localStorage.setItem('leads', JSON.stringify(newLeads));
    } else {
      const newLeads = leads.map((l, i) => i === index ? { ...l, errors } : l);
      setLeads(newLeads);
    }
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newLeads = leads.map((lead, i) => {
      if (i === index) {
        const updatedLead = { ...lead, [name]: value };
        const errors = validateLead(updatedLead);
        return { ...updatedLead, errors };
      }
      return lead;
    });
    setLeads(newLeads);
  };

  const handleEdit = index => {
    const newLeads = leads.map((lead, i) => ({
      ...lead,
      isEditing: i === index ? true : lead.isEditing
    }));
    setLeads(newLeads);
  };

  const handleCancel = index => {
    const newLeads = leads.map((lead, i) => ({
      ...lead,
      isEditing: i === index ? false : lead.isEditing
    }));
    setLeads(newLeads);
  };

  const handleDelete = index => {
    const updatedLeads = leads.filter((lead, i) => i !== index);
    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  return (
    <div>
      <Card>
        <CardTitle tag="h3" className="border-bottom p-3 mb-0">
          List of Leads
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {lead.isEditing ? (
                    <>
                      <td>
                        <FormGroup>
                          <Input type="text" name="name" value={lead.name} invalid={!!lead.errors.name} onChange={(e) => handleChange(index, e)} />
                          <FormFeedback>{lead.errors.name}</FormFeedback>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="email" name="email" value={lead.email} invalid={!!lead.errors.email} onChange={(e) => handleChange(index, e)} />
                          <FormFeedback>{lead.errors.email}</FormFeedback>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="source" value={lead.source} invalid={!!lead.errors.source} onChange={(e) => handleChange(index, e)}>
                            <option>--select--</option>
                            <option>Spicules Technologies Website</option>
                            <option>LinkedIn</option>
                            <option>Referral</option>
                            <option>Instagram</option>
                          </Input>
                          <FormFeedback>{lead.errors.source}</FormFeedback>
                        </FormGroup>
                      </td>
                      <td>
                        <FormGroup>
                          <Input type="select" name="status" value={lead.status} invalid={!!lead.errors.status} onChange={(e) => handleChange(index, e)}>
                            <option>--select--</option>
                            <option>Pending</option>
                            <option>Working</option>
                            <option>Followed</option>
                          </Input>
                          <FormFeedback>{lead.errors.status}</FormFeedback>
                        </FormGroup>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{lead.name}</td>
                      <td>{lead.email}</td>
                      <td>{lead.source}</td>
                      <td>{lead.status}</td>
                    </>
                  )}
                  <td>
                    <div className="button-group">
                      {lead.isEditing ? (
                        <>
                          <Button color="success" className="mr-2" onClick={() => handleSave(index)}>
                            <FontAwesomeIcon icon={faSave} /> Save
                          </Button>
                          <Button color="secondary" onClick={() => handleCancel(index)}>
                            <FontAwesomeIcon icon={faTimes} /> Cancel
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button color="primary" className="mr-2" onClick={() => handleEdit(index)}>
                            <FontAwesomeIcon icon={faEdit} /> Update
                          </Button>
                          <Button color="danger" onClick={() => handleDelete(index)}>
                            <FontAwesomeIcon icon={faTrashAlt} /> Delete
                          </Button>
                          <Button color="success" className="mr-2">
                            <FontAwesomeIcon icon={faHandshake} /> Deal!
                          </Button>
                        </>
                      )}
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

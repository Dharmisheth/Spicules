// import React, { useState, useEffect } from 'react';
// import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const Forms = ({ onAddLead }) => {
//   const handleSubmit = (values) => {
//     onAddLead(values);
//     formik.resetForm();
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     source: Yup.string().required('Lead source is required').notOneOf(['--select--'], 'Please select a valid source'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       source: '',
//       file: null,
//       checked: false,
//     },
//     validationSchema: validationSchema,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <Row>
//       <Col>
//         <Card>
//           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//             <i className="bi bi-bell me-2"> </i>
//             Create Lead
//           </CardTitle>
//           <CardBody>
//             <Form onSubmit={formik.handleSubmit}>
//               <FormGroup>
//                 <Label for="name">Name<span className="text-danger">*</span></Label>
//                 <Input
//                   id="name"
//                   placeholder="Name"
//                   type="text"
//                   {...formik.getFieldProps('name')}
//                 />
//                 {formik.touched.name && formik.errors.name ? (
//                   <div className="text-danger">{formik.errors.name}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="email">Email<span className="text-danger">*</span></Label>
//                 <Input
//                   id="email"
//                   placeholder="Email"
//                   type="email"
//                   {...formik.getFieldProps('email')}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <div className="text-danger">{formik.errors.email}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="source">Lead's Source<span className="text-danger">*</span></Label>
//                 <Input
//                   id="source"
//                   type="select"
//                   {...formik.getFieldProps('source')}
//                 >
//                   <option>--select--</option>
//                   <option>LinkedIn</option>
//                   <option>Referral</option>
//                   <option>Instagram</option>
//                   <option>Spicules Technologies Website</option>
//                 </Input>
//                 {formik.touched.source && formik.errors.source ? (
//                   <div className="text-danger">{formik.errors.source}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="status">Lead's Status<span className="text-danger">*</span></Label>
//                 <Input
//                   id="status"
//                   type="select"
//                   {...formik.getFieldProps('status')}
//                   required
//                 >
//                   <option value="">--select--</option>
//                   <option>Pending</option>
//                   <option>Working</option>
//                   <option>Followed</option>
//                 </Input>
//                 {formik.touched.status && formik.errors.status ? (
//                   <div className="text-danger">{formik.errors.status}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="file">Proof of Lead</Label>
//                 <Input
//                   id="file"
//                   type="file"
//                   onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
//                 />
//               </FormGroup>
//               <FormGroup check>
//                 <Label check>
//                   <Input
//                     type="checkbox"
//                     {...formik.getFieldProps('checked')}
//                   />{' '}
//                   Check me out
//                 </Label>
//               </FormGroup>
//               <Button className="mt-2" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// // Parent component
// const ParentComponent = () => {
//   // Define the state to store leads
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     // Retrieve leads data from local storage on component mount
//     const storedLeads = localStorage.getItem('leads');
//     if (storedLeads) {
//       setLeads(JSON.parse(storedLeads));
//     }
//   }, []);

//   // Function to add a lead to the list of leads and store in local storage
//   const handleAddLead = (lead) => {
//     // Add the new lead to the leads state
//     const updatedLeads = [...leads, lead];
//     setLeads(updatedLeads);
//     // Store leads data in local storage
//     localStorage.setItem('leads', JSON.stringify(updatedLeads));
//   };

//   return (
//     <div>
//       {/* Render the Forms component and pass the handleAddLead function as a prop */}
//       <Forms onAddLead={handleAddLead} />
//       {/* Render the list of leads */}
//       {/* <h2>List of Created Leads</h2>
//       <ul>
//         {leads.map((lead, index) => (
//           <li key={index}>{lead.name} - {lead.email}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default ParentComponent;


import React, { useState, useEffect } from 'react';
import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Forms = ({ onAddLead }) => {
  const handleSubmit = (values) => {
    onAddLead(values);
    formik.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    source: Yup.string().required('Lead source is required').notOneOf(['--select--'], 'Please select a valid source'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      source: '',
      file: null,
      checked: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Create Lead
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="name">Name<span className="text-danger">*</span></Label>
                <Input
                  id="name"
                  placeholder="Name"
                  type="text"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email<span className="text-danger">*</span></Label>
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="source">Lead&apos;s Source<span className="text-danger">*</span></Label>
                <Input
                  id="source"
                  type="select"
                  {...formik.getFieldProps('source')}
                >
                  <option>--select--</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Instagram</option>
                  <option>Spicules Technologies Website</option>
                </Input>
                {formik.touched.source && formik.errors.source ? (
                  <div className="text-danger">{formik.errors.source}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="status">Lead&apos;s Status<span className="text-danger">*</span></Label>
                <Input
                  id="status"
                  type="select"
                  {...formik.getFieldProps('status')}
                  required
                >
                  <option value="">--select--</option>
                  <option>Pending</option>
                  <option>Working</option>
                  <option>Followed</option>
                </Input>
                {formik.touched.status && formik.errors.status ? (
                  <div className="text-danger">{formik.errors.status}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="file">Proof of Lead</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    {...formik.getFieldProps('checked')}
                  />{' '}
                  Check me out
                </Label>
              </FormGroup>
              <Button className="mt-2" type="submit">
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

// Parent component
const ParentComponent = () => {
  // Define the state to store leads
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Retrieve leads data from local storage on component mount
    const storedLeads = localStorage.getItem('leads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    }
  }, []);

  // Function to add a lead to the list of leads and store in local storage
  const handleAddLead = (lead) => {
    // Add the new lead to the leads state
    const updatedLeads = [...leads, lead];
    setLeads(updatedLeads);
    // Store leads data in local storage
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  return (
    <div>
      {/* Render the Forms component and pass the handleAddLead function as a prop */}
      <Forms onAddLead={handleAddLead} />
      {/* Render the list of leads */}
      {/* <h2>List of Created Leads</h2>
      <ul>
        {leads.map((lead, index) => (
          <li key={index}>{lead.name} - {lead.email}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ParentComponent;

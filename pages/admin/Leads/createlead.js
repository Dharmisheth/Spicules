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
//     email: Yup.string().email('Invalid email').required('Email is required')
//     .matches(/^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Z]{2,}(?:\.[A-Za-z]{2,})?$/i, 'Invalid email Id'),
//     source: Yup.string().required('Lead source is required').notOneOf(['--select--'], 'Please select a valid source'),
//     status: Yup.string().required('Lead status is required').notOneOf(['--select--'], 'Please select a valid status'),
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
//                   <option>Spicules Technologies Website</option>
//                   <option>LinkedIn</option>
//                   <option>Referral</option>
//                   <option>Instagram</option>
                  
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
//                   <option>--select--</option>
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
//                 <Label for="source">Lead&apos;s Source<span className="text-danger">*</span></Label>
//                 <Input
//                   id="source"
//                   type="select"
//                   {...formik.getFieldProps('source')}
//                 >
//                   <option>--select--</option>
//                   <option>Spicules Technologies Website</option>
//                   <option>LinkedIn</option>
//                   <option>Referral</option>
//                   <option>Instagram</option>
                  
//                 </Input>
//                 {formik.touched.source && formik.errors.source ? (
//                   <div className="text-danger">{formik.errors.source}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="status">Lead&apos;s Status<span className="text-danger">*</span></Label>
//                 <Input
//                   id="status"
//                   type="select"
//                   {...formik.getFieldProps('status')}
//                   required
//                 >
//                   <option >--select--</option>
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
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitting form with values: ", values);
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('source', values.source);
      formData.append('status', values.status);
      if (values.file) formData.append('file', values.file);

      const response = await fetch('http://127.0.0.1:8000/leads/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.error("Server responded with status: ", response.status);
        throw new Error('Failed to add lead');
      }

      const data = await response.json();
      console.log("Server response: ", data);
      onAddLead(values);
    } catch (error) {
      console.error("Failed to submit form: ", error);
      alert('Error: ' + error.message); // Display error message to the user
    }
    setSubmitting(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    source: Yup.string().required('Lead source is required').notOneOf(['--select--'], 'Please select a valid source'),
    status: Yup.string().required('Lead status is required').notOneOf(['--select--'], 'Please select a valid status'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      source: '--select--',
      status: '--select--',
      file: null,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Create Lead
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit} noValidate>
              <FormGroup>
                <Label for="name">Name<span className="text-danger">*</span></Label>
                <Input
                  id="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="email">Email<span className="text-danger">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="source">Lead Source<span className="text-danger">*</span></Label>
                <Input
                  id="source"
                  type="select"
                  {...formik.getFieldProps('source')}
                >
                  <option>--select--</option>
                  <option>Spicules Technologies Website</option>
                  <option>LinkedIn</option>
                  <option>Referral</option>
                  <option>Instagram</option>
                </Input>
                {formik.touched.source && formik.errors.source && (
                  <div className="text-danger">{formik.errors.source}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="status">Lead Status<span className="text-danger">*</span></Label>
                <Input
                  id="status"
                  type="select"
                  {...formik.getFieldProps('status')}
                >
                  <option>--select--</option>
                  <option>Pending</option>
                  <option>Working</option>
                  <option>Followed</option>
                </Input>
                {formik.touched.status && formik.errors.status && (
                  <div className="text-danger">{formik.errors.status}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="file">Proof of Lead</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => formik.setFieldValue('file', e.currentTarget.files[0])}
                />
              </FormGroup>
              <Button type="submit" disabled={formik.isSubmitting}>
                Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

const ParentComponent = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const storedLeads = localStorage.getItem('leads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    }
  }, []);

  const handleAddLead = (lead) => {
    const updatedLeads = [...leads, lead];
    setLeads(updatedLeads);
    localStorage.setItem('leads', JSON.stringify(updatedLeads));
  };

  return (
    <div>
      <Forms onAddLead={handleAddLead} />
    </div>
  );
};

export default ParentComponent;

// import React from 'react';
// import {
//   Card,
//   Row,
//   Col,
//   CardTitle,
//   CardBody,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from 'reactstrap';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const Forms1 = () => {
//   // Define handleSubmit function
//   const handleSubmit = (values) => {
//     // Your update logic here
//   };

//   // Define validation schema using Yup
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//     text: Yup.string().required('Updated information is required'),
//   });

//   // Initialize Formik useFormik hook
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//       text: '',
//       file: null,
//       checked: false,
//     },
//     validationSchema: validationSchema,
//     onSubmit: handleSubmit, // Reference handleSubmit function here
//   });

//   return (
//     <Row>
//       <Col>
//         {/* --------------------------------------------------------------------------------*/}
//         {/* Card-1*/}
//         {/* --------------------------------------------------------------------------------*/}
//         <Card>
//           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
//             <i className="bi bi-bell me-2"> </i>
//             Update Lead
//           </CardTitle>
//           <CardBody>
//             <Form onSubmit={formik.handleSubmit}>
//               <FormGroup>
//                 <Label for="exampleEmail">Update Email</Label>
//                 <Input
//                   id="exampleEmail"
//                   name="email"
//                   placeholder="lead's email"
//                   type="email"
//                   {...formik.getFieldProps('email')}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                   <div className="text-danger">{formik.errors.email}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="examplePassword">Enter Password</Label>
//                 <Input
//                   id="examplePassword"
//                   name="password"
//                   placeholder="password"
//                   type="password"
//                   {...formik.getFieldProps('password')}
//                 />
//                 {formik.touched.password && formik.errors.password ? (
//                   <div className="text-danger">{formik.errors.password}</div>
//                 ) : null}
//               </FormGroup>

//               <FormGroup>
//                 <Label for="exampleText">Updated Information</Label>
//                 <Input
//                   id="exampleText"
//                   name="text"
//                   type="textarea"
//                   {...formik.getFieldProps('text')}
//                 />
//                 {formik.touched.text && formik.errors.text ? (
//                   <div className="text-danger">{formik.errors.text}</div>
//                 ) : null}
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exampleFile">File</Label>
//                 <Input
//                   id="exampleFile"
//                   name="file"
//                   type="file"
//                   onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
//                 />
//               </FormGroup>
//               <FormGroup check>
//                 <Input
//                   type="checkbox"
//                   {...formik.getFieldProps('checked')}
//                 />{' '}
//                 <Label className="mb-2" check>Check me out</Label>
//               </FormGroup>
//               <Button>Update</Button>
//             </Form>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default Forms1;


import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Forms = ({ onAddLead }) => {
  const handleSubmit = (values) => {
    onAddLead(values);
    formik.resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required')
      .matches(/^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Z]{2,}(?:\.[A-Za-z]{2,})?$/i, 'Invalid email Id'),
    source: Yup.string().required('Lead source is required').notOneOf(['--select--'], 'Please select a valid source'),
    status: Yup.string().required('Lead status is required').notOneOf(['--select--'], 'Please select a valid status'),
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
    <div>
      <h6 className="border-bottom p-3 mb-0">
        <i className="bi bi-bell me-2"> </i>
        Create Lead
      </h6>
      <form onSubmit={formik.handleSubmit}>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name<span className="text-danger">*</span></label>
            <input id="name" className="form-control" placeholder="Name" type="text" {...formik.getFieldProps('name')} />
            {formik.touched.name && formik.errors.name && <div className="text-danger">{formik.errors.name}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
            <input id="email" className="form-control" placeholder="Email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email && <div className="text-danger">{formik.errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="source" className="form-label">Lead Source<span className="text-danger">*</span></label>
            <select id="source" className="form-control" {...formik.getFieldProps('source')}>
              <option>--select--</option>
              <option>Spicules Technologies Website</option>
              <option>LinkedIn</option>
              <option>Referral</option>
              <option>Instagram</option>
            </select>
            {formik.touched.source && formik.errors.source && <div className="text-danger">{formik.errors.source}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Lead Status<span className="text-danger">*</span></label>
            <select id="status" className="form-control" {...formik.getFieldProps('status')} required>
              <option>--select--</option>
              <option>Pending</option>
              <option>Working</option>
              <option>Followed</option>
            </select>
            {formik.touched.status && formik.errors.status && <div className="text-danger">{formik.errors.status}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">Proof of Lead</label>
            <input id="file" className="form-control" type="file" onChange={(e) => formik.setFieldValue('file', e.target.files[0])} />
          </div>
          <div className="mb-3 form-check">
            <input id="checked" className="form-check-input" type="checkbox" {...formik.getFieldProps('checked')} />
            <label htmlFor="checked" className="form-check-label">Check me out</label>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
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

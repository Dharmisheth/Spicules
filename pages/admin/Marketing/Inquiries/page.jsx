// // "use client"
// // import React from 'react';
// // import Dashboard from '@/components/dashboard';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';

// // const Inquiries = () => {
// //   const initialValues = {
// //     name: '',
// //     mobileNumber: '',
// //     email: '',
// //     requirement: ''
// //   };

// //   const validationSchema = Yup.object().shape({
// //     name: Yup.string()
// //       .required('Your name is required')
// //       .matches(/^[a-zA-Z\s]+$/, 'Name must contain only alphabetic characters')
// //       .min(3, 'Name must be at least 3 characters')
// //       .max(30, 'Name must not exceed 30 characters'),
// //     mobileNumber: Yup.string()
// //       .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
// //       .max(15, 'Mobile number must be exactly 15 digits')
// //       .required('Your mobile number is required'),
// //     email: Yup.string()
// //       .email('Invalid email format')
// //       .required('Email is required')
// //       .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
// //     requirement: Yup.string()
// //       .required('Your Requirement is required')
// //       .max(500, 'Message must not exceed 500 characters'),
// //   });

// //   const handleSubmit = () => {
// //     alert("Your information is received and we will get back to you shortly.")
// //   };

// //   const [IscheckBoxOpen, setIscheckBoxOpen] = React.useState(false);
// //   const checkBox = () => {
// //     setIscheckBoxOpen(!IscheckBoxOpen);
// //   };

// //   return (
// //     <div>
// //       <Dashboard />
// //       <div>
// //         <Formik
// //           initialValues={initialValues}
// //           validationSchema={validationSchema}
// //           onSubmit={handleSubmit}
// //         >
// //           {formik => (
// //             <Form className="max-w-sm mx-auto border-2 p-7 mb-10 rounded-md" onSubmit={formik.handleSubmit}>
// //               <div className="mb-5">
// //                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
// //                 <Field type="text" id="name" name="name" placeholder="Enter your name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// //                 <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
// //               </div>
// //               <div className="mb-5">
// //                 <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your mobile number</label>
// //                 <Field type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// //                 <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm" />
// //               </div>
// //               <div className="mb-5">
// //                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
// //                 <Field type="email" id="email" name="email" placeholder="Enter your email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
// //                 <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
// //               </div>
// //               <div className="mb-5">
// //                 <label htmlFor="requirement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Requirement</label>
// //                 <Field as="textarea" id="requirement" name="requirement" rows="3" placeholder="Enter your requirement" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" />
// //                 <ErrorMessage name="requirement" component="div" className="text-red-500 text-sm" />
// //               </div>
// //               <div className="mb-5">
// //                 <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your language</label>
// //                 <button id="dropdownCheckboxButton" onClick={checkBox} data-dropdown-toggle="dropdownDefaultCheckbox" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Choose your language <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// //                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
// //                 </svg>
// //                 </button>
// //                 {IscheckBoxOpen && (
// //                   <div id="dropdownDefaultCheckbox" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
// //                     <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
// //                       <li>
// //                         <div className="flex items-center">
// //                           <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
// //                           <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Java</label>
// //                         </div>
// //                       </li>
// //                       <li>
// //                         <div className="flex items-center">
// //                           <input id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
// //                           <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Python</label>
// //                         </div>
// //                       </li>
// //                       <li>
// //                         <div className="flex items-center">
// //                           <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
// //                           <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">HTML</label>
// //                         </div>
// //                       </li>
// //                     </ul>
// //                   </div>
// //                 )}
// //               </div>
// //               <div className='flex flex-row justify-center'>
// //                 <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" type="submit">
// //                   <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// //                     Submit
// //                   </span>
// //                 </button>
// //               </div>
// //             </Form>
// //           )}
// //         </Formik>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Inquiries;

// // "use client"
// // import React, { useState, useEffect } from 'react';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import { Label, Input, Button, Card, CardBody, Row, Col, CardTitle, DropdownItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, Dropdown  } from 'reactstrap';

// // const Inquiries = () => {
// //   const initialValues = {
// //     name: '',
// //     mobileNumber: '',
// //     email: '',
// //     requirement: ''
// //   };

// //   useEffect(() => {
// //     const storedData = localStorage.getItem('inquiryData');
// //     if (storedData) {
// //       const parsedData = JSON.parse(storedData);
// //       initialValues.name = parsedData.name || '';
// //       initialValues.mobileNumber = parsedData.mobileNumber || '';
// //       initialValues.email = parsedData.email || '';
// //       initialValues.requirement = parsedData.requirement || '';
// //     }
// //   }, []);

// //   const validationSchema = Yup.object().shape({
// //     name: Yup.string()
// //       .required('Your name is required')
// //       .matches(/^[a-zA-Z\s]+$/, 'Name must contain only alphabetic characters')
// //       .min(3, 'Name must be at least 3 characters')
// //       .max(30, 'Name must not exceed 30 characters'),
// //     mobileNumber: Yup.string()
// //       .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
// //       .max(15, 'Mobile number must be exactly 15 digits')
// //       .required('Your mobile number is required'),
// //     email: Yup.string()
// //       .email('Invalid email format')
// //       .required('Email is required')
// //       .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
// //     requirement: Yup.string()
// //       .required('Your Requirement is required')
// //       .max(500, 'Message must not exceed 500 characters'),
// //   });

// //   const handleSubmit = (values) => {
// //     localStorage.setItem('inquiryData', JSON.stringify(values));
// //     alert("Your information is received and we will get back to you shortly.");
// //   };

// //   return (
// //     <Row>
// //       <Col>
// //         <Card>
// //           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
// //             <i className="bi bi-bell me-2"> </i>
// //             Inquiries
// //           </CardTitle>
// //           <CardBody>
// //             <Formik
// //               initialValues={initialValues}
// //               validationSchema={validationSchema}
// //               onSubmit={handleSubmit}
// //             >
// //               {formik => (
// //                 <Form className="max-w-sm mx-auto border-2 p-7 mb-10 rounded-md" onSubmit={formik.handleSubmit}>
// //                   <Label for="name">Your Name</Label>
// //                   <Field type="text" id="name" name="name" placeholder="Enter your name" className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="name" component="div" className="invalid-feedback" />
                  
// //                   <Label for="mobileNumber">Your mobile number</Label>
// //                   <Field type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" className={`form-control ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="mobileNumber" component="div" className="invalid-feedback" />
                  
// //                   <Label for="email">Your email</Label>
// //                   <Field type="email" id="email" name="email" placeholder="Enter your email" className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  
// //                   <Label for="requirement">Your Requirement</Label>
// //                   <Field as="textarea" id="requirement" name="requirement" rows="3" placeholder="Enter your requirement" className={`form-control ${formik.touched.requirement && formik.errors.requirement ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="requirement" component="div" className="invalid-feedback" />
                  
// //                   {/* <UncontrolledDropdown
// //     className="me-2"
// //     direction="down"
// //   >
// //     <DropdownToggle
// //       caret
 
// //     >
// //       Dropdown
// //     </DropdownToggle>
// //     <DropdownMenu>
// //       <DropdownItem header>
// //         Header
// //       </DropdownItem>
// //       <DropdownItem disabled>
// //         Action
// //       </DropdownItem>
// //       <DropdownItem>
// //         Another Action
// //       </DropdownItem>
// //       <DropdownItem divider />
// //       <DropdownItem>
// //         Another Action
// //       </DropdownItem>
// //     </DropdownMenu>
// //   </UncontrolledDropdown> */}
  
// //     <Label for="language">Choose your language</Label>
// //     <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
// //                     <DropdownToggle caret>
// //                       {formik.values.language ? formik.values.language : 'Select Language'}
// //                     </DropdownToggle>
// //                     <DropdownMenu>
// //                       <DropdownItem onClick={() => formik.setFieldValue('language', 'Java')}>Java</DropdownItem>
// //                       <DropdownItem onClick={() => formik.setFieldValue('language', 'Python')}>Python</DropdownItem>
// //                       <DropdownItem onClick={() => formik.setFieldValue('language', 'HTML')}>HTML</DropdownItem>
// //                     </DropdownMenu>
// //                   </Dropdown>
// //                   <ErrorMessage name="language" component="div" className="invalid-feedback" />

// //                   <div className='flex flex-row justify-center'>
// //                     <Button className='mt-2' type="submit">Submit</Button>
// //                   </div>
// //                 </Form>
// //               )}
// //             </Formik>
// //           </CardBody>
// //         </Card>
// //       </Col>
// //     </Row>
// //   );
// // }

// // export default Inquiries;


// // import React, { useState } from 'react';
// // import { Formik, Form, Field, ErrorMessage } from 'formik';
// // import * as Yup from 'yup';
// // import { Label, Button, Card, CardBody, Row, Col, CardTitle, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// // const Inquiries = () => {
// //   const initialValues = {
// //     name: '',
// //     mobileNumber: '',
// //     email: '',
// //     requirement: '',
// //     languages: [] // Array to store multiple selected languages
// //   };

// //   const validationSchema = Yup.object().shape({
// //     name: Yup.string()
// //       .required('Your name is required')
// //       .matches(/^[a-zA-Z\s]+$/, 'Name must contain only alphabetic characters')
// //       .min(3, 'Name must be at least 3 characters')
// //       .max(30, 'Name must not exceed 30 characters'),
// //     mobileNumber: Yup.string()
// //       .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
// //       .max(15, 'Mobile number must be exactly 15 digits')
// //       .required('Your mobile number is required'),
// //     email: Yup.string()
// //       .email('Invalid email format')
// //       .required('Email is required')
// //       .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
// //     requirement: Yup.string()
// //       .required('Your Requirement is required')
// //       .max(500, 'Message must not exceed 500 characters'),
// //     languages: Yup.array().min(1, 'Please select at least one language') // Ensure at least one language is selected
// //   });

// //   const handleSubmit = (values) => {
// //     localStorage.setItem('inquiryData', JSON.stringify(values));
// //     alert("Your information is received and we will get back to you shortly.");
// //   };

// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

// //   return (
// //     <Row>
// //       <Col>
// //         <Card>
// //           <CardTitle tag="h6" className="border-bottom p-3 mb-0">
// //             <i className="bi bi-bell me-2"> </i>
// //             Inquiries
// //           </CardTitle>
// //           <CardBody>
// //             <Formik
// //               initialValues={initialValues}
// //               validationSchema={validationSchema}
// //               onSubmit={handleSubmit}
// //             >
// //               {formik => (
// //                 <Form className="max-w-sm mx-auto border-2 p-7 mb-10 rounded-md" onSubmit={formik.handleSubmit}>
// //                   <Label for="name">Your Name</Label>
// //                   <Field type="text" id="name" name="name" placeholder="Enter your name" className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="name" component="div" className="invalid-feedback" />
                  
// //                   <Label for="mobileNumber">Your mobile number</Label>
// //                   <Field type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" className={`form-control ${formik.touched.mobileNumber && formik.errors.mobileNumber ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="mobileNumber" component="div" className="invalid-feedback" />
                  
// //                   <Label for="email">Your email</Label>
// //                   <Field type="email" id="email" name="email" placeholder="Enter your email" className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="email" component="div" className="invalid-feedback" />
                  
// //                   <Label for="requirement">Your Requirement</Label>
// //                   <Field as="textarea" id="requirement" name="requirement" rows="3" placeholder="Enter your requirement" className={`form-control ${formik.touched.requirement && formik.errors.requirement ? 'is-invalid' : ''}`} />
// //                   <ErrorMessage name="requirement" component="div" className="invalid-feedback" />
                  
// //                   <Label for="languages">Choose your languages</Label>
// //                   <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
// //                     <DropdownToggle outline>
// //                       {formik.values.languages.length > 0 ? formik.values.languages.join(', ') : 'Select Languages'}
// //                     </DropdownToggle>
// //                     <DropdownMenu>
// //                       <DropdownItem onClick={() => formik.setFieldValue('languages', [...formik.values.languages, 'Java'])}>Java</DropdownItem>
// //                       <DropdownItem onClick={() => formik.setFieldValue('languages', [...formik.values.languages, 'Python'])}>Python</DropdownItem>
// //                       <DropdownItem onClick={() => formik.setFieldValue('languages', [...formik.values.languages, 'HTML'])}>HTML</DropdownItem>
// //                     </DropdownMenu>
// //                   </Dropdown>
// //                   <ErrorMessage name="languages" component="div" className="invalid-feedback" />

// //                   <div className='flex flex-row justify-center'>
// //                     <Button className='mt-2' type="submit">Submit</Button>
// //                   </div>
// //                 </Form>
// //               )}
// //             </Formik>
// //           </CardBody>
// //         </Card>
// //       </Col>
// //     </Row>
// //   );
// // }

// // export default Inquiries;

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
//     textarea: Yup.string().required('Your requirement is required').notOneOf(['--select--'], 'Please select a valid source'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       textarea: '',
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
//             Inquiry
//           </CardTitle>
//           <CardBody>
//             <Form onSubmit={formik.handleSubmit}>
//               <FormGroup>
//                 <Label for="name">Your Name<span className="text-danger">*</span></Label>
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
//                 <Label for="email">Your Email<span className="text-danger">*</span></Label>
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
//                 <Label for="textarea">Your Requirement<span className="text-danger">*</span></Label>
//                 <Input
//                   id="textarea"
//                   name="textarea"
//                   type="textarea"
//                   {...formik.getFieldProps('textarea')}
//                 />
//                 {formik.touched.textarea && formik.errors.textarea ? (
//                   <div className="text-danger">{formik.errors.textarea}</div>
//                 ) : null}
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



// const ParentComponent = () => {
//   const [leads, setLeads] = useState([]);

//   const handleAddLead = (newLead) => {
//     setLeads([...leads, newLead]);
//   };

//   return (
//     <div>
//       <Forms onAddLead={handleAddLead} />
//     </div>
//   );
// };

// export default ParentComponent;

import React, { useState, useEffect } from 'react';
import { Card, Row, Col, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Forms = ({ onAddLead }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    textarea: Yup.string().required('Your requirement is required').notOneOf(['--select--'], 'Please select a valid source'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      textarea: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      onAddLead(values);
      resetForm();
    },
  });

  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Inquiry
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="name">Your Name<span className="text-danger">*</span></Label>
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
                <Label for="email">Your Email<span className="text-danger">*</span></Label>
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
                <Label for="textarea">Your Requirement<span className="text-danger">*</span></Label>
                <Input
                  id="textarea"
                  type="textarea"
                  {...formik.getFieldProps('textarea')}
                />
                {formik.touched.textarea && formik.errors.textarea ? (
                  <div className="text-danger">{formik.errors.textarea}</div>
                ) : null}
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

const ParentComponent = () => {
  const [leads, setLeads] = useState([]);

  // Effect to load leads from local storage only on client-side
  useEffect(() => {
    const savedLeads = localStorage.getItem('leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  // Effect to save leads to local storage only on client-side
  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
  }, [leads]);

  const handleAddLead = (newLead) => {
    setLeads(prevLeads => [...prevLeads, newLead]);
  };

  return (
    <div>
      <Forms onAddLead={handleAddLead} />
    </div>
  );
};

export default ParentComponent;

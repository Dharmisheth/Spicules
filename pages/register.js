// // RegistrationPage.js
// import { useState } from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
// import { useRouter } from 'next/router';
// import * as Yup from 'yup';
// import { Formik, ErrorMessage } from 'formik';

// const RegistrationPage = () => {
//   const router = useRouter();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required')
//     .matches(/^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Z]{2,}(?:\.[A-Za-z]{2,})?$/i, 'Invalid email Id'),
//     password: Yup.string().required('Password is required')
//       .min(6, 'Password must be at least 6 characters')
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/,
//         'Password must contain at least one special character, one uppercase letter, one number, and must be at least 6 characters long'
//       ),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);

//     try {
//       // Simulate registration logic
//       // Replace this with your actual registration logic
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async registration

//       // Store user data in session storage
//       sessionStorage.setItem('userData', JSON.stringify(values));

//       // Redirect user to login page after successful registration
//       await router.push('/login');
//     } catch (error) {
//       console.error('Registration error:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div style={{ overflowX: 'hidden' }}>
//       <Container fluid>
//         <Row className="min-vh-100 justify-content-center align-items-center">
//           <Col md={6}>
//             <Card>
//               <CardBody>
//                 <h2 className="text-center mb-4">User Registration</h2>
//                 <Formik
//                   initialValues={{ email: '', password: '' }}
//                   validationSchema={validationSchema}
//                   onSubmit={handleSubmit}
//                 >
//                   {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//                     <Form onSubmit={handleSubmit}>
//                       <FormGroup>
//                         <Label for="email">Email</Label>
//                         <Input
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="Enter your email"
//                           value={values.email}
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           disabled={isSubmitting}
//                         />
//                         <ErrorMessage name="email" component="div" className="text-danger" />
//                       </FormGroup>
//                       <FormGroup>
//                         <Label for="password">Password</Label>
//                         <Input
//                           type="password"
//                           name="password"
//                           id="password"
//                           placeholder="Enter your password"
//                           value={values.password}
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           disabled={isSubmitting}
//                         />
//                         <ErrorMessage name="password" component="div" className="text-danger" />
//                       </FormGroup>
//                       <Button color="primary" block type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? 'Registering...' : 'Register'}
//                       </Button>
//                     </Form>
//                   )}
//                 </Formik>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default RegistrationPage;

// import { useState } from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
// import { useRouter } from 'next/router';
// import * as Yup from 'yup';
// import { Formik, ErrorMessage } from 'formik';
// import axios from 'axios'; // Import Axios for making HTTP requests

// const RegistrationPage = () => {
//   const router = useRouter();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required')
//     .matches(/^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Z]{2,}(?:\.[A-Za-z]{2,})?$/i, 'Invalid email Id'),
//     password: Yup.string().required('Password is required')
//       .min(6, 'Password must be at least 6 characters')
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/,
//         'Password must contain at least one special character, one uppercase letter, one number, and must be at least 6 characters long'
//       ),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);

//     try {
//       // Make a POST request to your Django registration API
//       const response = await axios.post('http://your-django-server/api/register/', values);

//       // Check if registration was successful
//       if (response.status === 201) {
//         // Store user data in session storage
//         sessionStorage.setItem('userData', JSON.stringify(values));

//         // Redirect user to login page after successful registration
//         await router.push('/login');
//       } else {
//         console.error('Registration failed:', response.data.error);
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div style={{ overflowX: 'hidden' }}>
//       <Container fluid>
//         <Row className="min-vh-100 justify-content-center align-items-center">
//           <Col md={6}>
//             <Card>
//               <CardBody>
//                 <h2 className="text-center mb-4">User Registration</h2>
//                 <Formik
//                   initialValues={{ email: '', password: '' }}
//                   validationSchema={validationSchema}
//                   onSubmit={handleSubmit}
//                 >
//                   {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//                     <Form onSubmit={handleSubmit}>
//                       <FormGroup>
//                         <Label for="email">Email</Label>
//                         <Input
//                           type="email"
//                           name="email"
//                           id="email"
//                           placeholder="Enter your email"
//                           value={values.email}
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           disabled={isSubmitting}
//                         />
//                         <ErrorMessage name="email" component="div" className="text-danger" />
//                       </FormGroup>
//                       <FormGroup>
//                         <Label for="password">Password</Label>
//                         <Input
//                           type="password"
//                           name="password"
//                           id="password"
//                           placeholder="Enter your password"
//                           value={values.password}
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           disabled={isSubmitting}
//                         />
//                         <ErrorMessage name="password" component="div" className="text-danger" />
//                       </FormGroup>
//                       <Button color="primary" block type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? 'Registering...' : 'Register'}
//                       </Button>
//                     </Form>
//                   )}
//                 </Formik>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default RegistrationPage;


import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios'; // Import Axios for making HTTP requests

const RegistrationPage = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required')
    .matches(/^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Z]{2,}(?:\.[A-Za-z]{2,})?$/i, 'Invalid email Id'),
    password: Yup.string().required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/,
        'Password must contain at least one special character, one uppercase letter, one number, and must be at least 6 characters long'
      ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      // Make a POST request to your Django registration API
      const response = await axios.post('http://localhost:8000/api/register/', values);

      // Check if registration was successful
      if (response.status === 201) {
        // Store user data in session storage
        sessionStorage.setItem('userData', JSON.stringify(values));

        // Redirect user to login page after successful registration
        await router.push('/login');
      } else {
        console.error('Registration failed:', response.data.error);
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Container fluid>
        <Row className="min-vh-100 justify-content-center align-items-center">
          <Col md={6}>
            <Card>
              <CardBody>
                <h2 className="text-center mb-4">User Registration</h2>
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={isSubmitting}
                        />
                        <ErrorMessage name="password" component="div" className="text-danger" />
                      </FormGroup>
                      <Button color="primary" block type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Registering...' : 'Register'}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationPage;

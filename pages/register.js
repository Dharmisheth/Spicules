// RegistrationPage.js
import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

const RegistrationPage = () => {
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
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
      // Simulate registration logic
      // Replace this with your actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async registration

      // Store user data in session storage
      sessionStorage.setItem('userData', JSON.stringify(values));

      // Redirect user to login page after successful registration
      await router.push('/login');
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


// import { useState, useEffect } from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
// import { useRouter } from 'next/router';
// import * as Yup from 'yup';
// import { Formik, ErrorMessage } from 'formik';

// const RegistrationPage = () => {
//   const router = useRouter();

//   // Initialize registeredUsers state with data from sessionStorage if available
//   const [registeredUsers, setRegisteredUsers] = useState([]);

//   useEffect(() => {
//     // Access sessionStorage only on the client-side
//     const storedUsers = window.sessionStorage.getItem('registeredUsers');
//     if (storedUsers) {
//       setRegisteredUsers(JSON.parse(storedUsers));
//     }
//   }, []);

//   useEffect(() => {
//     // Update sessionStorage whenever registeredUsers state changes
//     window.sessionStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
//   }, [registeredUsers]);

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required'),
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

//       // Add the new user to the list of registered users
//       const newUser = { email: values.email, password: values.password };
//       setRegisteredUsers(prevState => [...prevState, newUser]);

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

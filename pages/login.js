// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
// import { FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const LoginPage = () => {
//   const router = useRouter(); // Initialize Next.js router

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/,
//       'Password must contain at least one special character, one uppercase letter, one number, and must be at least 6 characters long'
//     ),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);

//     try {
//       // Simulate login logic
//       // Replace this with your actual login logic
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async login

//       // Store user data in local storage
//       localStorage.setItem('userData', JSON.stringify(values));

//       // Redirect user to dashboard after login
//       await router.push('/admin'); // Replace '/dashboard' with the actual route of your dashboard
//     } catch (error) {
//       console.error('Login error:', error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div style={{ overflowX: 'hidden' }}>
//       <Container fluid>
//         <Row className="min-vh-100">
//           <Col xs={12} md={6} className="p-0">
//             <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', width: '50%' }}>
//               <img
//                 src="/onboarding-lead.webp"
//                 alt="Card image cap"
//                 style={{ height: '90vh', margin: 'auto', marginTop: '3rem', marginLeft: '7rem' }}
//               />
//             </div>
//           </Col>

//           <Col xs={12} md={6} className="p-0">
//             <div className="d-flex align-items-center justify-content-center w-100 h-100">
//               <Card className="w-100" style={{ maxWidth: '400px' }}>
//                 <CardBody>
//                   <h2 className="text-center mb-4">Login</h2>
//                   <Formik
//                     initialValues={{ email: '', password: '' }}
//                     validationSchema={validationSchema}
//                     onSubmit={handleSubmit}
//                   >
//                     {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
//                       <Form onSubmit={handleSubmit}>
//                         <FormGroup>
//                           <Label for="email">Email</Label>
//                           <Input
//                             type="email"
//                             name="email"
//                             id="email"
//                             placeholder="Enter your email"
//                             value={values.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             disabled={isSubmitting}
//                           />
//                           <ErrorMessage name="email" component="div" className="text-danger" />
//                         </FormGroup>
//                         <FormGroup>
//                           <Label for="password">Password</Label>
//                           <Input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="Enter your password"
//                             value={values.password}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             disabled={isSubmitting}
//                           />
//                           <ErrorMessage name="password" component="div" className="text-danger" />
//                         </FormGroup>
//                         <Button color="primary" block type="submit" disabled={isSubmitting}>
//                           {isSubmitting ? 'Logging in...' : 'Login'}
//                         </Button>
//                       </Form>
//                     )}
//                   </Formik>
//                   <div className="d-flex justify-content-between mt-4 mb-4">
//                     <div>
//                       <a href="/forgot-password">Forgot Password?</a>
//                     </div>
//                     <div>
//                       <FaGoogle className="mx-2" size={24} />
//                       <FaInstagram className="mx-2" size={24} />
//                       <FaLinkedin className="mx-2" size={24} />
//                     </div>
//                   </div>
//                 </CardBody>
//               </Card>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default LoginPage;

// LoginPage.js
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Logo from "@/src/layouts/logo/Logo";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const router = useRouter(); // Initialize Next.js router

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one special character, one uppercase letter, one number, and must be at least 6 characters long"
      ),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);

    try {
      // Retrieve stored user data from sessionStorage
      const storedUserData = sessionStorage.getItem("userData");
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        // Check if the provided email exists in stored user data
        if (userData.email === values.email) {
          // Compare the provided password with the stored password
          if (userData.password === values.password) {
            // Redirect user to dashboard after successful login
            // Store email in localStorage
            localStorage.setItem("userEmail", values.email);
            await router.push("/admin");
            return; // Exit function after successful login
          } else {
            // Display error if passwords don't match
            setErrors({ password: "Incorrect password" });
          }
        } else {
          // Display error if email doesn't exist in stored user data
          setErrors({ email: "Email not found" });
        }
      } else {
        // Display error if no user data is found in sessionStorage
        setErrors({
          email: "No user found. Please register or try a different email.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Container fluid>
        <Row className="min-vh-100">
          <Col xs={12} md={6} className="p-0">
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "50%",
              }}
            >
              {/* <img
                src="/onboarding-lead.webp"
                alt="Card image cap"
                style={{
                  height: "90vh",
                  margin: "auto",
                  marginTop: "3rem",
                  marginLeft: "7rem",
                }}
              /> */}
            </div>
          </Col>

          <Col xs={12} md={6} className="p-0">
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <Card className="w-100" style={{ maxWidth: "400px" }}>
                <CardBody>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Logo />
                  </div>
                  <h2 className="text-center mb-4">Login</h2>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
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
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
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
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </FormGroup>
                        <Button
                          color="primary"
                          block
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Logging in..." : "Login"}
                        </Button>
                      </Form>
                    )}
                  </Formik>
                  <div className="d-flex justify-content-between mt-4 mb-4">
                    <div>
                      <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    {/* <div>
                      <FaGoogle className="mx-2" size={24} />
                      <FaInstagram className="mx-2" size={24} />
                      <FaLinkedin className="mx-2" size={24} />
                    </div> */}
                    <Label style={{ color: "red" }}>
                      Email not found?
                      <p>
                        <Link href="#">Contact Admin</Link>
                      </p>
                    </Label>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;

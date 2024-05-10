import { useRouter } from "next/router";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, CardImg } from "reactstrap";
import Link from "next/link";
import Logo from "@/src/layouts/logo/Logo";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const router = useRouter(); // Initialize Next.js router

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .matches(
        /^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Z]{2,}(?:\.[A-Za-z]{2,})?$/i,
        "Invalid email Id"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{6,}$/,
        "Password must contain at least one special character, one uppercase letter, one number, and must be at least 6 characters long"
      ),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/user_auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const data = await response.json();
      console.log("Response:", data);
      if (data.code === 1) {
        // Store user email in local storage
        localStorage.setItem("userEmail", values.email);
        // Redirect user to the MyAccount page
        router.push("/admin");
      } else {
        throw new Error("Failed to authenticate");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle authentication error
    }
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Container fluid>
        <Row className="min-vh-100">

 <Col xs={12} md={6} className="p-0">
            <div
              style={{
                backgroundSize: 'cover',
                marginTop:'3rem',
                marginLeft:'6rem',
                backgroundPosition: 'center',
                width: '90%',
                height: '90%',
                backgroundImage: `url('/onboarding-lead.webp')`,
              }}
            ></div>
          </Col>          
          <Col xs={12} md={6} className="p-0">
            <div className="d-flex align-items-center justify-content-center w-100 h-100">
              <Card className="w-100" style={{ maxWidth: '400px' }}>
                <CardBody>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
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
                      <Link href="/forgot-password">Forgot Password?</Link>
                    </div>
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
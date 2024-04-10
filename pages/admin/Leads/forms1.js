import React from 'react';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Forms1 = () => {
  // Define handleSubmit function
  const handleSubmit = (values) => {
    // Your update logic here
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    text: Yup.string().required('Updated information is required'),
  });

  // Initialize Formik useFormik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      text: '',
      file: null,
      checked: false,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit, // Reference handleSubmit function here
  });

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update Lead
          </CardTitle>
          <CardBody>
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Update Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="lead's email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Enter Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Updated Information</Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  {...formik.getFieldProps('text')}
                />
                {formik.touched.text && formik.errors.text ? (
                  <div className="text-danger">{formik.errors.text}</div>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  onChange={(e) => formik.setFieldValue('file', e.target.files[0])}
                />
              </FormGroup>
              <FormGroup check>
                <Input
                  type="checkbox"
                  {...formik.getFieldProps('checked')}
                />{' '}
                <Label className="mb-2" check>Check me out</Label>
              </FormGroup>
              <Button>Update</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms1;

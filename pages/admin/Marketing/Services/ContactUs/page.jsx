'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contactUs = () => {
    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Your name is required')
            .matches(/^[a-zA-Z\s]+$/, 'Name must contain only alphabetic characters')
            .min(3, 'Name must be at least 3 characters')
            .max(30, 'Name must not exceed 30 characters'),
        mobileNumber: Yup.string()
            .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
            .max(15, 'Mobile number must be exactly 15 digits')
            .required('Your mobile number is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address'),
        message: Yup.string()
            .required('Your message is required')
            .max(500, 'Message must not exceed 500 characters'),
    });

    // Define submit handler
    const handleSubmit = (values, { setSubmitting }) => {
        // Here you can perform your form submission logic
        alert("Your Response saved Successfully.");
        setSubmitting(false);
    };

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    mobileNumber: '',
                    email: '',
                    message: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="max-w-sm mx-auto border-2 mt-10 p-7 mb-10 rounded-md">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <Field type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your mobile number</label>
                            <Field type="text" id="mobileNumber" name="mobileNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your mobile number" />
                            <ErrorMessage name="mobileNumber" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <Field type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Requirement/Your Suggestion</label>
                            <Field as="textarea" id="message" name="message" rows="3" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" placeholder="Enter your requirement" />
                            <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className='flex flex-row justify-center'>
                            <button type="submit" disabled={isSubmitting} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Submit
                                </span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default contactUs;


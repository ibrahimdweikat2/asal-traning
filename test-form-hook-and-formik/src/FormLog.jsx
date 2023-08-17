import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
    .matches(/[A-Z]+[0-9]*@[a-z]+.com/,"invalid email matches"),
});

const ValidationSchemaExample = () => (
  <div>
    <Formik
      initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
        }}
        >
      {({ errors, touched }) => (
          <Form className='form'>
            <h1>Signup</h1>
          <Field name="name" />
          {errors.name && <p className='error'>{errors?.name}</p>}
{/* -           {errors.name && touched.name ? (
-            <div>{errors.name}</div>):null} */}
        <ErrorMessage name="name" type='div'/>
          <Field name="email" type="email" className='in'/>
          {errors.email && <p className='error'>{errors?.email}</p>}
{/* -           {errors.email && touched.email ? (
-            <div>{errors.email}</div>) : null} */}
{/* +         <ErrorMessage name="email" /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample
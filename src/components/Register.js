import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GlassCard from './GlassCard';

const Register = ({ onClose }) => {
  return (
    <div className="overlay">
        
      <GlassCard>
        
        <h2>Register</h2>
        
        <Formik
          initialValues={{ name: '', phone: '', email: '', userType: '', documents: null }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),
            phone: Yup.string().required('Required'),
            userType: Yup.string().required('Required'),
          })}
          onSubmit={(values) => {
            // Handle registration logic here
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" />

              <label htmlFor="phone">Phone Number</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" component="div" />

              <label htmlFor="email">Email (Optional)</label>
              <Field name="email" type="email" />

              <label htmlFor="userType">User Type</label>
              <Field as="select" name="userType">
                <option value="">Select</option>
                <option value="farmer">Farmer</option>
                <option value="landlord">Landlord</option>
              </Field>
              <ErrorMessage name="userType" component="div" />

              {values.userType === 'landlord' && (
                <>
                  <label htmlFor="documents">Upload Documents</label>
                  <input
                    id="documents"
                    name="documents"
                    type="file"
                    onChange={(event) => {
                      setFieldValue('documents', event.currentTarget.files[0]);
                    }}
                  />
                </>
              )}

              <button type="submit">Register</button> <button onClick={onClose}>Back to Login</button>
            </Form>
          )}
        </Formik>
       
      </GlassCard>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GlassCard from './GlassCard';
import Register from './Register';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      {showRegister ? (
        <Register onClose={() => setShowRegister(false)} />
      ) : (
        <GlassCard>
          <h2>Login</h2>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid email address').required('Required'),
              password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
            })}
            onSubmit={(values) => {
              // Handle login logic here
            }}
          >
            <Form>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" />

              <button type="submit">Login</button>
            </Form>
          </Formik>
          <button onClick={() => setShowRegister(true)}>New Registration</button>
        </GlassCard>
      )}
    </div>
  );
};

export default Login;

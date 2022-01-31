import { ErrorMessage, Field, Form, Formik } from 'formik';

import { formValidationSchema } from '../validation/formValidationSchema';

import '../styles/styles.css';

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password1: string;
  password2: string;
}

const initialState: RegisterForm = {
  firstName: '',
  lastName: '',
  email: '',
  password1: '',
  password2: '',
};

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <hr />

      <Formik
        initialValues={initialState}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={formValidationSchema}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='password1'>Password</label>
            <Field name='password1' type='password' />
            <ErrorMessage name='password1' component='span' />

            <label htmlFor='password2'>Repeat password</label>
            <Field name='password2' type='password' />
            <ErrorMessage name='password2' component='span' />

            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

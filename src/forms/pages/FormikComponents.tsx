import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  jobType: string;
  terms: boolean;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  jobType: '',
  terms: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required')
    .max(15, 'Firt name must be less than or equal to 15 characters'),

  lastName: Yup.string()
    .required('Last name is required')
    .max(10, 'Firt name must be less than or equal to 10 characters'),

  email: Yup.string().required('Email is required').email('Invalid email address'),

  jobType: Yup.string().required('Role position is required'),
  terms: Yup.boolean().isTrue('Must accept terms and conditions'),
});

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <label htmlFor='firstName'>First name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='firstName' component='span' />

            <label htmlFor='lastName'>Last name</label>
            <Field name='firstName' type='text' />
            <ErrorMessage name='lastName' component='span' />

            <label htmlFor='email'>Email</label>
            <Field name='email' type='email' />
            <ErrorMessage name='email' component='span' />

            <label htmlFor='jobType'>Job role</label>
            <Field name='jobType' as='select'>
              <option value=''> -- Select and option -- </option>
              <option value='Frontend'>Frontend</option>
              <option value='Backend'>Backend</option>
              <option value='Fullstack'>Fullstack</option>
              <option value='DevOps'>DevOps</option>
              <option value='Data Scientist'>Data Scientist</option>
            </Field>
            <ErrorMessage name='jobType' component='span' />

            <label>
              <Field name='terms' type='checkbox' />
              Terms & Conditions
            </label>
            <ErrorMessage name='terms' component='span' />

            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

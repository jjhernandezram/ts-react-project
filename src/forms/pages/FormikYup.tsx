import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
};

export const FormikYup = () => {
  const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
    initialValues,

    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .max(15, 'Firt name must be less than or equal to 15 characters'),

      lastName: Yup.string()
        .required('Last name is required')
        .max(10, 'Firt name must be less than or equal to 10 characters'),

      email: Yup.string().required('Email is required').email('Invalid email address'),
    }),
  });

  return (
    <div>
      <h1>Formik with Yup</h1>
      <hr />
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input type='text' autoComplete='off' {...getFieldProps('firstName')} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last name</label>
        <input type='text' autoComplete='off' {...getFieldProps('lastName')} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input type='email' autoComplete='off' {...getFieldProps('email')} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

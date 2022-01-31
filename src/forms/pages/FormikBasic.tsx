import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasic = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (values.firstName.length >= 15) {
      errors.firstName = 'Firt name must be less than or equal to 15 characters';
    }

    if (!values.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (values.lastName.length >= 10) {
      errors.lastName = 'Firt name must be less than or equal to 10 characters';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validate: validate,
  });

  return (
    <div>
      <h1>Formik</h1>
      <hr />
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First name</label>
        <input
          type='text'
          name='firstName'
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete='off'
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last name</label>
        <input
          type='text'
          name='lastName'
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete='off'
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          autoComplete='off'
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Save</button>
      </form>
    </div>
  );
};

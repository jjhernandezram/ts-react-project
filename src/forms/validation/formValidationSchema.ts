import * as Yup from 'yup';

export const validationSchema = Yup.object({
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

export const formValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required.')
    .min(3, 'Firt name must be at least 3 characters.')
    .max(15, 'Firt name must be less than or equal to 15 characters.'),

  lastName: Yup.string()
    .required('Last name is required.')
    .min(3, 'Firt name must be at least 3 characters.')
    .max(10, 'Firt name must be less than or equal to 10 characters.'),

  email: Yup.string().required('Email is required').email('Invalid email address.'),

  password1: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long.'),

  password2: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long.')
    .oneOf([Yup.ref('password1 '), null], 'Passwords must match.'),
});

export const dynamicFormValidationSchema = Yup.object({
  firstName: Yup.string()
    .required('First name is required.')
    .min(3, 'Firt name must be at least 3 characters.')
    .max(15, 'Firt name must be less than or equal to 15 characters.'),

  lastName: Yup.string()
    .required('Last name is required.')
    .min(3, 'Firt name must be at least 3 characters.')
    .max(10, 'Firt name must be less than or equal to 10 characters.'),

  email: Yup.string().required('Email is required').email('Invalid email address.'),
});

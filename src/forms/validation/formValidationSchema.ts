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

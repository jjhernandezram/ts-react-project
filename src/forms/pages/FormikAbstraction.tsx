import { Formik, Form } from 'formik';
import { FormChecbox, FormInput, FormSelect } from '../Components';
import { validationSchema } from '../validation/formValidationSchema';

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

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
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
            <FormInput label='First Name' name='firstName' type='text' />
            <FormInput label='Last Name' name='lastName' type='text' />
            <FormInput label='Email' name='email' type='email' />

            <FormSelect label='Job Type' name='jobType'>
              <option value=''> -- Select and option -- </option>
              <option value='Frontend'>Frontend</option>
              <option value='Backend'>Backend</option>
              <option value='Fullstack'>Fullstack</option>
              <option value='DevOps'>DevOps</option>
              <option value='Data Scientist'>Data Scientist</option>
            </FormSelect>

            <FormChecbox label='Terms & Conditions' name='terms' />

            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

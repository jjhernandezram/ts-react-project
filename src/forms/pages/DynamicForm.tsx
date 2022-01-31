import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormInput, FormSelect } from '../Components';
import '../styles/styles.css';

import data from '../data/custom-form.json';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (let input of data) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (let rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required(`Field is required.`);
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 3, `Min length must be ${(rule as any).value || 3}.`);
    }

    if (rule.type === 'email') {
      schema = schema.email(`Must be a valid email address.`);
    }
  }

  requiredFields[input.name] = schema;
}

export const DynamicForm = () => {
  console.log(requiredFields);
  return (
    <div>
      <h1>Dynamic Forms</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object(requiredFields)}
      >
        {(formik) => (
          <Form>
            {data.map(({ name, label, type, options }) => {
              if (type === 'text' || type === 'password' || type === 'email') {
                return <FormInput key={name} label={label} name={name} type={type as any} />;
              } else if (type === 'select') {
                return (
                  <FormSelect key={name} label={label} name={name}>
                    <option value=''> -- Select and option -- </option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.game}
                      </option>
                    ))}
                  </FormSelect>
                );
              }

              throw new Error(`Unreconized "${type}" type.`);
            })}

            <button type='submit'>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

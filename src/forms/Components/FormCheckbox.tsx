import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const FormChecbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && <span className='error-message'>{meta.error}</span>}
    </>
  );
};

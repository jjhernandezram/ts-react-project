import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {
  const [formValues, setFormValues] = useState(initState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const reset = () => {
    setFormValues(initState);
  };

  return { ...formValues, formValues, handleInputChange, reset };
};

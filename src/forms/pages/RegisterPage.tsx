import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  password2: string;
}

const initialState: RegisterForm = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const RegisterPage = () => {
  const { name, email, password, password2, formValues, handleInputChange, reset } =
    useForm<RegisterForm>(initialState);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
    reset();
  };

  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          autoComplete='off'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleInputChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        <span>{name.trim().length <= 0 && 'El nombre es obligatorio'}</span>

        <input
          type='email'
          autoComplete='off'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleInputChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        <span>{!isValidEmail(email) && 'El correo es obligatorio'}</span>

        <input type='password' placeholder='Password' name='password' value={password} onChange={handleInputChange} />

        <input
          type='password'
          placeholder='Repeat password'
          name='password2'
          value={password2}
          onChange={handleInputChange}
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

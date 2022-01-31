import { LazyExoticComponent } from 'react';
import { DynamicForm, FormikAbstraction, FormikBasic, FormikComponents, FormikYup, RegisterFormikPage, RegisterPage } from '../forms/pages';


type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

export const routes: Routes[] = [
  {
    to: '/register',
    path: 'register',
    Component: RegisterPage,
    name: 'Register Page',
  },
  {
    to: '/formik',
    path: 'formik',
    Component: FormikBasic,
    name: 'Formik Basic',
  },
  {
    to: '/formikyup',
    path: 'formikyup',
    Component: FormikYup,
    name: 'Formik Yup',
  },
  {
    to: '/formikcomponents',
    path: 'formikcomponents',
    Component: FormikComponents,
    name: 'Formik Components',
  },
  {
    to: '/formik-abstraction',
    path: 'formik-abstraction',
    Component: FormikAbstraction,
    name: 'Formik Abstraction',
  },
  {
    to: '/formik-register-page',
    path: 'formik-register-page',
    Component: RegisterFormikPage,
    name: 'Register Formik Page',
  },
  {
    to: '/dynamic-form',
    path: 'dynamic-form',
    Component: DynamicForm,
    name: 'Dynamic Form',
  },
];

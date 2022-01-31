import { LazyExoticComponent } from 'react';
import { FormikAbstraction, FormikBasic, FormikComponents, FormikYup, RegisterPage } from '../forms/pages';

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
];

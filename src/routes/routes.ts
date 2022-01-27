import { LazyExoticComponent } from 'react';
import { ShoppingPage } from '../component-control-props/pages/ShoppingPage';

type JSXComponent = () => JSX.Element;

interface Routes {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

export const routes: Routes[] = [
  {
    to: '/shopping',
    path: 'shopping',
    Component: ShoppingPage,
    name: 'Shopping Page',
  },
];

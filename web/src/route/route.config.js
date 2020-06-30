import { Home, About } from '../pages';

export default [
{
  component: Home,
  path: '/',
  exact: true,
  name: 'Home'
},
{
  component: About,
  path: '/about',
  exact: true,
  name: 'About'
}]
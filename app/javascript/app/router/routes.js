import UsersPage from '../pages/UsersPage';

const HOME_PATH = '/';

export default [
  {
    path: HOME_PATH,
    name: 'Home',
    component: UsersPage,
    props: (route) => ({ search: route.query.search })
  }
];

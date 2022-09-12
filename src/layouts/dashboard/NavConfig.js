// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: getIcon('eva:home-fill'),
  },
  {
    title: 'Archives',
    path: '/archives',
    icon: getIcon('eva:list-fill'),
  },
  {
    title: 'Categories',
    path: '/categories',
    icon: getIcon('eva:star-fill'),
  },
  {
    title: 'About',
    path: '/about',
    icon: getIcon('eva:heart-fill'),
  },
];

export default navConfig;

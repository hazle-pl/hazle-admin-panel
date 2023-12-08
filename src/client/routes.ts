import Home from './pages/Home';
import Settings from './pages/settings';


const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    visible: true,
  },
  {
    name: 'Settings',
    path: '/settings',
    component: Settings,
    visible: true,
    
    childs: [
      {
        name: 'Child 1',
        path: '/settings/child1',
        component: Settings,
        visible: false,
      },
      {
        name: 'Child 2',
        path: '/settings/child2',
        component: Settings,
        visible: true,
      }
    ]
  },
  {
    name: 'xdd',
    path: '/xd',
    component: Settings,
    visible: true,
    
    childs: [
      {
        name: 'Child 1',
        path: '/xd/child1',
        component: Settings,
        visible: true,
      },
      {
        name: 'Child 2',
        path: '/xd/child2',
        component: Settings,
        visible: false,
      }
    ]
  },
];

export default routes;
export const tabsConfig = [
  {
    name: 'Dashboard',
    label: 'Dashboard',
    icon: 'view-dashboard',
    component: require('../screens/DashboardScreen').default,
  },
  {
    name: 'Orders',
    label: 'Orders',
    icon: 'shopping',
    component: require('../screens/OrdersScreen').default,
  },
  {
    name: 'MyAccount',
    label: 'My Account',
    icon: 'account',
    component: require('../screens/MyAccountScreen').default,
  },
  {
    name: 'Employee',
    label: 'Employee',
    icon: 'account-group',
    component: require('../screens/EmployeeScreen').default,
  },
  {
    name: 'Tables',
    label: 'Tables',
    icon: 'table-chair',
    component: require('../screens/TablesScreen').default,
  },
];

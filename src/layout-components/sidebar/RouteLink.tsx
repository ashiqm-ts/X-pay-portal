import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCardIcon from '@mui/icons-material/AddCard';
import PreviewIcon from '@mui/icons-material/Preview';

type LinkProps = {
  children?: { name: string; to: string; icon: React.ReactNode }[] | [];
  label: string;
  name?: string;
  icon?: React.ReactNode;
  to?: string;
}[];

export const Links: LinkProps = [
  {
    label: 'Dashboard',
    icon: <CreditCardIcon />,
    to: '/dashboard',
  },
  {
    label: 'Routing Confiuration',
    icon: <CreditCardIcon />,
    to: '/routing-configuration',
  },
   {
    label: 'Routing Timer Confiuration',
    icon: <CreditCardIcon />,
    to: '/routing-timer-configuration',
  },
  // {
  //   label: 'Routing Configuration',
  //   icon: <CreditCardIcon />,
  //   to: '/card-product',
  //   children: [
  //     {
  //       name: 'Create Routing Configuration',
  //       to: '/create-routing-configuration',
  //       icon: <AddCardIcon />,
  //     },
  //     {
  //       name: 'View Routing Configuration',
  //       to: '/view-routing-configuration',
  //       icon: <PreviewIcon />,
  //     },
  //   ],
  // },

  {
    label: 'User Role Management',
    icon: <CreditCardIcon />,
    to: '/user-role-management',
    children: [
      {
        name: 'Users',
        to: '/user-role-management/users',
        icon: <AddCardIcon />,
      },
      {
        name: 'Roles',
        to: '/user-role-management/roles',
        icon: <PreviewIcon />,
      },
      {
        name: 'User Group',
        to: '/user-role-management/user-group',
        icon: <PreviewIcon />,
      },
    ],
  },
];

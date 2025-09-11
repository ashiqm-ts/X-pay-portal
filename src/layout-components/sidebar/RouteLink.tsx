import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddCardIcon from '@mui/icons-material/AddCard';
import PreviewIcon from '@mui/icons-material/Preview';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

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
    icon: <DashboardIcon />,
    to: '/dashboard',
  },
  {
    label: 'Routing',
    icon: <CreditCardIcon />,
    to: '/routing',
    children: [
      {
        name: 'Routing Configuration',
        to: '/routing/routing-configuration',
        icon: <AddCardIcon />,
      },
      {
        name: 'Routing Timer Configuration',
        to: '/routing/routing-timer-configuration',
        icon: <PreviewIcon />,
      },
      {
        name: 'Source Confiuration',
        to: '/routing/source-configuration',
        icon: <PreviewIcon />,
      },
      {
        name: 'Destination Configuration',
        to: '/routing/destination-configuration',
        icon: <PreviewIcon />,
      },
      {
        name: 'Issuer Configuration',
        to: '/routing/issuer-configuration',
        icon: <PreviewIcon />,
      },
    ],
  },
  {
    label: 'Routing Engine',
    icon: <CreditCardIcon />,
    to: '/routing-engine',
    children: [
      {
        name: 'BIN',
        to: '/routing-engine/bin',
        icon: <AddCardIcon />,
      },
      {
        name: 'Institution Priority',
        to: '/routing-engine/institution-priority',
        icon: <PreviewIcon />,
      },
       
    ],
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
    icon: <ManageAccountsIcon />,
    to: '/user-role-management',
    children: [
      {
        name: 'Users',
        to: '/user-role-management/users',
        icon: <PersonAddAltIcon />,
      },
      {
        name: 'Roles',
        to: '/user-role-management/roles',
        icon: <SupervisedUserCircleIcon />,
      },
      {
        name: 'User Group',
        to: '/user-role-management/user-group',
        icon: <GroupAddIcon />,
      },
    ],
  },
];

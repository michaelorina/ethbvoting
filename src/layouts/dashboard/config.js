import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PreviewIcon from '@mui/icons-material/Preview';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ErrorIcon from '@mui/icons-material/Error';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Vote',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <HowToVoteIcon/>
      </SvgIcon>
    )
  },
  {
    title: 'View Results',
    path: '/overview',
    icon: (
      <SvgIcon fontSize="small">
        <PreviewIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Reports',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <AnalyticsIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <AccountCircleIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsApplicationsIcon/>
      </SvgIcon>
    )
  },
  {
    title: 'Error',
    path: '/404',
    icon: (
      <SvgIcon fontSize="small">
        <ErrorIcon />
      </SvgIcon>
    )
  }
];

import React from 'react';
import { FolderIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { NavItem } from './SideBar';

// Define all navigation items as an array of NavItem objects
export const defaultNavItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <ComputerDesktopIcon className="w-6 h-6" />,
  },
  {
    label: 'Damage Reports',
    href: '/report',
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: 'View Reports',
    href: '/view',
    icon: <FolderIcon className="w-6 h-6" />,
  },
];

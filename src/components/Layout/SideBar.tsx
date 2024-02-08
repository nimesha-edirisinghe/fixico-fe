import React, { FC, useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { defaultNavItems } from './defaultNavItems';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

interface SidebarProps {
  open: boolean;
  navItems?: NavItem[];
  setOpen: (open: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
  open,
  navItems = defaultNavItems,
  setOpen,
}) => {
  // Create a ref to the sidebar container element
  const ref = useRef<HTMLDivElement>(null);

  // Hook to handle click events outside the sidebar and close it
  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <div
      className={classNames({
        'border-none': true,
        'flex flex-col justify-between': true,
        'bg-sky-800 text-zinc-50 w-20': true,
        'md:w-60 md:sticky md:top-16 md:z-0 top-0 z-20 fixed': true,
        'md:h-[calc(100vh_-_60px)] h-full w-[320px]': true,
        'transition-transform .3s ease-in-out md:-translate-x-0': true,
        '-translate-x-full ': !open, // Hide the sidebar when 'open' is false
      })}
      ref={ref}
    >
      <nav className="top-0 md:sticky md:top-16 pt-[50px]">
        {/* Navigation items */}
        <ul className="flex flex-col gap-2 py-2 space-y-8">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={
                    'text-indigo-100 hover:bg-indigo-900 flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2 cursor-pointer'
                  }
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

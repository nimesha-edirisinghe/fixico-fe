import React, { FC } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';

interface NavbarProps {
  onMenuButtonClick: () => void;
}

const Navbar: FC<NavbarProps> = ({ onMenuButtonClick }) => {
  return (
    <nav
      className={classNames({
        'bg-sky-800 text-zinc-500': true,
        'flex items-center': true,
        'w-full fixed z-10 px-4 shadow-sm h-16': true,
      })}
    >
      <div className="text-lg font-bold mt-[20px]">
        <Image
          src={`/assets/carLogo.png`}
          alt="My Image"
          width={50}
          height={50}
          className="pl-[10px]"
          color="red"
        />
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={onMenuButtonClick}>
        <Bars3Icon className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar;

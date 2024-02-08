import React, { useState, FC, ReactNode } from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
      <div className="relative flex flex-row ">
        <div className="mr-30">
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        </div>
        <div className=" h-[full] w-full bg-gray-200 pt-[75px] px-[10px] pb-[10px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

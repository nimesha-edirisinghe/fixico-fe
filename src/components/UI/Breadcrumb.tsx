import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define the shape of a single breadcrumb item
interface BreadcrumbItemI {
  label: string; // The label or text to be displayed for the breadcrumb item
  path: string; // The URL or path to navigate when the breadcrumb item is clicked
}

// Define the props for the Breadcrumb component
interface BreadcrumbProps {
  items: BreadcrumbItemI[]; // An array of breadcrumb items to be displayed
}

// Breadcrumb component declaration
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  // Access the Next.js router to get the current pathname
  const router = useRouter();
  const currentPath = router.pathname;

  // Filter the breadcrumb items based on the current path to determine which items to display
  const filteredItems = items.filter((item) => currentPath.includes(item.path));

  return (
    // Breadcrumb navigation container
    <nav>
      {/* Breadcrumb items list */}
      <ul className="flex space-x-2 font-semibold text-cyan-800">
        {/* Always show the "Home" breadcrumb item */}
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* Render the filtered breadcrumb items */}
        {filteredItems.map((item) => (
          <li key={item.path} className="flex items-center">
            {/* Render the ">" symbol for all but the first breadcrumb item */}
            {filteredItems.length > 0 && (
              <span className="text-gray-500 mr-[6px]">&gt;</span>
            )}
            {/* Render the breadcrumb item label as a link */}
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

import Card from '@/components/Widgets/Card';
import Breadcrumb from 'src/components/UI/Breadcrumb';
import { WrenchScrewdriverIcon, UsersIcon } from '@heroicons/react/24/outline';
import { GetStaticProps } from 'next';
import { CustomerDataI } from '@/interfaces/interfaces';
import { getJSONFiles } from '@/utils/jsonUtils';
import { FC } from 'react';
import { getUniqueNameCount } from '@/utils/commonUtils';

// Define the props for the Dashboard component
interface DashboardProps {
  customerDetails: CustomerDataI[]; // An array of customer details
}

// Dashboard component declaration
const Dashboard: FC<DashboardProps> = ({ customerDetails }) => {
  const breadcrumbItems = [{ label: '', path: '/' }]; // Breadcrumb items with a single home link

  return (
    <section className="flex-col w-full h-full p-[10px]">
      {/* Breadcrumb */}
      <div className="h-[50px] w-full">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* Dashboard Cards */}
      <div className="w-full h-[70vh] flex justify-center items-center space-x-[50px]">
        {/* Card for displaying the total number of damages */}
        <Card
          icon={<WrenchScrewdriverIcon className="w-16 h-16" />} // Icon for the card
          heading="Total Damages" // Heading for the card
          count={customerDetails?.length} // Total number of damages (length of customerDetails array)
          id="damage-card" // ID for the card
        />
        {/* Card for displaying the total number of unique customers */}
        <Card
          icon={<UsersIcon className="w-16 h-16" />} // Icon for the card
          heading="Total Customers" // Heading for the card
          count={customerDetails && getUniqueNameCount(customerDetails)} // Total number of unique customers using getUniqueNameCount utility function
          id="customer-card" // ID for the card
        />
      </div>
    </section>
  );
};

// Fetch customer details from JSON files during static site generation
export const getStaticProps: GetStaticProps<DashboardProps> = async () => {
  const customerDetails: CustomerDataI[] = getJSONFiles(); // Fetch customer details using the getJSONFiles utility function

  return {
    props: {
      customerDetails,
    },
  };
};

export default Dashboard;

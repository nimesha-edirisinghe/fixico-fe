import Breadcrumb from 'src/components/UI/Breadcrumb';
import { GetStaticProps } from 'next';
import { CustomerDataI } from '@/interfaces/interfaces';
import { getJSONFiles } from '@/utils/jsonUtils';
import { FC } from 'react';
import CustomerCard from '@/components/Widgets/CustomerCard';

// Define the props for the View component
interface ViewProps {
  customerDetails: CustomerDataI[]; // An array of customer details
}

// View component declaration
const View: FC<ViewProps> = ({ customerDetails }) => {
  const breadcrumbItems = [{ label: 'View', path: '/view' }];

  return (
    <section className="flex-col w-full h-full p-[10px] ">
      {/* Breadcrumb */}
      <div className="h-[50px] w-full   ">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      {/* Grid of CustomerCards */}
      <div className="w-full h-[77vh] grid grid-cols-4 gap-4 overflow-hidden overflow-y-auto">
        {customerDetails.map((detailObj, index) => (
          <CustomerCard key={index} customerDetails={detailObj} />
        ))}
      </div>
    </section>
  );
};

// Fetch customer details from JSON files during static site generation
export const getStaticProps: GetStaticProps<ViewProps> = async () => {
  const customerDetails: CustomerDataI[] = getJSONFiles(); // Fetch customer details using the getJSONFiles utility function

  return {
    props: {
      customerDetails,
    },
  };
};

export default View;

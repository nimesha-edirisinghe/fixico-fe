import SelectMenu, { Option } from '@/components/UI/SelectMenu';
import vehicleData from 'src/vehicles.json';
import React, { ReactNode } from 'react';
import CustomerInfoForm, { FormDataI } from '../CustomerInfoForm';

interface CustomerDetailsProps {
  formData: FormDataI;
  errors: FormDataI;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="h-full p-[15px]">
      <p className="text-[16px] pb-[10px] font-medium">Customer Details</p>
      <div className="h-auto">
        <CustomerInfoForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CustomerDetails;

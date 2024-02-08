import { CustomerDataI } from '@/interfaces/interfaces';
import React from 'react';
import Avatar from '../UI/Avatar';
import Image from 'next/image';

interface CustomerCardProps {
  customerDetails?: CustomerDataI;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customerDetails }) => {
  return (
    <main className="w-[300px] h-[350px] bg-white rounded-lg p-[20px] shadow-2xl ">
      <section className="h-[50px] w-full  flex  items-center  flex-row">
        <div className="h-full w-[60px] ">
          <Avatar name={customerDetails?.formData.name} />
        </div>
        <div className="w-full h-full pl-2 text-[14px] text-gray-500">
          <p>{customerDetails?.formData.name}</p>
          <p>{customerDetails?.imageDetails.updatedDate}</p>
        </div>
      </section>
      <section className="h-[150px] w-full  flex justify-center items-center ">
        <Image
          src={`/images/${customerDetails?.imageDetails.fileName}`}
          alt="My Image"
          width={250}
          height={150}
          id="image-preview"
        />
      </section>
      <section className="h-[100px] w-full text-[16px] font-normal  j text-gray-500 pt-[10px]">
        <p className="font-medium">
          Brand : <span className="font-normal">{customerDetails?.brand}</span>
        </p>
        <p className="font-medium">
          Model :{' '}
          <span className="font-normal">{customerDetails?.modelName}</span>
        </p>
        <p className="font-medium">
          Description :{' '}
          <span className="font-normal">
            {customerDetails?.imageDetails.description}
          </span>
        </p>
      </section>
    </main>
  );
};

export default CustomerCard;

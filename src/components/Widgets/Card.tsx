import React, { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  heading: string;
  count?: number;
  id: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, count = 0, id }) => {
  return (
    <main className="w-[320px] bg-white rounded-lg p-[20px] shadow-2xl ">
      <section className="h-[150px] w-full  flex justify-center items-center">
        {icon}
      </section>
      <section className="h-[80px] w-full text-[25px] font-semibold flex flex-row space-x-4 justify-center text-gray-500">
        <p id={id}>{heading}</p>
        <span className="text-cyan-900 ">{count}</span>
      </section>
    </main>
  );
};

export default Card;

import React, { FC } from 'react';

export interface FormDataI {
  name: string;
  email: string;
  address: string;
}

interface Props {
  formData: FormDataI;
  errors: FormDataI;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CustomerInfoForm: FC<Props> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="p-4 ">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter you name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
            errors.name ? 'border-red-500' : ''
          }`}
          required
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
            errors.email ? 'border-red-500' : ''
          }`}
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block mb-2 font-medium">
          Address
        </label>
        <input
          type="address"
          placeholder="Enter you Address"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${
            errors.address ? 'border-red-500' : ''
          }`}
          required
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
    </form>
  );
};

export default CustomerInfoForm;

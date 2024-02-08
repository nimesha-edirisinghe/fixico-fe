import React, { useCallback } from 'react';
import { Option } from '../UI/SelectMenu';
import { FormDataI } from './CustomerInfoForm';
import DisabledOverlay from './DisabledOverlay';
import VehicleInfo from './Steps/VehicleInfo';
import CustomerDetails from './Steps/CustomerDetails';
import UploadImage from './Steps/UploadImage';
import Stepper from '../UI/Stepper';

interface ModalContainerProps {
  selectBrandHandler: (option: Option | undefined) => void;
  selectModelHandler: (option: Option | undefined) => void;
  onChangeDescHandler: (name: string) => void;
  carModels: Option[];
  formData: FormDataI;
  errors: FormDataI;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fileHandler: (name: string) => void;
  isCompletedVehicleForm: boolean;
  isCompletedCusForm: boolean;
  description: string;
  currentStep: number;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  selectBrandHandler,
  selectModelHandler,
  onChangeDescHandler,
  carModels,
  formData,
  errors,
  handleChange,
  handleSubmit,
  fileHandler,
  description,
  currentStep,
}) => {
  const renderStep = useCallback(() => {
    if (currentStep === 0) {
      return (
        <VehicleInfo
          carModels={carModels}
          selectBrandHandler={selectBrandHandler}
          selectModelHandler={selectModelHandler}
        />
      );
    } else if (currentStep === 1) {
      return (
        <CustomerDetails
          errors={errors}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return (
        <UploadImage
          description={description}
          fileHandler={fileHandler}
          onChangeDescHandler={onChangeDescHandler}
        />
      );
    }
  }, [
    currentStep,
    carModels,
    selectBrandHandler,
    errors,
    formData,
    handleChange,
    handleSubmit,
  ]);
  return (
    <div className="h-[510px] w-[800px] grid grid-cols-3 gap-4 ">
      {renderStep()}
    </div>
  );
};

export default ModalContainer;

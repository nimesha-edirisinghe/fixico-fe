import SelectMenu, { Option } from '@/components/UI/SelectMenu';
import vehicleData from 'src/vehicles.json';
import React, { ReactNode } from 'react';

interface VehicleInfoProps {
  selectBrandHandler: (option: Option | undefined) => void;
  selectModelHandler: (option: Option | undefined) => void;
  carModels: Option[];
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({
  selectBrandHandler,
  selectModelHandler,
  carModels,
}) => {
  return (
    <div className="h-full p-[15px]">
      <p className="text-[16px] pb-[10px] font-medium">Vehicle Information</p>
      <div className="h-auto space-y-[22px] px-[10px]">
        <div>
          <label
            htmlFor="brand"
            className="block font-medium mt-[16px] mb-[10px]"
          >
            Brand
          </label>
          <SelectMenu
            options={vehicleData}
            selectHandler={selectBrandHandler}
            id="brand-selector"
          />
        </div>
        <div>
          <label htmlFor="model" className="block mb-2 font-medium">
            Model
          </label>
          <SelectMenu
            options={carModels || []}
            id="model-selector"
            selectHandler={selectModelHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;

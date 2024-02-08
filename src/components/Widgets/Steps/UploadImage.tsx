import SelectMenu, { Option } from '@/components/UI/SelectMenu';
import vehicleData from 'src/vehicles.json';
import React, { ReactNode } from 'react';
import ImageUploader from '../ImageUploader';
import TextAreaWithLabel from '@/components/UI/TextAreaWithLabel';

interface UploadImageProps {
  fileHandler: (name: string) => void;
  onChangeDescHandler: (name: string) => void;
  description: string;
}

const UploadImage: React.FC<UploadImageProps> = ({
  fileHandler,
  onChangeDescHandler,
  description,
}) => {
  return (
    <div className="h-full p-[15px]">
      <p className="text-[16px] pb-[10px] font-medium">
        Upload and Description
      </p>
      <div className="h-auto">
        <div className="space-y-6">
          <h1>Vehicle Image</h1>
          <ImageUploader fileHandler={fileHandler} />
          <TextAreaWithLabel
            label="Damage Description"
            value={description}
            onChange={onChangeDescHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;

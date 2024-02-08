import Image from 'next/image';
import { FC, useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

interface Props {
  fileHandler: (name: string) => void;
}

const ImageUploader: FC<Props> = ({ fileHandler }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  // Function to handle file upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        setFileName(file.name);
        fileHandler(file.name);

        if (data?.imageUrl) {
          setUploadedImage(data.imageUrl);
        }
      } catch (error) {
        console.error('Error uploading the image', error);
      }
    }
  };

  return (
    <div className="flex flex-col space-y-9">
      <div className="h-[150px] w-full flex justify-center border-dashed border-2 border-gray-500-300">
        {fileName && (
          <Image
            src={`/images/${fileName}`}
            alt="My Image"
            width={250}
            height={150}
            id="image-preview"
          />
        )}
      </div>
      <div className="flex justify-center w-full">
        <label
          htmlFor="fileInput"
          className="inline-flex items-center px-3 py-2 text-white bg-cyan-800 rounded-md cursor-pointer text-[12px]"
        >
          <ArrowUpTrayIcon className="w-5 h-5 mr-2" />
          Upload File
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploader;

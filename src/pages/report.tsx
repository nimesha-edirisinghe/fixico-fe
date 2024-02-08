import Button from '@/components/UI/Button';
import Breadcrumb from 'src/components/UI/Breadcrumb';
import {
  PlusCircleIcon,
  ArrowPathRoundedSquareIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Table from '@/components/UI/Table';
import { FC, useCallback, useEffect, useState } from 'react';
import Modal from '@/components/UI/Modal';
import ModalContainer from '@/components/Widgets/ModalContainer';
import { Option } from '@/components/UI/SelectMenu';
import { GetStaticProps } from 'next';
import { CustomerDataI, TableHeaderI } from '@/interfaces/interfaces';
import { getJSONFiles } from '@/utils/jsonUtils';
import { areAllFieldsFilled } from '@/utils/commonUtils';

// Define the props for the Report component
interface ReportProps {
  customerDetails: CustomerDataI[]; // An array of customer details
}
const Report: FC<ReportProps> = ({ customerDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brand, setBrand] = useState<Option | any>(null);
  const [model, setModel] = useState<Option[] | any>([]);
  const [modelName, setModelName] = useState<string | undefined>('');
  const [fileName, setFileName] = useState('');
  const [description, setDescription] = useState('');
  const [step, setStep] = useState(0);

  useEffect(() => {
    const models = brand?.models;
    setModel(models);
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
  });

  const headers: TableHeaderI[] = [
    { key: 'brandName', label: 'Brand Name' },
    { key: 'model', label: 'Model Name' },
    { key: 'image', label: 'Image' },
    { key: 'customer', label: 'Customer Name' },
    { key: 'email', label: 'Email' },
    { key: 'address', label: 'Address' },
    { key: 'date', label: 'Updated Date' },
    { key: 'status', label: 'Status' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', address: '' };

    if (formData.name.trim() === '') {
      newErrors.name = 'name is required';
    }

    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.address.trim() === '') {
      newErrors.address = 'name is required';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  const selectBrandHandler = (option: Option | undefined) => {
    setBrand(option);
  };

  const selectModelHandler = (option: Option | undefined) => {
    setModelName(option?.name);
  };
  const handleButtonClick = () => {
    setIsModalOpen(true);
    setStep(0);
    setFormData({
      name: '',
      email: '',
      address: '',
    });
    setDescription('');
    setModel([]);
  };
  const breadcrumbItems = [{ label: 'Report', path: '/report' }];

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fileHandler = (fileName: string) => {
    setFileName(fileName);
  };

  const onSubmitHandler = async () => {
    console.log('calling');
    if (validateForm()) {
      const data: CustomerDataI = {
        brand: brand?.name,
        modelName: modelName,
        formData: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
        },
        imageDetails: {
          fileName: fileName,
          description: description,
          updatedDate: new Date().toISOString().slice(0, 10),
        },
      };
      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (res.ok) {
          const result = await res.json();
          // Refresh the page
          window.location.reload();
        } else {
          console.error('POST request failed:', res.status);
        }
        setIsModalOpen(false);
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    }
  };

  const onClickResetHandler = () => {
    setFormData({
      name: '',
      email: '',
      address: '',
    });
    setModel([]);
    setBrand([]);
    setDescription('');
  };

  const onChangeDescHandler = (value: string) => {
    setDescription(value);
  };

  const nextHandler = (step: number) => {
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
  };
  const prevHandler = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const renderFooter = useCallback(() => {
    return (
      <div className="flex flex-row space-x-4 ">
        <Button
          id="reset-btn"
          variant="secondary"
          onClick={prevHandler}
          icon={<ArrowLeftIcon className="w-5 h-5 mt-[2px] " />}
        >
          Previous
        </Button>
        <Button
          id="submit-btn"
          variant="primary"
          onClick={step === 2 ? onSubmitHandler : () => nextHandler(step)}
          icon={<ArrowRightIcon className="w-5 h-5 mt-[2px]" />}
        >
          {step === 2 ? `Submit` : 'Next'}
        </Button>
      </div>
    );
  }, [
    isModalOpen,
    brand,
    modelName,
    formData,
    fileName,
    description,
    step,
    setStep,
  ]);
  return (
    <section className="flex-col w-full h-full p-[10px]">
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        header={<p className="font-bold text-[22px]">Damage Report</p>}
        footer={renderFooter()}
      >
        <ModalContainer
          selectBrandHandler={selectBrandHandler}
          selectModelHandler={selectModelHandler}
          carModels={model}
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fileHandler={fileHandler}
          isCompletedVehicleForm={modelName ? true : false}
          isCompletedCusForm={!areAllFieldsFilled(formData)}
          onChangeDescHandler={onChangeDescHandler}
          description={description}
          currentStep={step}
        />
      </Modal>
      <div className="h-[40px] w-full  flex flex-row justify-between">
        <Breadcrumb items={breadcrumbItems} />
        <Button
          variant="primary"
          onClick={handleButtonClick}
          icon={<PlusCircleIcon className="w-5 h-5 mt-[2px]" />}
          id="new-report"
        >
          New Report
        </Button>
      </div>
      <div className="h-[75vh] bg-white shadow-xl  rounded-md overflow-hidden overflow-y-auto mt-[20px]">
        <Table data={customerDetails} headers={headers} />
      </div>
    </section>
  );
};

// Fetch customer details from JSON files during static site generation
export const getStaticProps: GetStaticProps<ReportProps> = async () => {
  const customerDetails: CustomerDataI[] = getJSONFiles(); // Fetch customer details using the getJSONFiles utility function

  return {
    props: {
      customerDetails,
    },
  };
};

export default Report;

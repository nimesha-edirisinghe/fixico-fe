export interface FormDataI {
  name: string;
  email: string;
  address: string;
}

export interface ImageDetailsI {
  fileName: any;
  description?: string;
  updatedDate?: string;
}

export interface CustomerDataI {
  brand: string;
  modelName: string | undefined;
  formData: FormDataI;
  imageDetails: ImageDetailsI;
}

export interface TableHeaderI {
  key: string;
  label: string;
}

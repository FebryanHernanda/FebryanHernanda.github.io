import { formDataType } from "@/assets/molecules/DialogContact/DialogContact.type";

export type DataContact = {
  Fullname: string;
  Email: string;
  PhoneNumber: string;
  ProjectDetails: string;
};

export type ValidationErrors = {
  Email?: string;
  PhoneNumber?: string;
};

export type SubmitProps = {
  OnSave: (data: formDataType) => void;
};

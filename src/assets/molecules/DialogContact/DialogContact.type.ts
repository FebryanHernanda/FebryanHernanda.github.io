export type TriggerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialMessage?: string;
};

export type formDataType = {
  to_name: string;
  from_name: string;
  email: string;
  phone_number: string;
  message: string;
};

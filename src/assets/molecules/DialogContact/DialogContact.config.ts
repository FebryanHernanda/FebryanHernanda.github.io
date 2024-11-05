const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const styleConfig = {
  wrapper: "flex flex-col w-full p-10",
  title: "text-center text-3xl",
  description: "text-center text-[17px]",
  loading: "w-full h-10",
  errorMessages: "text-red-500 text-center",
  showMessage: "text-center",
};

export { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, styleConfig };

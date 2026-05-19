import { useState } from "react";

import { Button } from "@/components/ui/button";
import { DataContact, SubmitProps, ValidationErrors } from "./FormContact.type";
import { styleConfig } from "./FormContact.config";

const FormContact = (props: SubmitProps) => {
  const { OnSave, initialMessage } = props;

  const [inputs, setInputs] = useState<DataContact>({
    ProjectDetails: initialMessage || "",
  } as DataContact);
  const [errors, setErrors] = useState({} as ValidationErrors);

  const validationErrors = {} as DataContact;

  /* handleInputValue Function */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  /* HandleSubmit Function */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      to_name: "Febryan Hernanda Mashudi",
      from_name: inputs.Fullname,
      email: inputs.Email,
      phone_number: inputs.PhoneNumber,
      message: inputs.ProjectDetails,
    };

    /* Email & Phone Validation */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.Email) {
      validationErrors.Email = "Email is required";
    } else if (!emailRegex.test(inputs.Email)) {
      validationErrors.Email = "Please enter a valid email address";
    }

    if (inputs.PhoneNumber && inputs.PhoneNumber.length < 8) {
      validationErrors.PhoneNumber = "Phone number must be at least 8 digits";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      OnSave(formData);
      setInputs({} as DataContact);
    }
  };

  return (
    <form
      id="formContact"
      onSubmit={handleSubmit}
      className={styleConfig.formStyle}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="Fullname" className={styleConfig.label}>
          Full Name
        </label>
        <input
          type="text"
          placeholder="Enter your name (e.g. Febryan Hernanda)"
          name="Fullname"
          value={inputs.Fullname || ""}
          onChange={handleChange}
          required
          className={styleConfig.inputField}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <label htmlFor="Email" className={styleConfig.label}>
            Email
          </label>
          {errors.Email && (
            <p className={styleConfig.errorMessage}>{errors.Email}</p>
          )}
        </div>
        <input
          type="email"
          placeholder="Enter your email address (e.g. febryan@gmail.com)"
          name="Email"
          value={inputs.Email || ""}
          onChange={handleChange}
          required
          className={styleConfig.inputField}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <label htmlFor="PhoneNumber" className={styleConfig.label}>
            Whatsapp Number
          </label>
          {errors.PhoneNumber && (
            <p className={styleConfig.errorMessage}>{errors.PhoneNumber}</p>
          )}
        </div>
        <input
          type="tel"
          placeholder="Enter your whatsapp number (e.g. 081394566303)"
          name="PhoneNumber"
          value={inputs.PhoneNumber || ""}
          onChange={handleChange}
          required
          className={styleConfig.inputField}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="ProjectDetails" className={styleConfig.label}>
          Project Details
        </label>
        <textarea
          placeholder="Briefly describe your project details (e.g. personal website, e-commerce, custom app)"
          rows={4}
          name="ProjectDetails"
          value={inputs.ProjectDetails || ""}
          onChange={handleChange}
          required
          className={`${styleConfig.inputField} resize-none min-h-[100px]`}
        />
      </div>

      <Button type="submit" className={styleConfig.buttonStyle}>
        Submit
      </Button>
    </form>
  );
};

export default FormContact;

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { DataContact, SubmitProps, ValidationErrors } from "./FormContact.type";
import { styleConfig } from "./FormContact.config";

const FormContact = (props: SubmitProps) => {
  const { OnSave } = props;

  const [inputs, setInputs] = useState({} as DataContact);
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

  /* HandleSubmit Funciton */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      to_name: "Febryan Hernanda Mashudi",
      from_name: inputs.Fullname,
      email: inputs.Email,
      phone_number: inputs.PhoneNumber,
      message: inputs.ProjectDetails,
    };

    /* Email Validation */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.Email) {
      validationErrors.Email = "Email must be input";
    } else if (!emailRegex.test(inputs.Email)) {
      validationErrors.Email = "Format email not valid !";
    }

    if (inputs.PhoneNumber.toString().length < 8) {
      validationErrors.PhoneNumber = "Phone Number must have at least 8 digit";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      OnSave(formData);
    }

    setInputs({} as DataContact);
  };

  return (
    <form
      id="formContact"
      onSubmit={handleSubmit}
      className={styleConfig.formStyle}
    >
      <label htmlFor="Fullname">Full Name </label>
      <input
        type="text"
        placeholder="Enter your name (e.g. Febryan Hernanda)"
        name="Fullname"
        value={inputs.Fullname || ""}
        onChange={handleChange}
        required
        className={styleConfig.inputField}
      />
      <label htmlFor="Email">Email</label>
      {errors.Email && (
        <p className={styleConfig.errorMessage}>{errors.Email}</p>
      )}
      <input
        type="email"
        placeholder="Enter your email address (e.g. Febryan@gmail.com)"
        name="Email"
        value={inputs.Email || ""}
        onChange={handleChange}
        required
        className={styleConfig.inputField}
      />
      <label htmlFor="Whatsapp Number">Whatsapp Number</label>
      {errors.PhoneNumber && (
        <p className={styleConfig.errorMessage}>{errors.PhoneNumber}</p>
      )}
      <input
        type="number"
        placeholder="Enter your whatsapp number (e.g. 08123456789)"
        name="PhoneNumber"
        value={inputs.PhoneNumber || ""}
        onChange={handleChange}
        required
        className={styleConfig.inputField}
      />
      <label htmlFor="Project Details">Project Details</label>
      <textarea
        placeholder="Briefly describe your short project details (e.g. personal website, mobile app, etc.)"
        rows={5}
        name="ProjectDetails"
        value={inputs.ProjectDetails || ""}
        onChange={handleChange}
        required
        className={styleConfig.inputField}
      />
      <Button type="submit" className={styleConfig.buttonStyle}>
        Submit
      </Button>
    </form>
  );
};
export default FormContact;

import React, { useState } from "react";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  required?: boolean;
  placeholder?: string;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => void;
  submitLabel?: string;
}

export const Form: React.FC<FormProps> = ({ fields, onSubmit, submitLabel = "Submit" }) => {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            placeholder={field.placeholder}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
};

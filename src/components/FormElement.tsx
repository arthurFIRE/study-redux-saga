import React from 'react';

export interface FormElementProps {
  label: string;
  forId: string;
  children: React.ReactNode;
}

const FormElement: React.FC<FormElementProps> = ({ label, forId, children }: FormElementProps) => (
  <div className="form-element">
    <label htmlFor={forId}>{label}</label>
    <div>{children}</div>
  </div>
);

export default FormElement;

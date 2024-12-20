import React from "react";
import { Field, useField } from "formik";

const TextField = ({ label, type, name, placeholder }) => {
  const [field, meta] = useField({ type, name, placeholder });
  const isInvalid = meta.error && meta.touched;

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}

      <Field {...field} type={type} name={name} placeholder={placeholder} />

      {isInvalid && (
        <div>
          <p>{meta.error}</p>
        </div>
      )}
    </div>
  );
};

export default TextField;

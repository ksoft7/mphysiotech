import React from "react";
import { Field, useField } from "formik";
import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { IoEye } from "react-icons/io5";

const PasswordField = ({ label, type, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField({ type, name, placeholder });
  const isInvalid = meta.error && meta.touched;

  return (
    <section>
      {label && <label htmlFor={name}>{label}</label>}

      <div>
        <Field
          {...field}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          id={name}
          style={{
            border: isInvalid ? "1px solid red" : "1px solid #ccc",
          }}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <BiSolidHide /> : <IoEye />}
          </button>
        )}
      </div>
      {isInvalid && (
        <div>
          <p>{meta.error}</p>
        </div>
      )}
    </section>
  );
};

export default PasswordField;

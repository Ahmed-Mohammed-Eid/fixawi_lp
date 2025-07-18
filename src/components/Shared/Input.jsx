import React from "react";
import classes from "./Input.module.css";
import ErrorMessage from "./ErrorMessage";

const Input = ({ label, placeholder, register, errors, required }) => {

    const onChange = (e) => {
        register.onChange(e);
    }

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={label} className={classes.label}>
                {label}
                {required && <span className={classes.required}>*</span>}
            </label>
            <input
                {...register}
                placeholder={placeholder}
                className={classes.input}
                id={label}
                onChange={onChange}
                // required={required}
            />
            {errors && <ErrorMessage message={errors.message} />}
        </div>
    );
};

export default Input;

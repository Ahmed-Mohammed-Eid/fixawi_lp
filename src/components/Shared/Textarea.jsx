import React from "react";
import classes from "./Textarea.module.css";
import ErrorMessage from "./ErrorMessage";

const Textarea = ({ label, placeholder, register, errors, required }) => {

    const onChange = (e) => {
        register.onChange(e);
    }

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={label} className={classes.label}>
                {label}
                {required && <span className={classes.required}>*</span>}
            </label>
            <textarea
                {...register}
                placeholder={placeholder}
                className={classes.textarea}
                id={label}
                onChange={onChange}
                // required={required}
            />
            {errors && <ErrorMessage message={errors.message} />}
        </div>
    );
};

export default Textarea;

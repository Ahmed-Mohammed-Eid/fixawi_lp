import React from "react";
import classes from "./Checkbox.module.css";

const CheckboxNormal = ({
    label,
    register,
}) => {
    return (
        <div className={classes.inputContainer}>
            <label htmlFor={label} className={classes.label}>
                {label}
            </label>
            <input
                className={classes.input}
                id={label}
                type="checkbox"
                {...register}
                
            />
        </div>
    );
};

export default CheckboxNormal;

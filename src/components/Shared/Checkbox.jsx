import React from "react";
import classes from "./Checkbox.module.css";

const Checkbox = ({
    label,
    value,
    name,
    selectedValue = [],
    setValue,
}) => {
    const isChecked = selectedValue?.includes(value);

    const handleChange = () => {
        if (isChecked) {
            setValue(name, selectedValue.filter((item) => item !== value));
        } else {
            setValue(name, [...selectedValue, value]);
        }
    };

    return (
        <div className={classes.inputContainer}>
            <label htmlFor={label} className={classes.label}>
                {label}
            </label>
            <input
                className={classes.input}
                id={label}
                type="checkbox"
                value={value || ""}
                checked={isChecked}
                onChange={handleChange}
            />
        </div>
    );
};

export default Checkbox;

import React from "react";

const SelectComponent = (selectProps) => {
    const {name, handleChange, options} = selectProps;

    return (
        <select
            name={name}
            onChange={handleChange}
            placeholder="Select"
        >
            {
                options.map(option => {
                    return (
                        <option
                            key={option.id}
                            value={option.id}> {option.name}</option>
                    )
                })
            }
        </select>
    )
};

export default SelectComponent;
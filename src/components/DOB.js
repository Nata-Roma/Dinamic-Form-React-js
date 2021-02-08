import { useState } from "react";

const DOB = ({ id, type, required = false, setOutput }) => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    let maxDate = new Date();
    const minAge = 18;
    maxDate.setFullYear(maxDate.getFullYear()-minAge);

    return (
        <div className='inner-container'>
            <label htmlFor={id} className='label'>
            Date of your birthday (your age should be over 18):
                </label>
            <input
                type={type}
                aria-label={id}
                name={id}
                id={id}
                value={dateOfBirth}
                max={maxDate.toJSON().slice(0, 10)}
                required={required}
                onChange={(e) => {setDateOfBirth(e.target.value);
                setOutput(e.target);
                }}
                className='input'
            />
        </div>
    )
};

export default DOB;

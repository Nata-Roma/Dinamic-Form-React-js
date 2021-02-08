import { useRef, useState } from "react";

const DOB = ({ id, type, required = false, setOutput }) => {
    const [dateOfBirth, setDateOfBirth] = useState('');
    const dateRef = useRef();

    let maxDate = new Date();
    const minAge = 18;
    maxDate.setFullYear(maxDate.getFullYear()-minAge);

    const handleDateChange = (e) => {
        const date = dateRef.current;
        if(!date.validity.valid) {
            date.setCustomValidity('Please choose your date of birth');
        } else if(date.validity.valid) {
            date.setCustomValidity('');
        }
        setDateOfBirth(e.target.value)
    }

    return (
        <div className='inner-container'>
            <label htmlFor={id} className='label'>
            Date of your birthday (your age should be over 18):
                </label>
            <input
                type={type}
                name={id}
                id={id}
                value={dateOfBirth}
                max={maxDate.toJSON().slice(0, 10)}
                required={required}
                onChange={(e) => { handleDateChange(e);
                setOutput(e.target);
                }}
                className='input'
                ref={dateRef}
            />
        </div>
    )
};

export default DOB;

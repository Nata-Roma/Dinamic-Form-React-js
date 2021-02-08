import { useEffect, useRef, useState } from "react";

const Name = ({ id, type, required = false, label, setOutput }) => {
    const [userName, setUserName] = useState('');
    const inputRef = useRef();
    
    
    const handleInputChange = (e) => {
        const input = inputRef.current;
        if(input.validity.patternMismatch) {
            input.setCustomValidity('Please enter your first and last name');
        } else if(!input.validity.patternMismatch) {
            input.setCustomValidity('');
        }
        setUserName(e.target.value);

    }

    return (
        <div className='inner-container'>
            <label htmlFor={id} className='label'>
                Your first and last name:
                </label>
            <input
                type={type}
                name={id}
                id={id}
                pattern='\S+ \S+.*'
                value={userName}
                required={required}
                placeholder={label}
                title='Please enter your first and last name'
                onChange={(e) => {
                    handleInputChange(e);
                    setOutput(e.target);
                    }
                }
                className='input'
                data-testid="inputName"
                ref={inputRef}
            />
        </div>
    )
};

export default Name;
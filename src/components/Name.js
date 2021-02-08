import { useEffect, useState } from "react";

const Name = ({ id, type, required = false, label, setOutput }) => {
    const [userName, setUserName] = useState('');

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
                onChange={(e) => {
                    setUserName(e.target.value);
                    setOutput(e.target);
                    }
                }
                className='input'
                data-testid="inputName"
            />
        </div>
    )
};

export default Name;
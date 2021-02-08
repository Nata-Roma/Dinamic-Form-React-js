import { useState } from "react";

const Gender = ({ id, required = false, setOutput }) => {
    const [gender, setGender] = useState('');

    return (
        <div className='inner-container'>
                <label htmlFor={id} className='label'>
                    Gender:
                </label>
                <select 
                    id={id} 
                    name={id} 
                    value={gender}
                    required={required}
                    onChange={(e) => {
                        setGender(e.target.value);
                        setOutput(e.target);
                    }}
                    className='input'
                >
                    <option value='0'>
                        ---
                    </option>
                    <option value='1'>
                        Male
                    </option>
                    <option value='2'>
                        Female
                    </option>
                </select>

            </div>
    )
};

export default Gender;
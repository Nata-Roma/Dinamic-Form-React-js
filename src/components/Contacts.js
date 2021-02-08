import { useState } from "react";

const Contacts = (props) => {
    const [mobile, setMobile] = useState('');
    const [home, setHome] = useState('');
    const { setOutput } = props;

    return (
        <div>
            {props.options.map((option) => {
                const { id, type, label, required = false } = option;
                return (
                    <div key={id} className='inner-container'>
                        <label htmlFor={id} className='label'>
                            {label} phone
                        </label>
                        
                            <input
                                type={type}
                                pattern='\d+'
                                required={required}
                                name={id}
                                placeholder={label}
                                value={id === 'mobile' ? mobile: home}
                                onChange={(e) => {
                                    id === 'mobile' 
                                    ? setMobile(e.target.value)
                                    : setHome(e.target.value);
                                    setOutput(e.target);
                                }}
                                className='input'
                            />
                    </div>
                )
            } 
            )}
        </div>
    )
};

export default Contacts;
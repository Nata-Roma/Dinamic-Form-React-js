import { useState } from "react";

const Guardian = (props) => {
    const [isGuardian, setIsGuardian] = useState(false);
    const [guardianName, setGuardianName] = useState('');
    const [guardianContact, setGuardianContact] = useState('');

    const {id, options, setOutput} = props;
    
    const handleChecked = () => {
        setIsGuardian(!isGuardian);
        if(!isGuardian) {
            setGuardianName('');
            setGuardianContact('');
        }
    }

    return (
        <div>
                <label htmlFor='guardian' className='label'>
                    Require guardian consent:
                </label>
                <input
                    type='checkbox'
                    id={id}
                    name={id}
                    checked={isGuardian}
                    onChange={handleChecked}
                />
                {isGuardian && options.map((option) => {
                    const { id, type, required = false } = option;
                    return (
                    <div key={id} className='inner-container'>
                        <input
                            type={type}
                            name={id}
                            value={id === 'guardianName' ? guardianName : guardianContact}
                            placeholder={id}
                            required={required}
                            onChange={(e) => {
                                id === 'guardianName' 
                                    ? setGuardianName(e.target.value)
                                    : setGuardianContact(e.target.value);;
                                setOutput(e.target);
                            }}
                            required={isGuardian}
                            className='input guardian'
                        />
                    </div>
                )}
                ) }
            </div>
    )
};

export default Guardian;
import React, { useState } from 'react';
import Contacts from './components/Contacts';
import DOB from './components/DOB';
import Gender from './components/Gender';
import Guardian from './components/Guardian';
import Name from './components/Name';

const FormComponent = ({ input }) => {

    const [output, setOutput] = useState({});

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const result = {
            ...output
        };
        setOutput({});
         alert(`Form output: ${JSON.stringify(result)}`);
        
    }

    const chooseComponent = (id) => {
        switch (id) {
            case 'name':
                return Name;
            case 'dob':
                return DOB;
            case 'gender':
                return Gender;
            case 'contacts':
                return Contacts;
            case 'guardian':
                return Guardian;
            default:
                return;
        }
    };

    const handleOutput = (outputValue) => {
        const { name, value } = outputValue;

        let newState = {};
        switch (name) {
            case 'mobile':
                newState = { ...output, contact: { ...output.contact, [name]: value } };
                break;
            case 'home':
                newState = { ...output, contact: { ...output.contact, [name]: value } };
                break;
            case 'guardianName':
                newState = { ...output, guardian: { ...output.guardian, [name]: value } };
                break;
            case 'guardianContact':
                newState = { ...output, guardian: { ...output.guardian, [name]: value } };
                break;
            default:
                newState = { ...output, [name]: value };
                break;

        }
        setOutput(newState);
    }

    return (
        <div>
        <h2>Dinamic Form</h2>
        <p>Please enter your data</p>
        <form onSubmit={handleOnSubmit} className='form'>
            {input.map((el) => {
                const CurrentComponent = chooseComponent(el.id);
                return (
                    <CurrentComponent
                        {...el}
                        setOutput={handleOutput}
                        key={el.id}
                    />
                )
            }
            )}
            <button className='submit' aria-label='button'>Submit</button>
        </form>
        </div>
    )
};





export default FormComponent;

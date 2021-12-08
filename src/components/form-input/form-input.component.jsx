import React from "react";

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        <input  
            className='form-input'
            name="email"
            type="email"
            onChange={handleChange} 
            value={otherProps.value} 
            required />
        { 
            label ?  
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
            
    </div>
)

export default FormInput;
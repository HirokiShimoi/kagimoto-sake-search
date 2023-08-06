// CheckboxGroup.tsx
import React, { Dispatch, SetStateAction } from 'react';
import handleCheckboxChange from './CheckboxChange'; // CheckboxChange.tsxからhandleCheckboxChange関数をインポート

type CheckboxGroupProps = {
    values: string[];
    setter: Dispatch<SetStateAction<string[]>>;
    options: string[];
    register: any;
    name: string;
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({values, setter, options,register, name}) => {
    const handleChange = handleCheckboxChange(setter); // setterを渡してhandleChange関数を生成

    return (
        <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
            {options.map((option, index) => {
                return (
                    <li className="category-selecter flex-fill" key={option}>
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value={option} 
                            onChange={handleChange} 
                            checked={values.includes(option)}
                            {...register(`${name}[${index}]`)} // このように変更
                        />
                                        
                        <div className="info">
                            <label htmlFor={option}>{option}</label>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default CheckboxGroup;



import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

type CheckboxGroupProps = {
    values: string[];
    setter: Dispatch<SetStateAction<string[]>>;
    options: string[];
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({values, setter, options}) => {
    const handleCheckboxChange = (setter: Dispatch<SetStateAction<string[]>>, state: string[]) => 
    (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setter((prevState: string[]) => {
            if (checked) {
                return [...prevState, value]
            } else {
                return prevState.filter((item: string) => item !== value);
            }
        });
    };

    return (
        <ul className="input-wrapper d-flex flex-row flex-wrap list-unstyled">
            {options.map(option => {
                return (
                    <li className="category-selecter flex-fill" key={option}>
                        <div className="check-box">
                            <input className="form-check-input" type="checkbox" value={option} onChange={handleCheckboxChange(setter, values)} checked={values.includes(option)}/>
                        </div>
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

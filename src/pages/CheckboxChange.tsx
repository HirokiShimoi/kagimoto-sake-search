// CheckboxChange.tsx
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handleCheckboxChange = (setter: Dispatch<SetStateAction<string[]>>) => 
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

export default handleCheckboxChange;

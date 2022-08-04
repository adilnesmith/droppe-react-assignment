import React, { FC } from 'react';
import { InputProps } from 'lib/types/common'
const Input: FC<InputProps> = ({ placeholder, defaultValue, className, ref }) => {
    return (
        <input
            ref={ref}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={className}
        />
    )
}
export default Input;
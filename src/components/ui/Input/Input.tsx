import React, { FC } from 'react';
import { InputProps } from 'lib/types/common'
const Input: FC<InputProps> = ({ placeholder, defaultValue, className, inputRef }) => {
    return (
        <input
            ref={inputRef as any}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={className}
        />
    )
}
export default Input;
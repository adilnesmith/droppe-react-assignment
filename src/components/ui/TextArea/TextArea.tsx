import React, { FC } from 'react';
import { TextAreaProps } from 'lib/types/common'
const TextArea: FC<TextAreaProps> = ({ placeholder, defaultValue, className, inputRef }) => {
    return (
        <textarea
            ref={inputRef as any}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className={className}
        />
    )
}
export default TextArea;
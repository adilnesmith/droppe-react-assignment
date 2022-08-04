import React, { FC } from 'react';
import { LableProps } from 'lib/types/common'
const Label: FC<LableProps> = ({ className, children }) => {
    return (
        <label
            className={className}
        >
            {children}
        </label>
    )
}
export default Label;
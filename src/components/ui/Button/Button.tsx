import React from 'react'
import styles from "./Button.module.scss";
import { ButtonProps } from 'lib/types/common'

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.cta} onClick={onClick}>
    {children}
  </button>
);
export default Button
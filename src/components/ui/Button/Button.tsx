import React, {
  ButtonHTMLAttributes,
} from 'react'
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  onClick?: () => void;
  className?: string
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  width?: string | number
  loading?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles.cta} onClick={onClick}>
    {children}
  </button>
);
export default Button
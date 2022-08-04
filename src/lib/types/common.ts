export interface ButtonProps {
    children: any;
    onClick?: () => void;

}
export interface InputProps {
    inputRef: any;
    placeholder: string
    defaultValue: string
    className: string
}
export interface LableProps {
    children: string;
    className: string

}
export type FormProps = {
    "on-submit": (
        payload: {
            title: string;
            description: string;
            price: string
        }
    ) => void;
}

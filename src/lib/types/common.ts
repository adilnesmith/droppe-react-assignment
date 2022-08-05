export interface ButtonProps {
    children: any
    onClick?: () => void

}
export interface InputProps {
    inputRef: any
    placeholder: string
    defaultValue: string
    className: string
}
export interface TextAreaProps {
    inputRef: any
    placeholder: string
    defaultValue: string
    className: string
}
export interface LableProps {
    children: string
    className: string

}
export type FormProps = {
    "on-submit": (
        payload: {
            title: string
            description: string
            price: string
        }
    ) => void
}
export type ProductProps = {
    index: number
    product: {
        title: string
        description: string
        price: number
        isFavorite: boolean
        rating: {
            rate: number
            count: number
        }
    }
    onFav: (title: string) => void
}

export type PostsProps = {
    products: any
    onFav: (title: string) => void
}
export type ShopAppProps = {
    products: any[]
    isOpen: boolean
    isShowingMessage: boolean
    message: string
    numFavorites: number
    prodCount: number
}
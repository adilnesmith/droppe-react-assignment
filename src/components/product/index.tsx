import React, { FC } from 'react';
import { ProductProps } from 'lib/types/common'
import styles from "./ProductList.module.scss";
import { FaStar } from "react-icons/fa";
const Product: FC<ProductProps> = ({ product, onFav }) => {
    // Problem: Now product title can be too long, I just put overflowX as fix now
    return (
        <>
            <div className={styles.wrapper}>
                <h3 className={styles.wrapper__title}>{product?.title}</h3>
                <strong className={styles.wrapper__rating}>{`Total: ${product?.rating?.rate}/5`}</strong>
                <b className={styles.wrapper__price}>{`Price: $${+product?.price}`}</b>
                <div className={styles.wrapper__body}><b>{`Description:`}</b>{product?.description}</div>
                <div className={styles['wrapper__action-bar']}>
                    <span
                        className={`${styles['wrapper__action-bar__item']} ${product?.isFavorite && "active"}`}
                        role="button"
                        onClick={() => { onFav(product?.title) }}
                    >
                        <FaStar /> <span className={styles['wrapper__action-bar__item__label']}>{product?.isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
                    </span>
                </div>
            </div>
        </>
    )
}


export default Product;
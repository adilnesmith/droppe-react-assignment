import React, { FC, useEffect, useState } from 'react';
import lodash from 'lodash';
import { API_DOMAIN } from '../../general-config'
import ENDPOINTS from "lib/api/endpoints";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import Button from "components/ui/Button";
import ProductList from "components/product-list";
import Form from "components/ui/Form";
import Header from "components/header";
import styles from "./shopApp.module.scss";
const ShopApp: FC<{}> = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isShowingMessage, setShowingMessage] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [favoritesCount, setFavoritesCount] = useState<number>(0);
  const [productsCount, setProductsCount] = useState<number>(0);
  useEffect(() => {
    fetch(API_DOMAIN + ENDPOINTS.PRODUCTS.GET).then((response) => { return response.json() }).then((_products) => {
      setProducts(_products);
      setProductsCount(_products?.length)
    });
  }, [])
  const favClick = (title: string) => {
    const _products = products;
    const index = lodash.findIndex(_products, { title: title })
    let currentFavoritesCount = favoritesCount
    let _favoritesCount: any;
    if (_products[index].isFavorite) {
      _products[index].isFavorite = false;
      _favoritesCount = --currentFavoritesCount
    } else {
      _favoritesCount = ++currentFavoritesCount
      _products[index].isFavorite = true;
    }
    setProducts(_products)
    setFavoritesCount(_favoritesCount)
  };
  const onSubmit = (payload: { title: string; description: string, price: string }) => {
    setProducts(products => [...products, payload]);
    setProductsCount(productsCount + 1)
    setOpen(false)
    setShowingMessage(true)
    setMessage('Adding product...')
    setTimeout(() => {
      setShowingMessage(false)
      setMessage("")
    }, 2000);
  }
  return (
    <>
      <Header />
      <section className={['container', styles.wrapper].join(' ')}>
        <div className={styles.wrapper__button}>
          <Button
            onClick={() => { setOpen(true) }}
            children={'Send product proposal'}
          ></Button>
          {isShowingMessage &&
            <div className={styles.wrapper__message}>
              <i>{message}</i>
            </div>}
        </div>
        <div className={styles.wrapper__stats}>
          <span> {`Total products: ${productsCount} - Number of favorites: ${favoritesCount}`}</span>
        </div>
        {products?.length && <ProductList products={products} onFav={favClick} />}
      </section>
      <Modal
        isOpen={isOpen}
        className={styles.reactModalContent}
        overlayClassName={styles.reactModalContent__overlay}
      >
        <div className={styles.contentHelper}>
          <div
            className={styles.contentHelper__close}
            onClick={() => { setOpen(false) }}
          ><FaTimes /></div>
          <Form
            on-submit={onSubmit}
          />
        </div>
      </Modal>
    </>
  )
}
export default ShopApp
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
import { ShopAppProps } from 'lib/types/common'
const ShopApp: FC<{}> = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [isShowingMessage, setShowingMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [numFavorites, setNumFavorites] = useState(0);
  const [prodCount, setProdCount] = useState(0);


  const favClick = (title: string) => {
    const prods = products;
    const idx = lodash.findIndex(prods, { title: title })
    let currentFavs = numFavorites
    let totalFavs: any;
    if (prods[idx].isFavorite) {
      prods[idx].isFavorite = false;
      totalFavs = --currentFavs
    } else {
      totalFavs = ++currentFavs
      prods[idx].isFavorite = true;
    }
    setProducts(prods)
    setNumFavorites(totalFavs)
  };
  useEffect(() => {
    fetch(API_DOMAIN + ENDPOINTS.PRODUCTS.GET).then((response) => {
      let jsonResponse = response.json();
      jsonResponse.then((rawData) => {
        let data = [];
        for (let i = 0; i < rawData.length; i++) {
          let updatedProd = rawData[i];
          data.push(updatedProd);
        }
        setProducts(data);
        setProdCount(data.length)
      });
    });
  }, [])
  const onSubmit = (payload: { title: string; description: string, price: string }) => {
    const updated: any[] = lodash.clone(products);
    updated.push({
      title: payload.title,
      description: payload.description,
      price: payload.price
    });
    setProducts(updated)
    setProdCount(lodash.size(products) + 1)
    setOpen(false)
    setShowingMessage(true)
    setMessage('Adding product...')

    // **this POST request doesn't actually post anything to any database**
    fetch(API_DOMAIN + ENDPOINTS.PRODUCTS.POST, {
      method: "POST",
      body: JSON.stringify(
        {
          title: payload.title,
          price: payload.price,
          description: payload.description,
        }
      )
    }).then(res => res.json())
      .then(json => {
        setTimeout(() => {
          setShowingMessage(false)
          setMessage("")
        }, 2000);
      })
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
          <span> {`Total products: ${prodCount} - Number of favorites: ${numFavorites}`}</span>
        </div>
        {products?.length && <ProductList products={products} onFav={() => favClick} />}
      </section>
      <Modal
        isOpen={isOpen}
        className={styles.reactModalContent}
        overlayClassName={styles.reactModalOverlay}
      >
        <div className={styles.modalContentHelper}>
          <div
            className={styles.modalClose}
            onClick={() => { setOpen(false) }}
          ><FaTimes /></div>
          <Form
            on-submit={() => onSubmit}
          />
        </div>
      </Modal>
    </>
  )
}
export default ShopApp
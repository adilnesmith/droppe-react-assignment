import React, { FC, useEffect, useState } from 'react';
import lodash from 'lodash';
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
    fetch('https://fakestoreapi.com/products').then((response) => {
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
    fetch('https://fakestoreapi.com/products', {
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
      <div className={['container', styles.main].join(' ')} style={{ paddingTop: 0 }}>
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button
              onClick={() => { setOpen(true) }}
              children={'Send product proposal'}
            ></Button>
          </span>
          {isShowingMessage && <div className={styles.messageContainer}>
            <i>{message}</i>
          </div>}
        </div>

        <div className={styles.statsContainer}>
          <span>Total products: {prodCount}</span>
          {' - '}
          <span>Number of favorites: {numFavorites}</span>
        </div>
        {products && !!products.length ? <ProductList products={products} onFav={() => favClick} /> : <div></div>}
      </div>
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
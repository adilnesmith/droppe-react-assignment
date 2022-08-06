import React, { FC } from 'react';
import styles from './Header.module.scss'
import logo from "images/droppe-logo.png";
import img1 from "images/img1.png";
import img2 from "images/img2.png";
const Header: FC<{}> = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={['container', styles['wrapper__image-wrapper']].join(' ')}>
                    <img src={logo} className={styles['wrapper__image-wrapper__image']} alt="" />
                </div>
            </div>
            <section className={['container', styles.section].join(' ')}>
                <img className={styles.section__image} src={img1} alt="" />
                <img className={styles.section__image} src={img2} alt="" />
            </section>
        </>
    )
}
export default Header;
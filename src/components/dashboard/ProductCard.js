import React from 'react'
import Button from './button/Button'
import styles from './dashboard.module.css'

export default function ProductCard({ src, sizes, name, categories, brand, price, hundleDelete, img, id }) {
    return (
        <div className={styles['product-card-dash']}>
            <img src={src} alt="product img" className={styles['img-product']} />
            <h3 className={styles['name']}>{name}</h3>
            <p className={styles["sizes"]}>Sizes Avaliable:&nbsp;
                <div className={styles['container-spans']}>
                    {sizes.map(ele => (<><span className={styles['spans']}>{ele}</span> &nbsp; &nbsp;</>))}
                </div>
            </p>
            <p className={styles["categories"]}>Categories Avaliable:&nbsp;
                <div className={styles['container-spans']}>
                    {categories.map(ele => (<><span className={styles['spans']}>{ele}</span> &nbsp; &nbsp;</>))}
                </div>
            </p>
            <p className={styles["brand-product-box"]}>Brand: {brand}</p>
            <p className={styles["price-product-box"]}>Price: ${price}</p>
            <div className={styles["buttons-product"]}>
                <Button
                    className={'del-btn'}
                    link={'/dashboard'}
                    text={'Delete'}
                    hundleClick={hundleDelete}
                />
                <Button
                    className={'edit-btn'}
                    link={`/editProduct/${id}?img=${img}`}
                    text={'Edit'}
                    hundleClick={() => { }}
                />
            </div>
        </div>
    )
}

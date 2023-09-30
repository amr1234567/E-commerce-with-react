import React from 'react'
import Button from '../button/Button'
import styles from './dashboardStyle.module.css'
import { useProducts } from '../../context/useData'

export default function ProductCard({ itemData }) {
    const { deleteProduct } = useProducts()
    if (!itemData) {
        return <h2>Data is undefined or null</h2>
    }
    return (
        <div className={styles['product-card-dash']}>
            <img src={itemData.img} alt="product img" className={styles['img-product']} />
            <h3 className={styles['name']}>{itemData.name}</h3>
            <p className={styles["sizes"]}>Sizes Avaliable:&nbsp;
                <div className={styles['container-spans']}>
                    {itemData.size.map(ele => (<><span className={styles['spans']}>{ele}</span> &nbsp; &nbsp;</>))}
                </div>
            </p>
            <p className={styles["categories"]}>Categories Avaliable:&nbsp;
                <div className={styles['container-spans']}>
                    {itemData.category.map(ele => (<><span className={styles['spans']}>{ele}</span> &nbsp; &nbsp;</>))}
                </div>
            </p>
            <p className={styles["brand-product-box"]}>Brand: {itemData.brand}</p>
            <p className={styles["price-product-box"]}>Price: ${itemData.price}</p>
            <div className={styles["buttons-product"]}>
                <Button
                    className={'del-btn'}
                    link={'/dashboard'}
                    text={'Delete'}
                    hundleClick={() => deleteProduct(itemData.id)}
                />
                <Button
                    className={'edit-btn'}
                    link={`/editProduct/${itemData.id}?img=${itemData.img}`}
                    text={'Edit'}
                    hundleClick={() => { }}
                />
            </div>
        </div>
    )
}

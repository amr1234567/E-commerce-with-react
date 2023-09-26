import React from 'react'
import Button from '../button/Button'
import ProductCard from './ProductCard'
import styles from './dashboard.module.css'
import { ProductsContextProvidor, useProducts } from '../../context/useData'
import Header from './Header'


function Dashboard() {
    const { data, decindingOrder, assendingOrder } = useProducts()
    let hundleDelete = (i) => {
        fetch(`http://localhost:8000/products/${i}`, {
            method: 'DELETE'
        }).then(console.log(`item with id ${i} has been deleted`)).then(() => {
            // fetchData(dispatch, ACTIONS.SET_PRODUCTS)
        })
    }

    return (
        <div className={styles["dashboard-page"]}>
            <Header />
            <main className={styles['products-cards-dash']}>
                <div className={styles["buttons-order"]}>
                    <Button
                        className={'sort-des'}
                        hundleClick={() => decindingOrder()}
                        link={""}
                        text={'Desinding'}
                    />
                    <Button
                        className={'sort-ass'}
                        hundleClick={() => assendingOrder()}
                        link={""}
                        text={'Assinding'}
                    />
                </div>
                {
                    data &&
                    data.map((item) => {
                        return (
                            <ProductCard
                                key={item.id}
                                itemData={item}
                            />)
                    })
                }
            </main>
        </div>
    )
}


export const DashBoardContainer = () => {
    return (
        <ProductsContextProvidor>
            <Dashboard />
        </ProductsContextProvidor>
    )
}
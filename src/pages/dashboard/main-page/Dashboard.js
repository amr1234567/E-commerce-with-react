import React from 'react'
import Button from '../../../components/button/Button'
import ProductCard from '../../../components/dashboard/ProductCard'
import styles from './dashboard.module.css'
import { ProductsContextProvidor, useProducts } from '../../../context/useData'
import Header from '../../../components/dashboard/Header'
import Footer from '../../../components/footer/Footer'


function Dashboard() {
    const { data, decindingOrder, assendingOrder } = useProducts()
    return (
        <div className={styles["dashboard-page"]}>
            <Header />
            <main className={styles['products-cards-dash']}>
                <div className={styles["buttons-order"]}>
                    <Button
                        className={''}
                        hundleClick={() => decindingOrder()}
                        link={""}
                        text={'Desinding'}
                    />
                    <Button
                        className={''}
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
            <Footer />
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
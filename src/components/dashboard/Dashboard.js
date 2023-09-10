import React, { useEffect, useState } from 'react'
import womenImg1 from '../../assets/women/image1.svg'
import womenImg2 from '../../assets/women/image2.svg'
import womenImg3 from '../../assets/women/image3.svg'
import womenImg4 from '../../assets/women/image4.svg'
import womenImg5 from '../../assets/women/image5.svg'
import womenImg6 from '../../assets/women/image6.svg'
import manImg1 from '../../assets/men/image1.jpg'
import manImg2 from '../../assets/men/image2.jpg'
import manImg3 from '../../assets/men/image3.jpg'
import manImg4 from '../../assets/men/image4.jpg'
import manImg5 from '../../assets/men/image5.jpg'
import Button from './button/Button'
import ProductCard from './ProductCard'
import styles from './dashboard.module.css'

let imagesURLWomen = [womenImg1, womenImg2, womenImg3, womenImg4, womenImg5, womenImg6];
let imagesURLMen = [manImg1, manImg2, manImg3, manImg4, manImg5]

let chooseRandomImage = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default function Dashboard() {
    const [products, setProducts] = useState(null);
    const [search, setSearch] = useState(0)
    const [searchText, setSearchText] = useState('')
    let img;
    let hundleDelete = (i) => {
        fetch(`http://localhost:8000/products/${i}`, {
            method: 'DELETE'
        }).then(console.log(`item with id ${i} has been deleted`)).then(() => {
            fetch('http://localhost:8000/products')
                .then(products => products.json())
                .then(products => setProducts(products));
        }
        )
    }
    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(products => products.json())
            .then(products => setProducts(products));
    }, []);
    let validateSearch = () => {
        fetch('http://localhost:8000/products?q=' + searchText)
            .then((res) => res.json())
            .then((res) => setProducts(res))
            .then(() => setSearch(0))
    }
    return (
        <div className={styles["dashboard-page"]}>
            <header className={styles['header-dash']}>
                <a href='/' className={styles['header-links']}>E-Commerce</a>
                <div className={styles["buttons-header-dash"]}>
                    <Button
                        text={'Add Product'}
                        className={'add-dash'}
                        link={'/addProduct'}
                        hundleClick={() => { }}
                    />
                    {
                        search === 1 &&
                        <form onSubmit={e => e.preventDefault()}>
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" name="search" id="search" />
                        </form>
                    }
                    <Button
                        text={'Search'}
                        className={'search-button-dash'}
                        link={''}
                        hundleClick={() => {
                            if (search === 0) setSearch(1)
                            else if (search === 1) validateSearch()
                        }}
                    />
                </div>
            </header>
            <main className={styles['products-cards-dash']}>
                <div className={styles["buttons-order"]}>
                    <Button
                        className={'sort-des'}
                        hundleClick={() => {
                            fetch('http://localhost:8000/products?_sort=price&_order=desc')
                                .then(products => products.json())
                                .then(products => setProducts(products));
                        }}
                        link={""}
                        text={'Desinding'}
                    />
                    <Button
                        className={'sort-ass'}
                        hundleClick={() => {
                            fetch('http://localhost:8000/products?_sort=price&_order=ass')
                                .then(products => products.json())
                                .then(products => setProducts(products));
                        }}
                        link={""}
                        text={'Assinding'}
                    />
                </div>
                {products && products.map((item, index) => (
                    <ProductCard
                        {...img = chooseRandomImage((item.category.includes('men') || item.category.includes('Men')) ? imagesURLMen : imagesURLWomen)}
                        key={index}
                        sizes={item.size}
                        src={img}
                        name={item.name}
                        price={item.price}
                        categories={item.category}
                        brand={item.brand}
                        hundleDelete={() => hundleDelete(item.id)}
                        img={img}
                        id={item.id}
                    />))}
            </main>
        </div>
    )
}

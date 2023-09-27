import React from 'react';
import styles from './dashboard.module.css'
import Button from '../button/Button'
import { useProducts } from '../../context/useData'

const Header = () => {
    const { searchOpened, toggleSearch } = useProducts()
    return (
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
                    searchOpened &&
                    <SearchForm />
                }
                {!searchOpened &&
                    <Button
                        text={'Search'}
                        className={'search-button-dash'}
                        link={''}
                        hundleClick={() => {
                            toggleSearch()
                        }}
                    />}
            </div>
        </header>
    );
}

export default Header;


const SearchForm = () => {
    const { search, toggleSearch, setSearch, hundleSearch } = useProducts()
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                value={search}
                type="text"
                name="search"
                id="search"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            <Button
                type='submit'
                text={'Search'}
                className={'search-button-dash'}
                link={''}
                hundleClick={() => {
                    hundleSearch()
                    toggleSearch()
                }}
            />
        </form>
    );
}
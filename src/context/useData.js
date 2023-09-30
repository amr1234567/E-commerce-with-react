import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

import womenImg1 from '../assets/women/image1.svg'
import womenImg2 from '../assets/women/image2.svg'
import womenImg3 from '../assets/women/image3.svg'
import womenImg4 from '../assets/women/image4.svg'
import womenImg5 from '../assets/women/image5.svg'
import womenImg6 from '../assets/women/image6.svg'
import manImg1 from '../assets/men/image1.jpg'
import manImg2 from '../assets/men/image2.jpg'
import manImg3 from '../assets/men/image3.jpg'
import manImg4 from '../assets/men/image4.jpg'
import manImg5 from '../assets/men/image5.jpg'

const imagesURLWomen = [womenImg1, womenImg2, womenImg3, womenImg4, womenImg5, womenImg6];
const imagesURLMen = [manImg1, manImg2, manImg3, manImg4, manImg5]

const productsContext = createContext({});

const ACTIONS = {
    SET_PRODUCTS: 'set-products',
    UPDATE_PRODUCTS: 'update-products',
    SET_SEARCH: 'set-search',
    TOGGLE_SEARCH: 'toggle-search'
}

let chooseRandomImage = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

export let setDataWithImages = (data) => {
    let newObj = data.map((item) => (
        {
            ...item, img: chooseRandomImage((item.category.includes('men')) ?
                imagesURLMen :
                imagesURLWomen)
        })
    )
    return newObj;
}

let reduce = (obj, action) => {
    switch (action.type) {
        case ACTIONS.SET_PRODUCTS:
            return { ...obj, data: setDataWithImages(action.payload) };
        case ACTIONS.UPDATE_PRODUCTS:
            return { ...obj, data: action.payload }
        case ACTIONS.SET_SEARCH:
            return { ...obj, search: action.payload }
        case ACTIONS.TOGGLE_SEARCH:
            return { ...obj, searchOpened: !action.payload }
        default:
            return obj;
    }
}

export function useData() {
    const [{ data, searchOpened, search }, dispatch] = useReducer(reduce, { data: [], searchOpened: false, search: '' })
    useEffect(() => {
        // search ? 'http://localhost:8000/products?q=' + search :

        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data })
            })
    }, [])

    let newDataDis = useMemo(() => data.slice().sort((a, b) => a.price - b.price), [data]);
    let decindingOrder = () => {
        dispatch({ type: ACTIONS.UPDATE_PRODUCTS, payload: newDataDis })
    }

    let newDataAss = useMemo(() => data.slice().sort((a, b) => b.price - a.price), [data]);
    let assendingOrder = () => {
        dispatch({ type: ACTIONS.UPDATE_PRODUCTS, payload: newDataAss })
    }

    let deleteProduct = (id) => {
        fetch(`http://localhost:8000/products/${id}`, {
            method: 'DELETE'
        }).then(() => {
            dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data.slice().filter(i => i.id !== id) })
        })
    }

    let setSearch = (content) => {
        dispatch({ type: ACTIONS.SET_SEARCH, payload: content })
    }
    let toggleSearch = () => {
        dispatch({ type: ACTIONS.TOGGLE_SEARCH, payload: searchOpened })
    }
    let searchFilter = useMemo(() => (
        [...data].filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    ), [data, search])

    let hundleSearch = () => {
        search ? dispatch({ type: ACTIONS.UPDATE_PRODUCTS, payload: searchFilter }) :
            fetch('http://localhost:8000/products')
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data })
                })
    }

    return {
        data,
        searchOpened,
        search,
        decindingOrder,
        assendingOrder,
        deleteProduct,
        setSearch,
        toggleSearch,
        hundleSearch
    }
}

export const useProducts = () => {
    return useContext(productsContext);
}

export const ProductsContextProvidor = ({ children }) => {
    return (
        <productsContext.Provider value={useData()}>
            {children}
        </productsContext.Provider>
    )
} 
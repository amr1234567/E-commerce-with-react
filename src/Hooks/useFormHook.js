import { useReducer } from "react"

const ACTIONS = {
    INITIAL_SET_DATA: 'initial-set-data',
    SET_NAME: 'set-name',
    SET_PRICE: 'set-price',
    SET_RATING: 'set-rating',
    SET_SIZE: 'set-size',
    SET_BRAND: 'set-brand',
    SET_CATEGORY: 'set-category'
}
function reduce(formData, action) {
    switch (action.type) {
        case ACTIONS.INITIAL_SET_DATA:
            return {
                name: action.payload.name,
                price: action.payload.price,
                rating: action.payload.rating,
                size: action.payload.size,
                brand: action.payload.brand,
                category: action.payload.category,
            }
        case ACTIONS.SET_NAME:
            return {
                ...formData,
                name: action.payload.name
            }
        case ACTIONS.SET_PRICE:
            return {
                ...formData,
                price: action.payload.price
            }
        case ACTIONS.SET_RATING:
            return {
                ...formData,
                rating: action.payload.rating
            }
        case ACTIONS.SET_SIZE:
            return {
                ...formData,
                size: action.payload.size
            }
        case ACTIONS.SET_BRAND:
            return {
                ...formData,
                brand: action.payload
            }
        case ACTIONS.SET_CATEGORY:
            return {
                ...formData,
                category: action.payload
            }
        default:
            return formData;
    }
}

export const useFormHook = () => {
    const [{ name, price, rating, size, brand, category }, dispatch] = useReducer(reduce, {
        name: '',
        price: 0,
        rating: 0.0,
        size: '',
        brand: {
            Gucci: false,
            Addidas: false,
            Zara: false,
            Puma: false,
            Tommy: false,
            Nike: false,
            others: false
        },
        category: {
            men: false,
            women: false,
            children: false,
        }
    })

    let setDataOfForm = (data) => {
        dispatch({ type: ACTIONS.INITIAL_SET_DATA, payload: data })
    }

    function setName(name) {
        dispatch({ type: ACTIONS.SET_NAME, payload: { name: name } })
    }

    function setPrice(name) {
        dispatch({ type: ACTIONS.SET_PRICE, payload: { price: name } })
    }

    function setRating(name) {
        dispatch({ type: ACTIONS.SET_RATING, payload: { rating: name } })
    }

    function setSize(name) {
        dispatch({ type: ACTIONS.SET_SIZE, payload: { size: name } })
    }

    function setBrand(name) {
        let keys = Object.keys(brand);
        let obj = { ...brand }
        keys.forEach(i => { obj[i] = false })
        obj[name] = true;
        dispatch({ type: ACTIONS.SET_BRAND, payload: obj })
    }

    function setCategory(name){
        let obj = { ...category }
        obj[name] = !category[name];
        dispatch({ type: ACTIONS.SET_CATEGORY, payload: obj })
    }
    return {
        name,
        price,
        rating,
        size,
        brand,
        category,
        setDataOfForm,
        setName,
        setPrice,
        setRating,
        setSize,
        setBrand,
        setCategory
    }
}
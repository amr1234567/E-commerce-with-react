import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [productsData, setProductsData] = useState();
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProductsData(data)
            })
    }, [url])


    return { productsData }
}
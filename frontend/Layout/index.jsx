import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { fetchProducts } from "store/modules/product";
import { fetchCategory } from 'store/modules/common'
import Header from "Components/Common/Header";

// LAYOUT
const index = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        /** 1. Fetching Initial Categories and Products */
        dispatch(fetchCategory())
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            <Header />
            <div className=" mt-8 mb-6 sm:mt-20 sm:mb-14 mx-auto mb-20" >
                {children}
            </div>
        </>
    );
}

export default index;
import Header from "Components/Common/Header";
import { fetchCategory } from 'store/modules/common'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

// LAYOUT
const index = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        /** 1. Fetching Categories */
        dispatch(fetchCategory())
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
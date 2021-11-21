import ProductDetailPage from "Components/Products/ProductDetailPage";
import { useRouter } from "next/router";
import {useEffect} from 'react'
const testData = {
    "id": 1,
    "attributes": [
        {
            "id": 3,
            "attrubute": 1,
            "variant": 3,
            "product": 1
        },
        {
            "id": 4,
            "attrubute": 2,
            "variant": 5,
            "product": 1
        }
    ],
    "name": "Shirt",
    "slug": "shirt",
    "price": 2600.0,
    "short_description": "Django administration",
    "description": "Django administration\r\nWELCOME, VIKAS. VIEW SITE / CHANGE PASSWORD / LOG OUT\r\nHome › Product_Management › Products › Add Product\r\n\r\nACCOUNTS\r\nEmail addresses\tAdd\r\nAUTH TOKEN\r\nTokens\tAdd\r\nAUTHENTICATION AND AUTHORIZATION\r\nGroups\tAdd\r\nUsers\tAdd\r\nMASTERS\r\nCategorys\tAdd\r\nPRODUCT_MANAGEMENT\r\nProducts\tAdd\r\nSITES\r\nSites\tAdd\r\nAdd Product\r\n\r\nName:\r\nShirt\r\nSlug:\r\nShirt\r\nPrice:\r\n2600\r\nDescription:\r\nDiscount percentage:\r\n0\r\nCategory:\r\nCloths\r\n ChangeAdd\r\nTotal stock:\r\n10\r\nImage:No file chosen\r\nIs active",
    "discount_percentage": 20.0,
    "total_stock": 11,
    "image": "http://localhost:8000/media/product-images/16240094675fbe59747c3ba.jpeg",
    "product_images": [
        {
            "id": 1,
            "image": "http://localhost:8000/media/product-images/81SdofSuSJL._UL1500__bQMVx5a.jpg",
            "alt_text": "1",
            "is_featured": true,
            "created_at": "2021-11-21T10:59:03.154216Z",
            "updated_at": "2021-11-21T10:59:03.154285Z",
            "product": 1
        },
        {
            "id": 2,
            "image": "http://localhost:8000/media/product-images/saleordemoproduct_sneakers_02_3_ZQbZhuQ.png",
            "alt_text": "2",
            "is_featured": false,
            "created_at": "2021-11-21T10:59:03.156634Z",
            "updated_at": "2021-11-21T10:59:03.156688Z",
            "product": 1
        },
        {
            "id": 3,
            "image": "http://localhost:8000/media/product-images/saleordemoproduct_sneakers_01_1_n1C7dBN.png",
            "alt_text": "3",
            "is_featured": false,
            "created_at": "2021-11-21T10:59:03.158160Z",
            "updated_at": "2021-11-21T10:59:03.158210Z",
            "product": 1
        }
    ],
    "is_active": true,
    "is_featured": false,
    "category": {
        "id": 1,
        "name": "Cloths",
        "description": null,
        "is_active": true,
        "created_at": "2021-10-07T08:47:51.632501Z",
        "updated_at": "2021-10-07T09:20:48.811873Z",
        "parent": null
    }
}

const ProductDetail = () => {
    const { query: { slug } } = useRouter()
    console.log('Here::', slug);

    useEffect(() => {
        // Find Product Info Via Slug
    }, [slug])

    return (
        <ProductDetailPage product={testData} />
    );
}

export default ProductDetail;
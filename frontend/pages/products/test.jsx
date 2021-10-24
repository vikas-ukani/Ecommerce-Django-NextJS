import ProductDetailPage from "Components/Products/ProductDetailPage";



const test = () => {
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
    return (
        <ProductDetailPage product={testData} />
    );
}

export default test;
import FeatureProducts from "Components/Products/FeatureProducts";
import RecentProducts from "Components/Products/RecentProducts";
import TopSellings from 'Components/Products/TopSellings'
import ProductByCategory from "Components/Products/ProductByCategory"

export default function Home() {
  return (
    <div className=''>
      <FeatureProducts />
      <RecentProducts />
      <TopSellings />
      <ProductByCategory /> 
    </div>
  )
}

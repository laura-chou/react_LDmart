import NavbarSection from '../components/navbar';
import SearchSection from '../components/search';
import ProductsSection from '../components/products';
import { getSortedProductsData } from '../lib/products';
import '../style/globals.css'

export default function Page({ products }) {
  return (
    <>
      <NavbarSection/>
      <SearchSection/>
      <ProductsSection products={products}/>
    </>
  );
}
export async function getStaticProps() {
  const products = getSortedProductsData();

  return {
    props: {
      products,
    },
  };
}
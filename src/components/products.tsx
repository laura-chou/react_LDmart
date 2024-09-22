import React from 'react';

interface ProductsData {
  id: number;
  name: string;
  description: string;
  mainCategoryId: number;
  mainCategoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  price: number;
  inventory: number;
  brandId: number;
  brandName: string;
}

interface ProductsSectionProps {
  allData: ProductsData[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ allData }) => {
  return (
    <section>
      <ul>
        {allData.map((product) => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductsSection;
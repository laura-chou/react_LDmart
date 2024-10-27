import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { HeartFill, CartPlusFill } from "react-bootstrap-icons";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from './products.module.css';

interface Products {
  mainCategoryId: number
  mainCategoryName: string
  subCategory: SubCategory[]
}
interface SubCategory {
  id: number
  name: string
  items: SubCategoryItem[]
}
interface SubCategoryItem {
  id: number
  name: string,
  description: string
  price: number
  inventory: number
  brandId: number
  brandName: string
}

interface ProductsSectionProps {
  products: Products[]
}
const handleMenuItemClick = (mainCategoryId: number, subCategoryId: number) => {

};

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section>
      <Row>
        {products.map((product) => (
          <Col key={product.mainCategoryId} xs="6" md="4" lg="3">
            <Sidebar>
              <Menu>
                <SubMenu label={product.mainCategoryName}>
                  {product.subCategory.map((sub) => (
                    <MenuItem 
                      key={sub.id} 
                      onClick={() => handleMenuItemClick(product.mainCategoryId, sub.id)}>
                        {sub.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              </Menu>
            </Sidebar>
          </Col>
        ))}
    </Row>
    </section>
  )
}

export default ProductsSection;
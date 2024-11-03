import React from 'react';
import { useState } from 'react';
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


const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  const handleMenuItemClick = (mainCategoryId: number, subCategoryId: number) => {
    const mainCategory = products.find(product => product.mainCategoryId === mainCategoryId);
    if (mainCategory) {
      const subCategory = mainCategory.subCategory.find(sub => sub.id === subCategoryId);
      setSelectedSubCategory(subCategory || null);
    }
  };
  return (
    <section>
      <Row>
      {products.map((product) => (
        <><Col key={product.mainCategoryId} xs="6" md="4" lg="3">
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
        {selectedSubCategory && selectedSubCategory.items.map(item => (
          <Col xs="6" md="4" lg="3" className='mt-3' key={item.id}>
            <Card className={styles.card}>
              <div className={styles.objectFitContainer}>
                <Card.Img variant="top" src={`products/1-1-${item.id}.jpg`} />
              </div>
              <Card.Body>
                <div className={styles.cardBody}>
                  <Card.Title><a className={styles.cardTitle} href="">{item.name}</a></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.brandName}</Card.Subtitle>
                  <Card.Text className={styles.cardText}>{item.description}</Card.Text>
                </div>
                <div className="d-flex justify-content-end">
                  <Button variant="primary" className='me-2'>
                    <HeartFill />
                  </Button>
                  <Button variant="primary">
                    <CartPlusFill />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}</>
      ))}
    </Row>
    </section>
  )
}

export default ProductsSection;
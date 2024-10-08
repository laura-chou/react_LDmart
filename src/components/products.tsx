import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { HeartFill, CartPlusFill } from "react-bootstrap-icons";
import styles from './products.module.css';

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
      <Container>
        <Row>
          {allData.map((product) => (
            <Col xs="auto" md="4" lg="4" key={product.id}>
              <Card className={styles.card}>
                <div className={styles.objectFitContainer}>
                  <Card.Img variant="top" src={`products/1-1-${product.id}.jpg`} />
                </div>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{product.brandName}</Card.Subtitle>
                  <Card.Text className={styles.cardText}>{product.description}</Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button variant="primary" className='me-2'>
                      <HeartFill/>
                    </Button>
                    <Button variant="primary">
                      <CartPlusFill/>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProductsSection;
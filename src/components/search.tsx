import React from 'react';
import { Container, InputGroup, Form, Button, Image } from "react-bootstrap";

import styles from './search.module.css';

const SearchSection: React.FC = () => {
  return (
    <section className={styles.searchSection}>
      <Container className="d-flex align-items-center">
        <Image className={styles.logo} alt="logo" src="logo.png"/>
        <InputGroup className='mt-3'>
          <Form.Control placeholder="請輸入"/>
          <Button className="btn-logo-blue">
            搜尋
          </Button>
        </InputGroup>
      </Container>
    </section>
  )
}

export default SearchSection;
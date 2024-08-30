import React from 'react';
import { Container, Navbar } from "react-bootstrap";
import { HouseDoorFill } from "react-bootstrap-icons";

import styles from './navbar.module.css';

const NavbarSection: React.FC = () => {
  return (
    <section>
      <Navbar className={styles.navbar}>
        <Container>
          <div>
            <a className="d-flex" href="#">
              <HouseDoorFill className={styles.homeIcon} />
              首頁
            </a>
          </div>
          <div>
            <a className="me-3" href="#">購物車</a>
            <a className="me-3" href="#">登入</a>
          </div>
        </Container>
      </Navbar>
    </section>
  )
};

export default NavbarSection;
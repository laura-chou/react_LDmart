import { Container, Navbar, InputGroup, Form, Button, Image } from "react-bootstrap";
import { HouseDoorFill } from "react-bootstrap-icons";
import "../style/navbar.css"

export default function Page() {
  return (
    <>
      <section id="navbar-section">
        <Navbar className="navbar">
          <Container>
            <div>
              <a className="d-flex" href="#">
                <HouseDoorFill className="home-icon me-1" />
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
      <section id="search-section" className="d-flex align-items-center">
        <Container className="d-flex align-items-center">
          <Image className="logo me-4" alt="logo" src="logo.png"/>
          <InputGroup>
            <Form.Control placeholder="請輸入"/>
            <Button className="btn-logo-blue">
              搜尋
            </Button>
          </InputGroup>
        </Container>
      </section>
    </>
  );
}
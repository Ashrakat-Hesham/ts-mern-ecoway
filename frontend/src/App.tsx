import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import './App.css'
import { productSamples } from './tsCode/Data'

function App() {
  return (
    <div className=" d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Eco Elite</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>

      <main>
        <Container className="mt-3 text-center">
          <Row>
            {productSamples.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <img
                  className="product-image"
                  src={product?.images[0]}
                  alt={product.title}
                />
                <li>{product.title}</li>
                <li>{product.price}</li>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default App

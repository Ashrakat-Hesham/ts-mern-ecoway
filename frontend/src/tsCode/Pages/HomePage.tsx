import { Col, Row } from 'react-bootstrap'
import { productSamples } from '../Data'

export default function HomePage() {
  return (
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
  )
}

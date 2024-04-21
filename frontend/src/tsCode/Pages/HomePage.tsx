import { Col, Row } from 'react-bootstrap'
import { productSamples } from '../Data'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Row className='text-center'>
      {productSamples.map((product, i) => (
        <Col key={i} sm={12} md={6} lg={4} xl={3}>
          <Link to={'/product/' + product.slug}>
            <img
              className="product-image"
              src={product?.images[0]}
              alt={product.title}
            />
            <li>{product.title}</li>
            <li>{product.price}</li>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

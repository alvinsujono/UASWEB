import React from 'react'
import { Container, Row, Card} from 'reactstrap'
import RowProduct from './RowProduct'
import RowProduct1 from './RowProduct1'

function Produk() {
    return (
        <div>
            <Container>
                <hr/>
                <Card body inverse color="warning">
                <h1>Produk AYE STORE</h1>
                </Card>
                <Row>
                    <RowProduct/>
                </Row>
            </Container>
            <Container>
                <hr/>
                <Card body inverse color="warning">
                <h1>Produk Luar</h1>
                </Card>
                <Row>
                    <RowProduct1/>
                </Row>
            </Container>
        </div>
    )
}

export default Produk
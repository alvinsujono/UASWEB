import React from 'react'
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  CardDeck
} from 'reactstrap';

// import { useContext } from 'react';
// import { CartContext } from '../../CartContext';

function RowProduct1() {

    // const { value, setValue } = useContext(CartContext)

    return (
        <Col>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfACC8DE6Cw6KuCuNJEMY0EmlzDLHY6FYDSA&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG PEDAS</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHSvi6WqIr_E_M8YLxSBHEzeva3cI53ix2Sg&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG COKELAT</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLdDg_O6j8TcSB5VAcYm2O2SjYITwGJxfsEg&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG BALADO</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuLUsP-1bv6-GKicLACL5epw0s6PcdXSdhLw&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG AYAM GEPREK</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB0j93KNMOupEjDoDIFmwAExPf_RxCVdU75A&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG SAMBEL MATAH</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>


            </CardDeck>

            <CardDeck>

                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfUnyvc5U5MqUKneS12D2oqTrpvbNo25v2Zg&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG BBQ</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVtS9VbOk1x-hlVvu9dCRm32SoFrJbAz2f3w&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG SAMBAL CUMI</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAhFKgpAxdbO9pBEd8rWyHryiqHug-WZ0DkQ&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG KEJU</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO81_plDfrCNhGYMujf6HRVZLQooSfOh2rig&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG SALTED EGG</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgVd56gwahkF7A_q9ISWBIhs9uMfcNBlx5gA&usqp=CAU" alt="Card image cap" />
                    <CardBody>
                        <h5><CardTitle>MI SIUMANG ASIN ORIGINAL</CardTitle></h5>
                        <h3><CardSubtitle>Rp. 12.500,-</CardSubtitle></h3>
                        <CardText>STOCK=</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
            
        </Col>
    )
}

export default RowProduct1
import React from 'react';
import { 
    Row,
    Container, 
    Col, 
    Card, 
    CardBody, 
    CardTitle,
    CardText,
    CardHeader } from 'reactstrap'

const FWLogCard = ({ firewallData, cardTitle, cardDescription }) => {
    return (
        <Container className='fwLogCard mt-4'>
            <Row>
                <Col md='10'>
                    <Card body inverse color='secondary'>
                        <CardHeader >
                            <CardTitle>{ cardTitle }</CardTitle>
                            <CardText>{ cardDescription }</CardText>
                        </CardHeader>
                        <Card body inverse color='secondary' className='mt-2'>
                          <CardBody>
                              <pre style={{"color" : "white"}}>{ firewallData }</pre>
                          </CardBody>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FWLogCard;
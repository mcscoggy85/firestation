import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const VpnForm = () => {
    return(
        <div>
            <Container className="mt-2">
                <Row>
                    <Col lg="8">
                        <Card>
                            <CardBody>
                                <CardTitle >VPN Form</CardTitle>
                                <CardText>Below enter in the correct keys and certificates provided from the OpenVPN Server</CardText>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">IP Address</InputGroupAddon>
                                    <Input placeholder="Server IP...." />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">CA</InputGroupAddon>
                                    <Input placeholder="server.ca" />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Cert</InputGroupAddon>
                                    <Input placeholder="branch-location.crt" />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Key</InputGroupAddon>
                                    <Input placeholder="branch-location.key" />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">TLS-Key</InputGroupAddon>
                                    <Input placeholder="server.ta" />
                                </InputGroup>
                                <br />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VpnForm;
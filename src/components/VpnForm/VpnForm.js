import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';

class VpnForm extends React.Component{
    constructor() {
        super();

        this.state = {
                ipaddr : '',
                certAuth : '',
                certificate : '',
                keyCert : '',
                tlsAuth : ''
            };
        this.submitData = this.submitData.bind(this);
    }

    submitData(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/vpn', this.state
        ).then(res => console.log(res.data)).catch(console.log);
    };

    inputSetState = (key, value) => {
        this.setState({[key]:value});

    };

    render() {
        return(
            <form onSubmit={this.submitData}>
                <Container className="mt-2">
                    <Row>
                        <Col lg="8">
                            <Card>
                                <CardBody>
                                    <CardTitle >VPN Form</CardTitle>
                                    <CardText>Below enter in the correct keys and certificates provided from the OpenVPN Server</CardText>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">IP Address</InputGroupAddon>
                                        <Input value={this.state.ipaddr} onChange={(e)=>this.inputSetState('ipaddr', e.target.value)} placeholder="Server IP...." />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">CA</InputGroupAddon>
                                        <Input value={this.state.certAuth} onChange={(e)=>this.inputSetState('certAuth', e.target.value)} placeholder="server.ca" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">Cert</InputGroupAddon>
                                        <Input value={this.state.certificate} onChange={(e)=>this.inputSetState('certificate', e.target.value)} placeholder="branch-location.crt" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">Key</InputGroupAddon>
                                        <Input value={this.state.keyCert} onChange={(e)=>this.inputSetState('keyCert', e.target.value)} placeholder="branch-location.key" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">TLS-Key</InputGroupAddon>
                                        <Input value={this.state.tlsAuth} onChange={(e)=>this.inputSetState('tlsAuth', e.target.value)} placeholder="server.ta" />
                                    </InputGroup>
                                    <br />
                                    <button type="submit">Submit</button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </form>
        );
    }

}

export default VpnForm;
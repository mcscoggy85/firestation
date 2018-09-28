import React from 'react';
import SubmitBtn from '../Buttons/Submit';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import { Alert } from 'reactstrap';

class VpnForm extends React.Component{
    constructor() {
        super();

        this.state = {
              ipaddr : '',
              ca : '',
              cert : '',
              key : '',
              ta : '',
              formAlert: ''
            };
        this.submitData = this.submitData.bind(this);
    }

    submitData(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/vpn', this.state
        ).then(res => {
            this.sendAlert(res)
            this.refreshComponents(e);
        }).catch(console.log);
    };

    inputSetState = (key, value) => {
        this.setState({[key]:value});

    };

    refreshComponents = (e) => {
        this.setState((prevState) => ({ipaddr: ''}));
        this.setState((prevState) => ({ca: ''}));
        this.setState((prevState) => ({cert: ''}));
        this.setState((prevState) => ({key: ''}));
        this.setState((prevState) => ({ta: ''}));
        setTimeout(()=>{
            this.setState((prevState)=> ({formAlert: ''}));
          }, 3000);
    }

    sendAlert(res){
        if (res.data.response === 'Firehol is complete....'){
          this.setState({formAlert: <Alert color="success">Submission Accepted</Alert>}) 
        } else {
          this.setState({formAlert: <Alert color="danger">Something went wrong, please consult the manual...</Alert>})
        };
      }

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
                                        <Input type="textarea" value={this.state.ca} onChange={(e)=>this.inputSetState('ca', e.target.value)} placeholder="server.ca" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">Cert</InputGroupAddon>
                                        <Input type="textarea" value={this.state.cert} onChange={(e)=>this.inputSetState('cert', e.target.value)} placeholder="branch-location.crt" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">Key</InputGroupAddon>
                                        <Input type="textarea" value={this.state.key} onChange={(e)=>this.inputSetState('key', e.target.value)} placeholder="branch-location.key" />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">TLS-Key</InputGroupAddon>
                                        <Input type="textarea" value={this.state.ta} onChange={(e)=>this.inputSetState('ta', e.target.value)} placeholder="server.ta" />
                                    </InputGroup>
                                    <br />
                                    <SubmitBtn/>
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
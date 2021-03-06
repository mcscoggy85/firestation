import React from 'react';
import SubmitBtn from '../Buttons/Submit';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap';
import axios from 'axios';
import { Alert } from 'reactstrap';

class FirewallForm extends React.Component {
    constructor() {
        super();

        this.state = {
          localNets: '',
          proxyNets: '',
          localIP: '',
          openVpnIP: '',
          formAlert: ''
        };
      this.submitData = this.submitData.bind(this);

    }

    inputSetState = (key, value) => {
      this.setState({[key]:value});

    };

    submitData(e){
      e.preventDefault();
      const token = localStorage.getItem('token');
      axios.post('http://localhost:3001/firewall', this.state, 
      {headers: {'Authorization': `Bearer ${token}`}}).then(res => {
          console.log(res.data);
          this.sendAlert(res);
          this.refreshComponents(e);
        }).catch(console.log);
    }

    refreshComponents = () => {
      this.setState({
        localNets: '',
        proxyNets: '',
        localIP: '',
        openVpnIP: ''
      });
      
      setTimeout(()=>{
        this.setState((prevState)=> ({formAlert: ''}));
      }, 4000);
    }

    sendAlert(res){
      if (res.data.response === 'Firehol is complete....'){
        this.setState({formAlert: 
        <Col sm="12" md={{ size: 8, offset: 2 }}><Alert color="success">Submission Accepted</Alert></Col>}) 
      } else {
        this.setState({formAlert: 
        <Col sm="12" md={{ size: 8, offset: 2 }}><Alert color="danger">Something went wrong, please consult the manual...</Alert></Col>})
      };
    }

    render() {
        return(
          <div>
            <form onSubmit={this.submitData}>
                <Container className="mt-2">
                    <Row>
                        <Col lg="8" >
                          <Card body inverse color='secondary'>
                            <CardHeader>
                              <CardTitle>Firewall Form</CardTitle>
                              <CardText>Below enter in the correct subnets and IP addresses</CardText>
                            </CardHeader>
                            <CardBody>
                              <InputGroup>
                                  <InputGroupAddon addonType="prepend">Local Subnet(s)</InputGroupAddon>
                                  <Input type="input" value={this.state.localNets} onChange={(e)=>this.inputSetState('localNets', e.target.value)} placeholder="10.0.0.0/8 172.16.0.0/16 192.168.0.0/24"/>
                              </InputGroup>
                              <br/>
                              <InputGroup>
                                  <InputGroupAddon addonType="prepend">Google Subnet(s)</InputGroupAddon>
                                  <Input type="input" value={this.state.proxyNets} onChange={(e)=>this.inputSetState('proxyNets', e.target.value)} placeholder="10.0.0.0/8 172.16.0.0/16 192.168.0.0/24"/>
                              </InputGroup>
                              <br/>
                              <InputGroup>
                                  <InputGroupAddon addonType="prepend">Local IP</InputGroupAddon>
                                  <Input type="input" value={this.state.localIP} onChange={(e)=>this.inputSetState('localIP', e.target.value)} placeholder="192.168.1.1"/>
                              </InputGroup>
                              <br/>
                              <InputGroup>
                                  <InputGroupAddon addonType="prepend">Tunnel IP</InputGroupAddon>
                                  <Input type="input" value={this.state.openVpnIP} onChange={(e)=>this.inputSetState('openVpnIP', e.target.value)} placeholder="10.233.110.10"/>
                              </InputGroup>
                              <br/>
                              <SubmitBtn/>
                            </CardBody>
                          </Card>
                        </Col>
                    </Row>
                </Container>
            </form>
            <br/>
            {this.state.formAlert}
          </div>
        );
    };
};

export default FirewallForm;
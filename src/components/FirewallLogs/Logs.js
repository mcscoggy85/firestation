import React from 'react';
import axios from 'axios';
import FWLogCard from './FWLogCard';
import { Row, Col, Alert } from 'reactstrap';

class FWLogs extends React.Component {
    constructor(){
        super();

        this.state = {
            data: {},
            ready: false
        };

    };
    getLogs = () => {
        axios.get('http://localhost:3001/status').
        then(response => {
            this.setState({data: response.data, ready: true}, ()=> console.log(this.state.data));
            console.log(this.state.data.firehol.ipTables);
        }).catch(err => console.log(err));

    }

    componentDidMount(){
        this.timer = setInterval(this.getLogs(),1000);
        // this.getLogs();
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        if (!this.state.ready){
            return(
                <Row>
                    <Col sm='6' className='ml-2'>
                        <Alert className='mt-2' color="danger">
                            Whoops... we are Loading data... Standby
                        </Alert>    
                    </Col>
                </Row>
                
            );
        };
        return(
          <FWLogCard firewallData={ this.state.data.firehol.ipTables }
                     cardTitle={'Firewall Exceptions'}
                     cardDescription={'Below is a listing the IP tables rule-sets'}/>
        );
    };
    
};

export default FWLogs;
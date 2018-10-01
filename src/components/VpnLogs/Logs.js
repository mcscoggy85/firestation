import React from 'react';
import axios from 'axios';
import VpnLogCard from './VpnLogCard';
import { Row, Col, Alert } from 'reactstrap';

class VpnLogs extends React.Component {
    constructor(){
        super();

        this.state = {
            data: '',
            ready: false
        };
    };
    
    render() {
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
            <div></div>
        );
    };
    
    
};

export default VpnLogs;
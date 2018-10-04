import React from 'react';
import axios from 'axios';
import VpnLogCard from './VpnLogCard';
import { Row, Col, Alert } from 'reactstrap';

class VpnLogs extends React.Component {
    constructor(){
        super();

        this.state = {
            statusLog: '',
            vpnLog: '',
            ready: false
        };
    };

    getLogs(){
        axios.get('http://localhost:3001/status').
        then((response) => {
            const vpnStatusData = response.data.logs.openvpn.stats
            const vpnLogData = response.data.logs.openvpn.logs
            
            this.setState({
                statusLog: vpnStatusData, 
                vpnLog: vpnLogData, 
                ready: true});

            // console.log(this.state.statusLog);
            // console.log(this.state.vpnLog);

        }).catch((err) => console.log(err));
    }

    componentDidMount(){
        this.getLogs();
    }
    
    render() {
        const { statusLog, vpnLog } = this.state;

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
            <div>
                <VpnLogCard 
                    openVpnStatus={ statusLog } 
                    openVpnLogs={ vpnLog }
                    openVpnStatusTitle={ 'OpenVpn Status Logs' }
                />
            </div>
        );
    };
    
    
};

export default VpnLogs;
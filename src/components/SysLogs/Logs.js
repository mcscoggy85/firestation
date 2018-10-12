import React from 'react';
import { 
    Row,
    Container, 
    Col, 
    Card, 
    CardBody, 
    CardTitle,
    CardHeader,
    Alert } from 'reactstrap';
import axios from 'axios';
import SysLogTable from '../FireStationTable/FSTables/DeviceLogs/SysLogInfo';

class SysLogs extends React.Component {
    constructor(){
        super();

        this.state = {
            sysLogData : {},
            ready : false
        };
    };

    getLogs(){
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3001/status',
        {headers: {'Authorization': `Bearer ${token}`}})
        .then((response) => {
            const syslogs = response.data;
            
            this.setState({
                sysLogData: syslogs,
                ready : true
            });
        }).catch(err => console.log(err));
    };

    componentDidMount(){
      this.getLogs();
    };


    render() {
      const { sysLogData } = this.state;

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
        
        <Container fluid>
            <Row>
              <Col>
                <Card className='mt-2'>
                  <CardHeader>
                    <CardTitle>Syslog Data</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <SysLogTable sysLogData={sysLogData}/>
                  </CardBody>
                </Card>      
              </Col>
            </Row>
        </Container>
      );
    }

};

export default SysLogs;
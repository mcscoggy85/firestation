import React from 'react';
import NetInfo from '../../FireStationTable/FSTables/NetworkInfo/NetInfoTable';
import DeviceInfo from '../../FireStationTable/FSTables/DeviceInfo/DeviceInfoTable'
import { 
    Row,
    Container,
    Col,
    Card,
    CardText, 
    CardBody,
    CardTitle
 } from 'reactstrap';

 const DeviceStatus = ({cardId, statusName, statusDescription, interfaceInfo, deviceInfo}) => {
    const interfaces = interfaceInfo[0]

    const rows = Object.keys(interfaces).map((interfaceName)=>{
        const info = interfaces[interfaceName][0];
        info.interface = interfaceName;
        return info;
        
    });

    return (
            <Container fluid id={ cardId } className='statsCard mt-2'>
                <Row>
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <CardTitle >{ statusName }</CardTitle>
                                <CardText>{ statusDescription }</CardText>
                                <NetInfo rows={ rows } />
                                <DeviceInfo sysInfo={ deviceInfo }/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    );
 }

 export default DeviceStatus;
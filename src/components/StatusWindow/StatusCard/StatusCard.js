import React from 'react';
import NetInfo from '../../FireStationTable/FSTables/NetInfoTable';
import { 
    Row,
    Container,
    Col,
    Card,
    Button,
    CardText, 
    CardBody,
    CardTitle
 } from 'reactstrap';

 const StatusCard = ({cardId, statusName, statusDescription, interfaceInfo}) => {
    const interfaces = interfaceInfo[0]

    const rows = Object.keys(interfaces).map((interfaceName)=>{
        const info = interfaces[interfaceName][0];
        info.interface = interfaceName;
        return info;
        
    });

    return (
            <Container id={ cardId } className="mt-2">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <CardTitle >{ statusName }</CardTitle>
                                <CardText>{ statusDescription }</CardText>
                                <NetInfo rows={ rows } />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
    //  return(
    
    //  );
 }

 export default StatusCard;
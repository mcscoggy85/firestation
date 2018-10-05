import React from 'react';
import RunningServicesInfo from '../../FireStationTable/FSTables/ServicesInfo/RunningServicesInfo';

import { 
    Row,
    Container,
    Col,
    Card,
    CardText, 
    CardBody,
    CardTitle
} from 'reactstrap';

const ServicesStatus = ({cardId, statusName, statusDescription, servicesInfo}) => {
    return(
        <Container id={ cardId } className='mt-2'>
            <Row>
                <Col md='8'>
                    <Card>
                        <CardBody>
                            <CardTitle>{ statusName }</CardTitle>
                            <CardText>{ statusDescription }</CardText>
                            <RunningServicesInfo servicesInfo={servicesInfo} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ServicesStatus;
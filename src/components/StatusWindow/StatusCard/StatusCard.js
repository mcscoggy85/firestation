import React from 'react';
import FSTable from '../../FireStationTable/FSTable';
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

 const StatusCard = ({cardId, statusName, statusDescription, statusButton, tableProps}) => {
     return(
         <div>
            <Container id={ cardId } className="mt-2">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <CardTitle >{ statusName }</CardTitle>
                                <CardText>{ statusDescription }</CardText>
                                 <FSTable { ...tableProps } />
                                {/* <Button className='status-btn' color="info">View More</Button> */}
                                {statusButton}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
         </div>
     );
 }

 export default StatusCard;
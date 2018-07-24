import React from 'react';
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

 const StatusCard = ({cardId, statusName, statusDescription, statusButton}) => {
     return(
         <div>
            <Container id={ cardId } className="mt-2">
                <Row>
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <CardTitle >{ statusName }</CardTitle>
                                <CardText>{ statusDescription }</CardText>
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
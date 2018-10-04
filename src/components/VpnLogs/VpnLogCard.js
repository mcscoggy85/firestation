import React from 'react';
import { 
    Row,
    Container, 
    Col, 
    Card, 
    CardBody, 
    CardTitle,
    CardText } from 'reactstrap'

    import { CsvToHtmlTable } from 'react-csv-to-table';

const VpnLogCard = (props) => {

    const newStats = props.openVpnStatus;
    console.log(newStats);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            {/* <CardTitle>{ props.openVpnStatusTitle }</CardTitle> */}
                            <CardBody>
                                <CsvToHtmlTable
                                    data={ newStats }
                                    csvDelimiter=','
                                    tableClassName="table table-striped table-hover"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default VpnLogCard;


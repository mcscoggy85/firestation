import React from 'react';
import { 
    Row,
    Container, 
    Col, 
    Card, 
    CardBody, 
    CardTitle,
    CardHeader,
    Table } from 'reactstrap'
import { CsvToHtmlTable } from 'react-csv-to-table';

const VpnLogCard = (props) => {

    const newStats = props.openVpnStatus;

    const renderOpenVpnLogs = props.openVpnLogs.map((log, i)=>{
        return(
          <tr key={`openVpnLogs-${i}`}>
            <td key={`logData-${i}`}>{log}</td>
          </tr>
        );
    });

    return (
        <div>
          <Container fluid center >
            <Row>
              <Col>
                <Card>
                  <CardBody>
                      <CsvToHtmlTable
                          data={ newStats }
                          csvDelimiter=','
                          tableClassName="table table-striped table-hover"
                      />
                  </CardBody>
                </Card>
                <Card className='mt-2'>
                  <CardHeader>
                    <CardTitle>OpenVpn Logs</CardTitle>
                  </CardHeader>
                  <CardBody>
                      <Table>
                          <tbody>
                              { renderOpenVpnLogs }
                          </tbody>
                      </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
    );
};

export default VpnLogCard;


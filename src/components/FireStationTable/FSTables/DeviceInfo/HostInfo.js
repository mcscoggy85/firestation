import React from 'react';
import { Table } from 'reactstrap';

const HostInfo = (props) => {
    return(
        <Table responsive>
          <thead>
            <tr>
              <th>Host Name</th>
              <th>Kernal</th>
              <th>Cores</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ props.sysInfo.hostName }</td>
              <td>{ props.sysInfo.release }</td>
              <td>{props.sysInfo.cores}</td>
            </tr>
          </tbody>
        </Table>
    );
};

export default HostInfo;
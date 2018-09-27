import React from 'react';
import { Table } from 'reactstrap';

const UpTimeInfo = (props) => {

  const upDays = Math.floor(((props.sysInfo/60)/60)/60);
  const upHours = Math.floor((props.sysInfo/60)/60);
  const upMins = Math.floor((props.sysInfo/60));
    
    return(
        <Table dark responsive>
          <thead>
            <tr>
              <th>SYSTEM INFO</th>
              <th>Days</th>
              <th>Hours</th>
              <th>Minutes</th>
              <th>Seconds</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uptime</td>
              <td>{ upDays }</td>
              <td>{ upHours }</td>
              <td>{ upMins }</td>
              <td>{ props.sysInfo }</td>
            </tr>
          </tbody>
        </Table>
    );
};

export default UpTimeInfo;
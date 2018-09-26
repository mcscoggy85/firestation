import React from 'react';
import { Table } from 'reactstrap';


const DeviceInfo = (props) => {
   
    const loadAvg = props.sysInfo.laodAverage.map((avg, i)=> {
      return (
        <td key={`average-${i}`}>{ avg.toFixed(2) }</td>
      );
    });

      
    const upDays = Math.floor(((props.sysInfo.uptime/60)/60)/60);
    const upHours = Math.floor((props.sysInfo.uptime/60)/60);
    const upMins = Math.floor((props.sysInfo.uptime/60));
    const upSecs = Math.floor((props.sysInfo.uptime));

    const totalMemory = Math.floor((((props.sysInfo.toatsMem/1024)/1024)));

    return (
      <div>
        <Table responsive >
          <thead>
            <tr>
                <th>CPU INFO</th>
                <th>5 Min</th>
                <th>15 Min</th>
                <th>30 Min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Load Average</td>
              { loadAvg }
            </tr>         
          </tbody>
        </Table>
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
              <td>{ upSecs }</td>
            </tr>
          </tbody>
        </Table>
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
        <Table dark responsive>
          <thead>
            <tr>
              <th>Total Memory</th>
              <th>Used Memory</th>
              <th>Free Memory</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{ totalMemory } MB</td>
              <td>{ props.sysInfo.usedMem * 1024} MB</td>
              <td>{ props.sysInfo.freeMem * 1024} MB</td>
            </tr>
          </tbody>
        </Table>
      </div>
        
    );
};

export default DeviceInfo;

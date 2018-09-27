import React from 'react';
import { Table } from 'reactstrap';
import CpuInfoTable from './CpuInfo';
import UpTimeInfo from './UpTimeInfo';
import HostInfo from './HostInfo';
import MemoryInfo from './MemoryInfo';

const DeviceInfo = (props) => {

    return (
      <div>
        <CpuInfoTable ldAvg = { props.sysInfo.laodAverage }/>
        <UpTimeInfo sysInfo = { props.sysInfo.uptime }/>
        <HostInfo sysInfo = { props.sysInfo } />
        <MemoryInfo sysInfo = { props.sysInfo }/>
      </div>
        
    );
};

export default DeviceInfo;

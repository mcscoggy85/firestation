import React from 'react';
import { Table } from 'reactstrap';

const MemoryInfo = (props) => {
    
    const totalMemory = Math.floor((((props.sysInfo.toatsMem/1024)/1024)));

    return(
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
    );
};

export default MemoryInfo;
import React from 'react';
import { Table } from 'reactstrap';


const SysLogTable = (props) => {
    
  const renderSysLogs = props.sysLogData.logs.systems.sysLog.map((log, i)=> {
    return(
             <tr key={`sysLogs-${i}`}>
                 <td key={`syslogData-${i}`}>{log}</td>
             </tr>
    );
  });

  return (
    <Table>
      <tbody>
        { renderSysLogs }
      </tbody>
    </Table>
  );
};

export default SysLogTable;
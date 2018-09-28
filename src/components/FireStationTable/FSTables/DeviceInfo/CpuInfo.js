import React from 'react';
import { Table } from 'reactstrap';

const CpuInfoTable = ({ldAvg}) => {

    const loadAverage = ldAvg.map((avg, i)=> {
        return(
            <td key={`average-${i}`}>{ avg.toFixed(2) }</td>
        );
    });

    return(
        <Table>
            <thead>
            <tr>
                <th>CPU INFO</th>
                <th>1 Min</th>
                <th>5 Min</th>
                <th>15 Min</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Load Average</td>
                { loadAverage }
            </tr>         
          </tbody>
        </Table>
    );
}

export default CpuInfoTable;
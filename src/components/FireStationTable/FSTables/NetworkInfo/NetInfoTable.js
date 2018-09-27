import React from 'react';
import { Table } from 'reactstrap';


const NetInfo = (props)=> {

    const info = props.rows.map((row, i) => {
        return (
            <tr key={`FSTable-netinfo-${i}`}>
                <td>{ row.interface }</td>
                <td>{ row.address }</td>
                <td>{ row.netmask }</td>
                <td>{ row.mac }</td>
            </tr>
        );
    });
    
    // console.log(props)
    return(
            <Table dark responsive>
                <thead>
                    <tr>
                        <th>Interface</th>
                        <th>IP Address</th>
                        <th>Subnet Mask</th>
                        <th>Mac Address</th>
                    </tr>
                </thead>
                <tbody>
                    { info } 
                </tbody>
            </Table>
    );
};

export default NetInfo; 

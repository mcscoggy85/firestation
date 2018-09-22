import React from 'react';
import { Table } from 'reactstrap';


const FSTable = ({deviceInterface, deviceIP, vpnInterface, vpnIP})=> {
    return(
        <div>
            <Table dark responsive>
                <thead>
                    <tr>
                        <th>Interface</th>
                        <th>IP Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ deviceInterface }</td>
                        <td>{ deviceIP }</td>
                    </tr>
                    <tr>
                        <td>{ vpnInterface }</td>
                        <td>{ vpnIP }</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default FSTable; 

import React from 'react';
import { Table } from 'reactstrap';


const RunningServices = (props) => {
    
    let fwStatus;
    let vpnStatus;

    if (!props.servicesInfo.firewall.on) {
        fwStatus = <td><img src={'../../../../../images/status-off.png'}/></td>
    } else {
        fwStatus = <td><img src={'../../../../../images/status-on.png'}/></td>
    };

    if (!props.servicesInfo.vpnStatus.on) {
        vpnStatus = <td><img src={'../../../../../images/status-off.png'}/></td>
    } else {
        vpnStatus = <td><img src={'../../../../../images/status-on.png'}/></td>
    };

    return(
        <Table dark responsive>
            <thead>
                <tr>
                    <th>FireHole</th>
                    <th>OpenVPN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    { fwStatus }
                    { vpnStatus }
                </tr>
            </tbody>
        </Table>
    );
};

export default RunningServices;

import React from 'react';
import StatusCard from './StatusCard/StatusCard.js'
import OverViewStat from './StatusModal/OverViewStat.js'


const Stats = () => {
  return (
    <div>
        <StatusCard statusName='Over View Status' 
        statusDescription='To view the Overall STATUS of the device please click "View More" below.'
        cardId='over-view-status'
        statusButton={<OverViewStat/>}/>
        <StatusCard statusName='VPN Status' 
        statusDescription='To view the VPN STATUS of the device please click "View More" below.'
        cardId='vpn-status'/>
        <StatusCard statusName='Firewall Status' 
        statusDescription='To view the Firewall STATUS of the device please click "View More" below.'
        cardId='firwall-status'/>
    </div>
  );
};

export default Stats;
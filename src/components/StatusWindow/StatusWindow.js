import React from 'react';
import DeviceStatus from './DeviceStatusCard/DeviceStatus';
import ServiceStats from './ServiceStatsCard/ServiceStatus';
import axios from 'axios';



class Stats extends React.Component {
    constructor() {
        super();

        this.state = {
            data : {},
            ready : false
        };
    };

    serverData = () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:3001/status',
        {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => {
                this.setState({
                  data : res.data, 
                  ready : true});
            }).catch(err => console.log(err));
    };

    componentDidMount() {
        this.timer = setInterval(this.serverData, 1000);
        // this.serverData();
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    };


    render() {
        if (!this.state.ready){
            return 'Loading...'
        }
        return (
            <div className='statsCard'>
                <DeviceStatus statusName='Device Overview'
                            statusDescription='This is the overall status of the device.'
                            cardId='over-view-status'
                            // statusButton={<button>Somthing</button>}
                            interfaceInfo={ this.state.data.systemInfo.interfaceInfo }
                            deviceInfo={ this.state.data.systemInfo }/>
                <ServiceStats cardId='systemd-services-overview'
                              statusDescription='SystemD services that need to be running.'
                              statusName='SystemD Services Overiew'
                              servicesInfo={ this.state.data.sysd }/>
            </div>
        );
    };

};

export default Stats;
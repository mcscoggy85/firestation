import React from 'react';
import DeviceStatusCard from './DeviceStatusCard/DeviceStatus';
import ServiceStats from './ServiceStatsCard/ServiceStats';
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
        axios.get('http://localhost:3001/status')
            .then(res => {
                this.setState({data : res.data, ready : true}, () => console.log(this.state.data));
            }).catch(err => console.log(err));
    };

    componentDidMount() {
        // this.timer = setInterval(this.serverData, 3000);
        this.serverData();
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
                <DeviceStatusCard statusName='Device Overview'
                            statusDescription='This is the overall status of the device.'
                            cardId='over-view-status'
                            // statusButton={<button>Somthing</button>}
                            interfaceInfo={ this.state.data.systemInfo.interfaceInfo }
                            deviceInfo={ this.state.data.systemInfo }/>
                {/* <ServiceStats /> */}
            </div>
        );
    };

};

export default Stats;
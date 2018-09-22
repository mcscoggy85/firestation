import React from 'react';
import StatusCard from './StatusCard/StatusCard.js'
import axios from 'axios'



class Stats extends React.Component {
    constructor() {
        super();

        this.state = {
            data : {},
            ready : false
        }
    }

    serverData = () => {
        axios.get('http://localhost:3001/status')
            .then(res => {
                this.setState({data : res.data, ready : true}, () => console.log(this.state.data));
            }).catch(err => console.log(err))
    };

    componentDidMount() {
        // this.timer = setInterval(this.serverData, 3000);
        this.serverData();
    }

    componenWillUnmount() {
        clearInterval(this.timer)
    }


    render() {
        if (!this.state.ready){
            return 'Loading...'
        }
        return (
            <div>
                <StatusCard statusName='Over View Status'
                            statusDescription='To view the Overall STATUS of the device please click "View More" below.'
                            cardId='over-view-status'
                            // statusButton={<button>Somthing</button>}
                            interfaceInfo={ this.state.data.systemInfo.interfaceInfo }
                            deviceInfo={ this.state.data.systemInfo }/>
            </div>
        );
    }

};

export default Stats;
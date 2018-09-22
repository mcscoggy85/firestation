import React from 'react';
import StatusCard from './StatusCard/StatusCard.js'
import axios from 'axios'



class Stats extends React.Component {
    constructor() {
        super();

        this.state = {
            data : {}
        }
    }

    serverData = () => {
        axios.get('http://localhost:3001/status')
            .then(res => {
                this.setState({data : res.data}, () => console.log(this.state.data));
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
        return (
            <div>
                <StatusCard statusName='Over View Status'
                            statusDescription='To view the Overall STATUS of the device please click "View More" below.'
                            cardId='over-view-status'
                            statusButton={<button>Somthing</button>}
                    tableProps={ this.data.systemInfo.interfaceInfo }/>
            </div>
        );
    }

};

export default Stats;
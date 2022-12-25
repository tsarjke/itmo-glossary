import React, {useState} from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

require('highcharts/modules/networkgraph')(Highcharts);

const MindMap: React.FC<{ data: any[] }> = ({data}) => {
    const [chartOptions, ] = useState({
        chart: {
            type: 'networkgraph',
            marginTop: 60
        },
        title: {
            text: 'Mindmap'
        },
        plotOptions: {
            networkgraph: {
                keys: ['from', 'to']
            }
        },
        series: [
            {
                type: "networkgraph",
                marker: {
                    radius: 20
                },
                color: '#f0d3c1',
                dataLabels: {
                    enabled: true,
                    linkFormat: '',
                    allowOverlap: true
                },
                data
            }
        ],
        credits: {
            enabled: false
        }
    });

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
        </div>
    );
}

export default MindMap;

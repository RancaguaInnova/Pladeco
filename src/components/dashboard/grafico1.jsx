import Chart from 'react-google-charts'
import React, { PureComponent } from 'react'



export default class Chart1 extends PureComponent {
  render() {
    return (

            <Chart
              width={'100%'}
              height={'300px'}
              chartType='ComboChart'
              loader={<div>Loading Chart</div>}
              data={[
                ['Area', 'Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6'],
                ['2019/05', 12, 22, 22, 98, 50, 14],
                ['2019/06', 135, 120, 99, 268, 288, 82],
                ['2019/07', 157, 167, 87, 7, 97, 23],
                ['2019/08', 139, 110, 15, 68, 15, 9],
                ['2019/09', 136, 91, 29, 26, 66, 69]
              ]}
              options={{
                title: 'Actividades completadas por area',
                vAxis: { title: 'Actividades' },
                hAxis: { title: 'Meses' },
                seriesType: 'bars',
                series: { 5: { type: 'line' } },
                animation: {
                  startup: true,
                  easing: 'linear',
                  duration: 1500
                },
                enableInteractivity: true
              }}
              rootProps={{ 'data-testid': '1' }}
            />

    )
  }
}

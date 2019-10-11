import Chart from 'react-google-charts'
import React, { PureComponent } from 'react'

export default class ChartMonth extends PureComponent {
  render() {
    return (
        <Chart
        width={'100%'}
        height={'350px'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Area', '% Avance'],
          ['Area 1', 20],
          ['Area 2', 30],
          ['Area 3', 10],
          ['Area 4', 56],
          ['Area 5', 1],
        ]}
        options={{
          title: 'Avance actual de las Areas',
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Avance',
            minValue: 0,
          },
          vAxis: {
            title: 'Areas',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '1' }}
      />
    )
  }
}

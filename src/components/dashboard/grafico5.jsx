import Chart from 'react-google-charts'
import React, { PureComponent } from 'react'

export default class ChartMonth extends PureComponent {
  render() {
    return (
      <Chart
        width={'100%'}
        height={'350px'}
        chartType='Gantt'
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'string', label: 'Actividad ID' },
            { type: 'string', label: 'Nombre de la Actividad' },
            { type: 'string', label: 'Recurso' },
            { type: 'date', label: 'Fecha de Inicio' },
            { type: 'date', label: 'Fecha de Fin' },
            { type: 'number', label: 'Duración' },
            { type: 'number', label: 'Porcentaje completo' },
            { type: 'string', label: 'Dependencias' }
          ],
          [
            '2',
            'Objetivo 2',
            'Objetivo 2',
            new Date(2019, 0, 1),
            new Date(2019, 0, 30),
            5 * 60 * 1000,
            80,
            null
          ],
          [
            '1',
            'Objetivo 1',
            'Objetivo 1',
            new Date(2019, 1, 1),
            new Date(2019, 1, 30),
            70 * 60 * 1000,
            100,
            null
          ],
          [
            '3',
            'Objetivo 3',
            'Objetivo 3',
            new Date(2019, 2, 1),
            new Date(2019, 2, 30),
            10 * 60 * 1000,
            100,
            '2'
          ],
          [
            '4',
            'Objetivo 4',
            'Objetivo 4',
            new Date(2019, 3, 1),
            new Date(2019, 3, 30),
            45 * 60 * 1000,
            75,
            '1'
          ],
          [
            '5',
            'Objetivo 5',
            'Objetivo 5',
            new Date(2019, 4, 1),
            new Date(2019, 4, 30),
            10 * 60 * 1000,
            0,
            '2'
          ],
          [
            '6',
            'Objetivo 6',
            'Objetivo 6',
            new Date(2019, 5, 1),
            new Date(2019, 5, 30),
            2 * 60 * 1000,
            0,
            '5'
          ]
        ]}
        options={{
          title: '',
          animation: {
            startup: true,
            easing: 'linear',
            duration: 1500,
          },
          gantt: {
            criticalPathEnabled: true,
            criticalPathStyle: {
              stroke: '#e64a19',
              strokeWidth: 5
            }
          }
        }}
        rootProps={{ 'data-testid': '5' }}
      />
    )
  }
}

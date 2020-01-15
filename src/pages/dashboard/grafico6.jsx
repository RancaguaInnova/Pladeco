import Chart from "react-google-charts"
import React, { PureComponent } from "react"

export default class Chart3 extends PureComponent {
  render() {
    return (
      <Chart
        width={"100%"}
        height={300}
        chartType="Calendar"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "date", id: "Date" },
            { type: "number", id: "Won/Loss" },
          ],
          [new Date(2019, 3, 13), 37032],
          [new Date(2019, 3, 14), 38024],
          [new Date(2019, 3, 15), 38024],
          [new Date(2019, 3, 16), 38108],
          [new Date(2019, 3, 17), 38229],

          [new Date(2020, 1, 4), 38177],
          [new Date(2020, 1, 5), 38705],
          [new Date(2020, 1, 12), 38210],
          [new Date(2020, 1, 13), 38029],
          [new Date(2020, 1, 19), 38823],
          [new Date(2020, 1, 23), 38345],
          [new Date(2020, 1, 24), 38436],
          [new Date(2020, 2, 10), 38447],
        ]}
        options={{
          title: "Calendario de actividades",
          animation: {
            startup: true,
            easing: "linear",
            duration: 1500,
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    )
  }
}

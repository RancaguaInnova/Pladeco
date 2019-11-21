import Chart from "react-google-charts"
import React, { PureComponent } from "react"

export default class Chart2 extends PureComponent {
  render() {
    return (
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Area", "Actividades"],
          ["Area 1", 11],
          ["Area 2", 5],
          ["Area 3", 3],
          ["Area 4", 4],
          ["Area 5", 7],
        ]}
        options={{
          title: "Actividades ",
          // Just add this option
          is3D: true,
          animation: {
            startup: true,
            easing: "linear",
            duration: 1500,
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    )
  }
}

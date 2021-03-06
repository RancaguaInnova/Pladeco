import Chart from "react-google-charts"
import React, { PureComponent } from "react"

export default class Chart3 extends PureComponent {
  render() {
    return (
      <Chart
        width={"100%"}
        height={"300"}
        chartType="Line"
        loader={<div>Loading Chart</div>}
        data={[
          [{ type: "date", label: "Day" }, "Average temperature", "Average hours of daylight"],
          [new Date(2014, 0), -0.5, 5.7],
          [new Date(2014, 1), 0.4, 8.7],
          [new Date(2014, 2), 0.5, 12],
          [new Date(2014, 3), 2.9, 15.3],
          [new Date(2014, 4), 6.3, 18.6],
          [new Date(2014, 5), 9, 20.9],
          [new Date(2014, 6), 10.6, 19.8],
          [new Date(2014, 7), 10.3, 16.6],
          [new Date(2014, 8), 7.4, 13.3],
          [new Date(2014, 9), 4.4, 9.9],
          [new Date(2014, 10), 1.1, 6.6],
          [new Date(2014, 11), -0.2, 4.5],
        ]}
        options={{
          chart: {
            title: "Average Temperatures and Daylight in Iceland Throughout the Year",
          },
          width: 900,
          height: 500,
          series: {
            // Gives each series an axis name that matches the Y-axis below.
            0: { axis: "Temps" },
            1: { axis: "Daylight" },
          },
          axes: {
            // Adds labels to each axis; they don't have to match the axis names.
            y: {
              Temps: { label: "Temps (Celsius)" },
              Daylight: { label: "Daylight" },
            },
          },
          animation: {
            startup: true,
            easing: "in",
            duration: 2000,
          },
        }}
        rootProps={{ "data-testid": "4" }}
      />
    )
  }
}

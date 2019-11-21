import Chart from "react-google-charts"
import React, { PureComponent } from "react"

export default class ChartMonth extends PureComponent {
  render() {
    return (
      <Chart
        width={"100%"}
        height={350}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["day", "a", "b", "c", "d"],
          ["Mon", 20, 28, 38, 45],
          ["Tue", 31, 38, 55, 66],
          ["Wed", 50, 55, 77, 80],
          ["Thu", 77, 77, 66, 50],
          ["Fri", 68, 66, 22, 15],
        ]}
        options={{
          legend: "none",
          bar: { groupWidth: "100%" }, // Remove space between bars.
          animation: {
            startup: true,
            easing: "linear",
            duration: 1500,
          },
          candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
            risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    )
  }
}

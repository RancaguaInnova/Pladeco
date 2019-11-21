import Chart from "react-google-charts"
import React, { PureComponent } from "react"

export default class Chart3 extends PureComponent {
  render() {
    return (
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        data={[
          ["From", "To", "Weight"],
          ["Accion 1", "Accion 4", 5],
          ["Accion 1", "Accion 4", 1],
          ["Accion 1", "Accion 4", 1],
          ["Accion 1", "Accion 4", 1],
          ["Accion 2", "Accion 4", 1],
          ["Accion 2", "Accion 4", 5],
          ["Accion 2", "Accion 4", 1],
          ["Accion 3", "Accion 4", 1],
          ["Accion 3", "Accion 4", 1],
          ["Accion 4", "Accion 8", 5],
          ["Accion 4", "Accion 8", 1],
          ["Accion 5", "Accion 6", 1],
          ["Accion 5", "Accion 10", 1],
          ["Accion 5", "Accion 11", 1],
          ["Accion 6", "accion 11", 5],
          ["Accion 7", "accion 11", 2],
          ["Accion 7", "accion 11", 1],
          ["Accion 7", "accion 11", 1],
          ["Accion 8", "Accion 9", 3],
          ["Accion 8", "Accion 9", 1],
          ["Accion 8", "Accion 9", 3],
          ["Accion 9", "Accion 12", 3],
          ["Accion 9", "Accion 10", 3],
          ["Accion 9", "Accion 10", 1],
          ["Accion 9", "Accion 10", 1],
          ["Accion 10", "Accion 12", 3],
          ["Accion 10", "Accion 12", 1],
          ["Accion 10", "Accion 12", 1],
          ["Accion 10", "Accion 12", 1],
          ["Accion 11", "Accion 12", 2],
          ["Accion 11", "Accion 12", 7],
          ["Accion 11", "Accion 12", 5],
          ["Accion 11", "Accion 12", 1],
          ["Accion 12", "Accion 13", 3],
          ["Accion 12", "Accion 13", 5],
          ["Accion 12", "Accion 13", 1],
        ]}
        options={{
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

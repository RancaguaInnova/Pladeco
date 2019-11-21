import Chart from "react-google-charts"
import React, { PureComponent } from "react"

export default class Chart3 extends PureComponent {
  render() {
    return (
      <Chart
        width={"100%"}
        height={"200px"}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: "string", id: "Position" },
            { type: "string", id: "Name" },
            { type: "date", id: "Start" },
            { type: "date", id: "End" },
          ],
          ["Area 1", "Encargado 1", new Date(2018, 0, 1), new Date(2018, 4, 30)],
          ["Area 1", "Encargado 2", new Date(2018, 5, 1), new Date(2018, 7, 30)],
          ["Area 1", "Encargado 3", new Date(2018, 8, 1), new Date(2018, 9, 30)],
          ["Area 1", "Encargado 4", new Date(2018, 10, 1), new Date(2019, 9, 30)],
          ["Area 2", "Encargado 5", new Date(2018, 0, 1), new Date(2018, 2, 30)],
          ["Area 2", "Encargado 6", new Date(2018, 3, 1), new Date(2018, 4, 30)],
          ["Area 2", "Encargado 7", new Date(2018, 5, 1), new Date(2018, 6, 30)],
          ["Area 3", "Encargado 8", new Date(2018, 0, 1), new Date(2019, 2, 30)],
          ["Area 3", "Encargado 9", new Date(2019, 2, 1), new Date(2019, 3, 30)],
          ["Area 3", "Encargado 9", new Date(2019, 4, 1), new Date(2019, 5, 30)],
          ["Area 3", "Encargado 9", new Date(2019, 6, 1), new Date(2019, 7, 30)],
          ["Area 3", "Encargado 8", new Date(2019, 8, 1), new Date(2019, 11, 30)],
        ]}
        options={{
          animation: {
            startup: true,
            easing: "linear",
            duration: 1500,
          },
        }}
        rootProps={{ "data-testid": "3" }}
      />
    )
  }
}

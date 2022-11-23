import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RadialBarChart, RadialBar } from "recharts";

const data = [
  { x: 360, fill: "#8742F7" },
  { x: 250, fill: "#DE42F7" },
  { x: 185, fill: "#F74299" },
  { x: 125, fill: "#F74242" },
  { x: 144, fill: "#F77842" },
  { x: 180, fill: "#FFC701" },
  { x: 111, fill: "#42F7A0" },
  { x: 144, fill: "#42CCF7" },
  { x: 200, fill: "#4295F7" },
  { x: 330, fill: "#6D96FF" },
];

const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => ({
  name: "",
  x: 1,
  fill: "#DADADA",
}));

function RadialChart({
  chartStart,
  setChartStart,
}: {
  chartStart: boolean;
  setChartStart: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    document.addEventListener("aos:in:chart-visible", () => {
      setChartStart(true);
      console.log("chart triggered");
    });
    console.log("listener added");
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-id="chart-visible"
      className="chart__radial-bar-chart"
    >
      {chartStart ? (
        <>
          <div className="background">
            <RadialBarChart
              barSize={14}
              barCategoryGap={18.5}
              innerRadius={18}
              outerRadius="100%"
              width={596}
              height={596}
              data={fakeData}
            >
              <RadialBar min={15} dataKey="x" />
            </RadialBarChart>
          </div>
          <RadialBarChart
            barSize={14}
            barCategoryGap={18.5}
            // barGap={18.5}
            innerRadius={18}
            outerRadius="100%"
            width={596}
            height={596}
            data={data}
            startAngle={110}
            endAngle={470}
          >
            <RadialBar
              animationDuration={4000}
              animationEasing="linear"
              min={15}
              dataKey="x"
            />
          </RadialBarChart>
        </>
      ) : null}
    </div>
  );
}

export default RadialChart;

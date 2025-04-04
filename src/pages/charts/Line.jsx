// filepath: c:\Users\HP\Desktop\Practice\Dashboard\src\pages\charts\Line.jsx
import React from "react";

import { LineChart, ChartsHeader } from "../../components";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/Context";

const Line = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Inflation Rate" />
      <div className="w-full">
        <LineChart
          id="line-chart"
          height="400px"
          width="100%"
          data={lineCustomSeries}
          primaryXAxis={{
              ...LinePrimaryXAxis,
              labelStyle: currentMode === 'Dark' ? { color: 'white' } : {}, // Set X-axis label color to white in dark mode
                      titleStyle: currentMode === 'Dark' ? { color: 'white' } : {},
            }}
            primaryYAxis={{
              ...LinePrimaryYAxis,
              labelStyle: currentMode === 'Dark' ? { color: 'white' } : {}, // Set X-axis label color to white in dark mode
              titleStyle: currentMode === 'Dark' ? { color: 'white' } : {},
            }}
            background="transparent" 
         
        />
      </div>
    </div>
  );
};

export default Line;

import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';

const LineChart = ({ id, height, width, data, primaryXAxis, primaryYAxis, background }) => {
  return (
    <ChartComponent
      id={id}
      height={height}
      width={width}
      primaryXAxis={primaryXAxis}
      primaryYAxis={primaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={background}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {data.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart;

import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width, height, background, textColor }) => {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={{
        ...stackedPrimaryXAxis,
        labelStyle: { color: textColor }, // Use textColor prop
        titleStyle: { color: textColor }, // Use textColor prop
      }}
      primaryYAxis={{
        ...stackedPrimaryYAxis,
        labelStyle: { color: textColor }, // Use textColor prop
        titleStyle: { color: textColor }, // Use textColor prop
      }}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={background} // Use background prop
      legendSettings={{ background: 'transparent', textStyle: { color: textColor } }} // Use textColor for legend
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
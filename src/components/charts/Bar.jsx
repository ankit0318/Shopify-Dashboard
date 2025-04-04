import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, Category, DataLabel, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/Context';

const BarChart = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="w-full">
      <ChartComponent
        id="charts"
        primaryXAxis={{
          ...barPrimaryXAxis,
          labelStyle: { color: currentMode === 'Dark' ? '#e0e0e0' : '#333' }
        }}
        primaryYAxis={{
          ...barPrimaryYAxis,
          labelStyle: { color: currentMode === 'Dark' ? '#e0e0e0' : '#333' }
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        legendSettings={{ 
          background: currentMode === 'Dark' ? '#33373E' : 'white',
          textStyle: { color: currentMode === 'Dark' ? '#e0e0e0' : '#333' }
        }}
        height="300px"
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default BarChart;
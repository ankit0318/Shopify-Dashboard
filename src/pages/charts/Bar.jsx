import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/Context';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" className="text-gray-800 dark:text-gray-200" />
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
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
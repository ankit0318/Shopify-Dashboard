import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/Context';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" className="text-gray-800 dark:text-gray-200" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={{
            ...ColorMappingPrimaryXAxis,
            labelStyle: { color: currentMode === 'Dark' ? '#e0e0e0' : '#333' }
          }}
          primaryYAxis={{
            ...ColorMappingPrimaryYAxis,
            labelStyle: { color: currentMode === 'Dark' ? '#e0e0e0' : '#333' }
          }}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ 
            mode: 'Range', 
            background: currentMode === 'Dark' ? '#33373E' : 'white',
            textStyle: { color: currentMode === 'Dark' ? '#e0e0e0' : '#333' }
          }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
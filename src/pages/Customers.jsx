import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-grids/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: false, allowEditing: false };

  return (
    <div className="m-4 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
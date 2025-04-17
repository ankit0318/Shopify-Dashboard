import React from "react";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-grids/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  const editing = { allowDeleting: false, allowEditing:false,mode:'Normal' };
  return (
    <div className=" box-border border outline outline-1 bg-white    dark:bg-secondary-dark-bg    rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        editSettings={editing}
        contextMenuItems={[
          "AutoFit",
          "AutoFitAll",
          "SortAscending",
          "SortDescending",
          "Copy",
          "PdfExport",
          "ExcelExport",
          "CsvExport",
        ]}
  
        toolbar={["Add", "Edit", "Delete", "Update", "Cancel"]}
        pageSettings={{ pageCount: 5 }}
        
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Orders;

import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { Input, Button } from "antd";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const handleGridReady = (params) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);
    // const statusFilter = params.api.getFilterInstance("status");
    // statusFilter.setModel({
    //   type: "contains",
    //   filter: "pending",
    // });
    // params.api.onFilterChanged();

    /* fetch data here to populate tables */
  };

  const rowData = [
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "vaishnavi",
      status: "OFD",
      CPT: "15/12/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "bhoomika",
      status: "DELIVERED",
      CPT: "30/15/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "sakshi meena(meher)",
      status: "NEW",
      CPT: "28/12/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "aditi",
      status: "IN_TRANSIT",
      CPT: "27/12/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "aditi",
      status: "IN_TRANSIT",
      CPT: "27/12/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "aditi",
      status: "IN_TRANSIT",
      CPT: "27/12/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
    {
      Order_Id: "ASHXXXXXXBNM",
      Seller_Name: "aditi",
      status: "IN_TRANSIT",
      CPT: "27/12/2017",
      Destination: "123,Lorem Ipsum, Koramangala 4th Block",
    },
  ];

  const columnDefs = [
    {
      headerName: "Order_Id",
      field: "Order_Id",
      width: 150,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: "Seller_Name",
      field: "Seller_Name",
      width: 150,
      sortable: true,
      // filter: "agTextColumnFilter",
    },
    {
      headerName: "status",
      field: "status",
      width: 150,
      // filter: "agSetColumnFilter",
      // filterParams: {
      //   values: [
      //     "NEW",
      //     "SELLER_RECEIVED",
      //     "IN_TRANSIT",
      //     "RECEIVED_AT_HUB",
      //     "OFD",
      //     "DELIVERED",
      //   ],
      // },
      // cellStyle: (params) => console.log(params),
    },
    {
      headerName: "CPT",
      field: "CPT",
      width: 150,
      sortable: true,
      comparator: (valueA, valueB) => {
        const a = new Date(valueA).getTime();
        const b = new Date(valueB).getTime();
        if (a === b) return 0;
        else if (a > b) return 1;
        else return -1;
      },
      filter: "agDateColumnFilter",
    },
    {
      headerName: "Destination",
      field: "Destination",
      width: 150,
      // filter: "agTextColumnFilter",
    },
    {
      headerName: "Action",
      field: "action",
      cellRenderer: "RowButton",
      filter: false,
      floatingFilter: false,

    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    flex: 1,
    floatingFilter: true,
    resizable: true,
    tooltipField: "Order_Id",
  };

  // will get row data, from here
  const onSelectionChanged = (event) => {
    console.log(event.api.getSelectedRows());
  };

  // add a condition for a row to be selectable
  const isRowSelectable = (node) => {
    // make it false or true
    // console.log("nod data", node.data);   // get row data
    return true;
  };

  const onFilterTextChange = (event) => {
    console.log(event.target.value);
    gridApi.setQuickFilter(event.target.value);
  };

  return (
    <body style={{ backgroundColor: "white", height: "100vh" }}>
      <div style={{ padding: "30px" }}>
        <h1>All orders</h1>
      </div>
      <div style={{ color: "black", width: "500px" }}>
        <Input
          type="search"
          placeholder="search an order"
          onChange={onFilterTextChange}
          allowClear
          style={{ display: "flex", flex: 1 }}
        />
      </div>
      <div
        style={{
          display: "flex",
          // minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          background: "pink",
        }}
      >
        <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={handleGridReady}
            postSort={() => console.log("sorting complete")}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10}
            paginationAutoPageSize={true}
            onSelectionChanged={onSelectionChanged}
            isRowSelectable={isRowSelectable}
            rowSelection="multiple"
            rowDeselection="true"
            rowMultiSelectWithClick="false"
            singleClickEdit="true"
            animateRows="true"
            enableRangeSelection="true"
            sideBar="sideBar"
            enableBrowserTooltips={true}
            frameworkComponents={{ RowButton }}
          />
        </div>
      </div>
    </body>
  );
};

export default App;

const RowButton = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Button type="primary" style={{ textAlign: "center" }}>
        received
      </Button>
    </div>
  );
};

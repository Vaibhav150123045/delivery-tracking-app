import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { Input, Button } from "antd";
import SelectHub from "../../components/hub/SelectHub";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { getHubDetails } from "../api";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [hub, setHub] = useState("8");
  const [tableData, setTableData] = useState([]);
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
    getHubDetails("7")
      .then((res) => {
        const { data = {}, message = "" } = res.data;
        console.log("data", data);

        const orders_to_be_received = data.orders_to_be_received;
        params.api.applyTransaction({ add: orders_to_be_received });
      })
      .catch((err) => console.log("err", err));
  };

  next_destination: "Adugodi Hub";
  order_number: "ODR-2O43OML";
  order_status: "New";
  partner_id: null;
  partner_name: null;
  vehicle_numbers: null;
  seller_name: "Tyagi Textiles";
  society_name: "Mavalli";

  const columnDefs = [
    {
      headerName: "Next destination",
      field: "next_destination",
      width: 150,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: "Order number",
      field: "order_number",
      width: 150,
      sortable: true,
      // filter: "agTextColumnFilter",
    },
    {
      headerName: "Order status",
      field: "order_status",
      width: 150,
      filter: "agSetColumnFilter",
    },

    {
      headerName: "seller name",
      field: "seller_name",
      width: 150,
      sortable: true,
      //   comparator: (valueA, valueB) => {
      //     const a = new Date(valueA).getTime();
      //     const b = new Date(valueB).getTime();
      //     if (a === b) return 0;
      //     else if (a > b) return 1;
      //     else return -1;
      //   },
      filter: "agDateColumnFilter",
    },
    {
      headerName: "Society name",
      field: "society_name",
      width: 150,
      // filter: "agTextColumnFilter",
    },
    {
      headerName: "origin name",
      field: "origin_name",
    },
    {
      headerName: "Vehicle numbers",
      field: "vehicle_numbers",
      widht: "150",
    },
    {
      headerName: "weight",
      field: "weight",
      width: "150",
    },

    {
      headerName: "Partner id",
      field: "partner_id",
      width: "150",
    },
    {
      headerName: "partner name",
      field: "partner_name",
      width: "150",
    },
    {
      headerName: "perform action",
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

  const onFirstDataRendered = (params) => {
    params.api.getToolPanelInstance("filters").expandFilters();
  };

  return (
    <body
      style={{ backgroundColor: "white", height: "100vh", padding: "15px" }}
    >
      <SelectHub current_hub={hub} onChangeHub={(id) => setHub(id)} />
      <div style={{ padding: "20px" }}>
        <h1>Orders to receive</h1>
      </div>
      <div style={{ color: "black", width: "500px", paddingLeft: "15px" }}>
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
          padding: "20px",
        }}
      >
        <div className="ag-theme-alpine" style={{ height: 450, width: "100%" }}>
          <AgGridReact
            // rowData={rowData}
            columnDefs={columnDefs}
            onGridReady={handleGridReady}
            postSort={() => console.log("sorting complete")}
            defaultColDef={defaultColDef}
            pagination={true}
            paginationPageSize={10}
            paginationAutoPageSize={true}
            onSelectionChanged={onSelectionChanged}
            // isRowSelectable={isRowSelectable}
            // rowSelection="multiple"
            // rowDeselection="true"
            rowMultiSelectWithClick="false"
            // singleClickEdit="true"
            animateRows="true"
            enableRangeSelection="true"
            sideBar={true}
            enableBrowserTooltips={true}
            frameworkComponents={{ RowButton }}
            // onFirstDataRendered={onFirstDataRendered}
          />
        </div>
      </div>
    </body>
  );
};

export default App;

const RowButton = (props) => {
  const { order_status } = props.node.data;
  if (order_status.trim() !== "New")
    return (
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          style={{ textAlign: "center" }}
          onClick={() => {
            console.log("shshs");
            let rowData = props.node.data;
            console.log("row data", rowData);
          }}
        >
          receive
        </Button>
      </div>
    );
  else return <></>;
};

const statusList = [
  "NEW",
  "SELLER_RECEIVED",
  "IN_TRANSIT",
  "RECEIVED_AT_HUB",
  "OFD",
  "DELIVERED",
];

const filterParams = {
  values: statusList,
  suppressSorting: true,
};

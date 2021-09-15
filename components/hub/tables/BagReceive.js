import React, { useState, useEffect } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { Input, Button, message } from "antd";
import SelectHub from "../SelectHub";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { getHubDetails, markBagReceive } from "../../../pages/api";
import { LoadingOutlined } from "@ant-design/icons";

const hub_id = 7;

const App = (props) => {
  console.log("props", props);
  const { hubId } = props;
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  const [tableData, setTableData] = useState([]);

  const handleGridReady = (params) => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);

    /* fetch data here to populate tables */

    // getHubDetails(hubId)
    //   .then((res) => {
    //     const { data = {}, message = "" } = res.data;
    //     console.log("data", data);

    //     const bags_to_be_received = data.bags_to_be_received;
    //     setTableData(bags_to_be_received);
    //     // params.api.applyTransaction({ add: bags_to_be_received });
    //   })
    //   .catch((err) => console.log("err", err));
  };

  const refreshControl = () => {
    const hide = message.loading("loading hub data.");
    getHubDetails(hubId)
      .then((res) => {
        const { data = {}, message = "" } = res.data;
        console.log("data", data);
        const bags_to_be_received = data.bags_to_be_received;
        setTableData(bags_to_be_received);
        hide();
      })
      .catch((err) => {
        console.log("err", err);
        hide();
      });
  };

  useEffect(() => {
    refreshControl();
  }, [hubId]);

  const columnDefs = [
    {
      headerName: "bag type",
      field: "bag_type",
      width: 150,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: "bad code",
      field: "code",
      width: 150,
      sortable: true,
      // filter: "agTextColumnFilter",
    },
    {
      headerName: "Next destination",
      field: "next_destination",
      width: 150,
      filter: "agSetColumnFilter",
    },

    {
      headerName: "current hub",
      field: "current_hub_id",
      width: 150,
      sortable: true,
    },
    {
      headerName: "Destination",
      field: "destination_name",
      width: 150,
      // filter: "agTextColumnFilter",
    },
    {
      headerName: "origin name",
      field: "origin_name",
    },
    {
      headerName: "Order status",
      field: "status",
      width: 150,
      //   filter: "agSetColumnFilter",
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
      headerName: "",
      field: "action",
      cellRenderer: "RowButton",
      cellRendererParams: {
        hubId,
        refreshControl,
      },
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
    <>
      <div style={{ paddingLeft: "30px", paddingTop: "15px" }}>
        <h1>Bags to receive</h1>
      </div>
      <div style={{ color: "black", width: "500px", paddingLeft: "30px" }}>
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
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          padding: "20px",
          paddingLeft: "30px",
        }}
      >
        <div className="ag-theme-alpine" style={{ height: 450, width: "100%" }}>
          <AgGridReact
            rowData={tableData}
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
    </>
  );
};

export default App;

const RowButton = (props) => {
  const { refreshControl = () => {} } = props;
  const [loading, setLoading] = useState(false);

  const bagReceive = async (payload) => {
    try {
      const data = await markBagReceive(payload);
      console.log("transit bag data", data);
      setLoading(false);
      message.success("Bag marked received");
      refreshControl();
    } catch (err) {
      console.log(err);
      setLoading(false);
      message.error("bag not marked received");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        type="primary"
        style={{ textAlign: "center" }}
        onClick={() => {
          let rowData = props.node.data;
          const { hubId } = props;
          console.log("row data", rowData);
          const { code } = rowData;

          const payload = {
            bag_code: code,
            vehicle_number: "KA92QO3259",
            hub_id: +hubId,
          };
          console.log("payload", payload);
          setLoading(true);
          bagReceive(payload);
        }}
      >
        receive
        {loading ? <LoadingOutlined /> : <></>}
      </Button>
    </div>
  );
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

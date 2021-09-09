import React, { useState } from "react";
import { useRouter, Link } from "next/router";
import BagReceive from "../../components/hub/tables/BagReceive.js";
import OrderReceive from "../../components/hub/tables/OrderReceive";
import TransitBag from "../../components/hub/tables/TransitBag";
import OfdTable from "../../components/hub/tables/OfdTable";
import { Breadcrumb, Alert } from "antd";

const HubPage = (props) => {
  const router = useRouter();
  const [table, setTable] = useState("receive_o");
  const { id } = router.query;

  const handleSelectTable = (e, type) => {
    setTable(type);
  };
  return (
    <div style={{ padding: "30px" }}>
      <h1>Hub id {id}</h1>
      <div style={{ paddingLeft: "30px" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a onClick={(e) => handleSelectTable(e, "receive_o")}>
              Receive orders
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a onClick={(e) => handleSelectTable(e, "receive_b")}>
              Receive Bags
            </a>
          </Breadcrumb.Item>

          <Breadcrumb.Item>
            <a onClick={(e) => handleSelectTable(e, "transit_b")}>
              Transit Bags
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a onClick={(e) => handleSelectTable(e, "ofd")}>
              Off to Deliveries
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {table === "receive_o" ? (
        <OrderReceive hubId={id} />
      ) : table === "receive_b" ? (
        <BagReceive hubId={id} />
      ) : table === "transit_b" ? (
        <TransitBag hubId={id} />
      ) : (
        <OfdTable hubId={id} />
      )}
    </div>
  );
};

export default HubPage;

import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import {
  AlignLeftOutlined,
  CaretDownOutlined,
  RightOutlined
} from "@ant-design/icons";
import { Menu, Dropdown, Button, Space } from "antd";
import { useRouter } from "next/router";
import { customerOrders } from '../api/mock_responses/customerOrders';
import { getOrderBySocietyDetails } from "../api/";


function Customer() {
  const [fetching, setFetching] = useState(true);
  const [err, setErr] = useState(null);
  const [societyOrders, setSocietyOrders] = useState([]);
  const orders = customerOrders.data;

  const router = useRouter();
  useEffect(() => {
    getOrderBySocietyDetails("467")
      .then((res) => {
        console.log("Orders for Society", res);
        setFetching(false);
        setSocietyOrders(res.data.data);
        setErr(null);
      })
      .catch((err) => {
        console.log("err", err);
        setFetching(false);
        setErr(err);
      });
  }, (setFetching));
  
    return (
      <div 
      style={{
        background: "lighblue",
        height: "100vh",
        width: "100vw",
        margin: 0,
        paddingTop: "25px",
        paddingLeft: 0,
      }}
      >
      <div style={{display: "flex", alignItems: "center" }}>
          <div>
            <AlignLeftOutlined
              style={{
                color: "black",
                marginRight: "12px",
                fontSize: "20px",
                marginBottom: "8px",
                paddingLeft: "25px"
              }}
            />
          </div>
          <h2 style={{ color: "#000000" }}>My Orders</h2>
        </div>
        <Dropdown overlay={menu} placement="bottomCenter">
        <div
          style={{
            backgroundColor: "#34A0CE",
            paddingTop: "10px",
            paddingBottom: "5px",
            borderRadius: "4px",
            paddingLeft: "15px",
            marginRight: "15px",
            // maxWidth: "59%",
            marginLeft: "15px",
            marginTop: "20px",
            boxShadow:
              " 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.12)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "16px", color: "#FFFFFF" }}>All Orders </p>
            <div>
              <CaretDownOutlined
                style={{
                  marginLeft: "10px",
                  marginBottom: "15px",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </Dropdown>
        {societyOrders.map((el, i) => (
        <CardView key={i} element={el}/>
      ))}
    </div>
    )
}

export default Customer;

function CardView(key, element) {

  const router = useRouter();
  console.log(key.element.order_number, "Pause2");
  function onTrackOrderClick() {
    const route = "/customer/trackingDetails" ;
    router.push({pathname: route, query: { orderID: key.element.order_number }});
  }


  return (
  <div
    style={{
      width: "100%",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingTop: "20px",
    }}
  >
    <div
      style={{
        backgroundColor: "lightgrey",
        borderRadius: "4px",
        boxShadow:
          "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "12px",
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "6px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>#{key.element.order_number}</p>
        <p style={{ color: "rgba(29, 30, 31, 0.7)" }}>20.00 - 20.30</p>
      </div>

      <div style={{ paddingLeft: "10px", paddingBottom: "6px" }}>
        <p
          style={{
            color: "#1D1E1F",
            opacity: 0.7,
            fontSize: "12px",
            lineHeight: "16px",
            opacity: 0.7,
          }}
        >
          <span style={{ fontWeight: "bold", opacity: 1 }}> Order Number: </span>{key.element.order_number}
        </p>
        <p
          style={{
            color: "#1D1E1F",
            opacity: 0.7,
            fontSize: "12px",
            lineHeight: "16px",
            opacity: 0.7,
          }}
        >
          <span style={{ fontWeight: "bold", opacity: 1 }}> Seller Name: </span>{key.element.seller_name}
        </p>
        <p
          style={{
            color: "#1D1E1F",
            opacity: 0.7,
            fontSize: "12px",
            lineHeight: "16px",
            opacity: 0.7,
          }}
        >
          <span style={{ fontWeight: "bold", opacity: 1 }}> Society: </span>{key.element.society_name}
        </p>
        <p
          style={{
            color: "#1D1E1F",
            opacity: 0.7,
            fontSize: "12px",
            lineHeight: "16px",
            opacity: 0.7,
          }}
        >
          <span style={{ fontWeight: "bold", opacity: 1 }}> Current Tracking Status: </span>{key.element.order_status}
        </p>
      </div>
      <div
        style={{ height: "1px", width: "100%", backgroundColor: "#DEDEDE" }}
      />
      <div
        style={{
          backgroundColor: "#808080",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        <Button onClick = {onTrackOrderClick}
          style={{
           width: "100%",
           height: "100%",
            backgroundColor: "#34A0CE",
            fontSize: "18px",
            //marginLeft: "5px",
            // marginTop: "7px",
          }}
        >
          Track Order
          <RightOutlined/>
        </Button>
      </div>
    </div>
  </div>
  )
};

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        All Orders
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Pending Orders
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Completed Orders
      </a>
    </Menu.Item>
  </Menu>
);
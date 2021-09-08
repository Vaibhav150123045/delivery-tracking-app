import "antd/dist/antd.css";
import { Pagination } from "antd";
import {
  SearchOutlined,
  AlignLeftOutlined,
  CaretDownOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Button, Space } from "antd";

export default function Seller() {
  const listItems = new Array(4).map((el, i) => <CardView key={i} />);
  return (
    <body
      style={{
        backgroundColor: "#FAFAFA",
        height: "100vh",
        width: "100vw",
        margin: 0,
        paddingTop: "50px",
        paddingLeft: 0,
        color: "black",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          // maxWidth: "60%",
          width: "360px",
          justifyContent: "space-between",
          paddingLeft: "15px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <AlignLeftOutlined
              style={{
                color: "black",
                marginRight: "12px",
                fontSize: "20px",
                marginBottom: "8px",
              }}
            />
          </div>
          <h2 style={{ color: "#000000" }}>SDX Partner</h2>
        </div>
        <div
          style={{
            backgroundColor: "#34A0CE",
            borderRadius: "4px",
            padding: "10px",
            // textAlign: "center",
          }}
        >
          <SearchOutlined
            style={{ color: "white", fontSize: "25px", margin: 0 }}
          />
        </div>
      </div>

      <Dropdown overlay={menu} placement="bottomCenter">
        <div
          style={{
            backgroundColor: "#34A0CE",
            paddingTop: "10px",
            paddingBottom: "5px",
            borderRadius: "4px",
            paddingLeft: "15px",
            // maxWidth: "59%",
            width: "328px",
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
      {[1, 2, 3, 4].map((el, i) => (
        <CardView key={i} />
      ))}
    </body>
  );
}

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

const CardView = () => (
  <div
    style={{
      width: "360px",
      paddingLeft: "15px",
      paddingRight: "15px",
      paddingTop: "20px",
    }}
  >
    <div
      style={{
        backgroundColor: "#FFFFFF",
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
        <p style={{ fontWeight: "bold" }}>#1257</p>
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
          Sugar, RIce & 10 more items
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
          <span style={{ fontWeight: "bold", opacity: 1 }}> ₹400</span> to be
          Received{" "}
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
          <span style={{ fontWeight: "bold", opacity: 1 }}> 20%</span>
          {"  "}
          Discount Applied{" "}
        </p>
      </div>
      <div
        style={{ height: "1px", width: "100%", backgroundColor: "#DEDEDE" }}
      />
      <div
        style={{
          paddingTop: "15px",
          paddingBottom: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CheckOutlined />
        <span
          style={{
            color: "#1D1E1F",
            fontSize: "12px",
            marginLeft: "5px",
            // marginTop: "7px",
          }}
        >
          Mark Ready
        </span>
      </div>
    </div>
  </div>
);

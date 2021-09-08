import "antd/dist/antd.css";
import {
  SearchOutlined,
  AlignLeftOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Button, Space } from "antd";
import CardView from "../../components/seller/CardView";

const styles = {
  body: {
    backgroundColor: "#FAFAFA",
    height: "100vh",
    width: "100vw",
    margin: 0,
    paddingTop: "50px",
    paddingLeft: 0,
    color: "black",
  },
  cardContainer: {
    width: "360px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "20px",
  },
  allOrders: {
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
  },
  searchContainer: {
    backgroundColor: "#34A0CE",
    borderRadius: "4px",
    padding: "10px",
  },
};

export default function Seller() {
  return (
    <body style={styles.body}>
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
        <div style={styles.searchContainer}>
          <SearchOutlined
            style={{ color: "white", fontSize: "25px", margin: 0 }}
          />
        </div>
      </div>

      <Dropdown overlay={menu} placement="bottomCenter">
        <div style={styles.allOrders}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
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
      <div style={{ paddingBottom: "200px" }}>
        {[1, 2, 3, 4].map((el, i) => (
          <CardView key={i} />
        ))}
      </div>
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

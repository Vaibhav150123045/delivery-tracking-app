import React from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const SelectHubButton = (props) => {
  const { current_hub = "", onChangeHub = () => {} } = props;

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {
    console.log("click", e);
    onChangeHub(e.key);
  }

  const getActiveStyle = (id) => {
    return current_hub === id
      ? { backgroundColor: "blue", color: "white" }
      : {};
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item
        style={getActiveStyle("Hub1")}
        key="Hub1"
        icon={<UserOutlined />}
      >
        Hub1
      </Menu.Item>
      <Menu.Item
        style={getActiveStyle("Hub2")}
        key="Hub2"
        icon={<UserOutlined />}
      >
        Hub2
      </Menu.Item>
      <Menu.Item
        style={getActiveStyle("Hub3")}
        key="Hub3"
        icon={<UserOutlined />}
      >
        Hub3
      </Menu.Item>
    </Menu>
  );

  return (
    <Space wrap>
      <Dropdown overlay={menu}>
        <Button>
          {current_hub} <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );
};

export default SelectHubButton;

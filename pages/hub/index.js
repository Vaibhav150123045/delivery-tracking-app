import React, { useState, useEffect } from "react";
import { List, Avatar, Spin } from "antd";
import { getAllHubs } from "../api/";
import Link from "next/link";

const Hub = () => {
  const [fetching, setFetching] = useState(true);
  const [err, setErr] = useState(null);
  const [hubList, setHubList] = useState([]);
  useEffect(() => {
    getAllHubs()
      .then((res) => {
        console.log("hub list", res);
        setFetching(false);
        setHubList(res.data.data);
        setErr(null);
      })
      .catch((err) => {
        console.log("err", err);
        setFetching(false);
        setErr(err);
      });
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>All hubs</h1>
      {fetching ? (
        <Spin size="large" />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={hubList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={
                  <Link href={`/hub/order-receive`}>
                    <a> Hub id {item.id}</a>
                  </Link>
                }
                description={item.name}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Hub;

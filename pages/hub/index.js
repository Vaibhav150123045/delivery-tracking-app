import React, { useState, useEffect } from "react";
import { List, Avatar, Spin, Table, Tag, Space } from "antd";
import { getAllHubs } from "../api/";
import Link from "next/link";

const { Column, ColumnGroup } = Table;

const Hub = ({ hubList }) => {
  const [fetching, setFetching] = useState(true);
  const [err, setErr] = useState(null);
  // const [hubList, setHubList] = useState([]);

  // useEffect(() => {
  //   getAllHubs()
  //     .then((res) => {
  //       console.log("hub list", res);
  //       setFetching(false);
  //       setHubList(res.data.data);
  //       setErr(null);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //       setFetching(false);
  //       setErr(err);
  //     });
  // }, []);

  const getTag = (hub_type) => {
    if (hub_type == 1) return "Major Hub";
    else return "Minor Hub";
  };

  return (
    <div style={{ padding: "80px", width: "80%" }}>
      <h1>All hubs</h1>
      <Table dataSource={hubList}>
        <Column title="Hub id" dataIndex="id" key="hubid" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Tags"
          dataIndex="hub_type"
          key="tags"
          render={(item) => {
            if (item.hub_type == 1)
              return (
                <>
                  <Tag color="blue" key={tag}>
                    Major
                  </Tag>
                </>
              );
            else
              return (
                <>
                  <Tag color="blue" key={item.id}>
                    Minor
                  </Tag>
                </>
              );
          }}
        />
        <Column
          title=""
          key="action"
          render={(item) => (
            <Space size="middle">
              <Link href={`/hub/${item.id}`}>
                <a>Enter</a>
              </Link>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Hub;

export async function getStaticProps(context) {
  console.log("static props", context);
  let hubList = [];
  try {
    const res = await getAllHubs();
    hubList = res.data.data;
  } catch (err) {}

  return {
    props: {
      hubList,
    }, // will be passed to the page component as props
  };
}

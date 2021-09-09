import React from 'react';
import 'antd/dist/antd.css';
import { Timeline, Collapse } from 'antd';
import { CaretRightOutlined, ShopOutlined, AlignLeftOutlined, ClockCircleOutlined } from '@ant-design/icons';

export default function trackingDetails() {

  const { Panel } = Collapse;
    return (
      <div style = {{backgroundColor: "white", height: "100%"}}>
      <div 
        style = {{
          paddingTop: "25px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingBottom: "25px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{display: "flex", alignItems: "center" }}>
          <div style={{marginLeft: "10px", marginRight: "10px"}}>
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
          <h2 style={{ color: "#000000" }}>Order #123123123</h2>
        </div>
        <div>
          <Collapse
            bordered={true}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            style={{marginTop: "10px", backgroundColor: "#34A0CE", marginBottom: "20px"}}
          >
    <Panel header="Order Details" key="1" className="site-collapse-custom-panel">
      <p>Order Details</p>
    </Panel>
    </Collapse>
        </div>
          <Timeline
          style = {{
            backgroundColor: "lightgrey",
            paddingTop: "25px",
            paddingLeft: "20px",
            marginLeft: "10px",
            marginRight: "10px",
            paddingRight: "20px",
            paddingBottom: "25px",
            fontFamily: "sans-serif"
          }}
          >
    <Timeline.Item color="grey" dot={<ShopOutlined style={{fontSize: "24px"}} />}>
      <p style={{fontSize: "18px"}}>Solve initial network problems 1</p>
      <p>2015-09-01 19:21</p>
      </Timeline.Item>
    <Timeline.Item color="green" >
      <p style={{fontSize: "18px"}}>Solve initial network problems 1</p>
      <p>2015-09-02 12:41</p>
    </Timeline.Item>
    <Timeline.Item color="grey" dot={<ShopOutlined style={{fontSize: "24px"}}/>}>
      <p style={{fontSize: "18px"}}>Solve initial network problems 1</p>
      <p>2015-09-03 12:41</p>
    </Timeline.Item>
    <Timeline.Item color="green">
      <p style={{fontSize: "18px"}}>Technical testing 1</p>
      <p>2015-09-04 12:41</p>
    </Timeline.Item>
    <Timeline.Item color="grey" dot={<ShopOutlined style={{fontSize: "24px"}}/>}>
      <p style={{fontSize: "18px"}}>Technical testing 1</p>
      <p>2015-09-05 12:41</p>
    </Timeline.Item>
    <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: "24px"}}/>} color="blue" >
      <p style={{fontSize: "18px"}}>Technical testing 1</p>
    </Timeline.Item>
  </Timeline>
      </div>
      </div>
    )
}
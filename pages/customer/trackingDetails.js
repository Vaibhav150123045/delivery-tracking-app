import React from 'react';
import 'antd/dist/antd.css';
import { Timeline, Collapse } from 'antd';
import { CaretRightOutlined, ShopOutlined, AlignLeftOutlined, ClockCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { trackingHistory } from '../api/mock_responses/trackingHistory';

export default function trackingDetails() {

  const { Panel } = Collapse;
  const trackingTimeline = trackingHistory.data.reverse();

  const convertToReadable = (timestamp) => {
    return  (new Date(timestamp).toLocaleTimeString());
  }

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
            {trackingTimeline.map((el, i) => (
              el.order_status === "In Transit" ?
                <Timeline.Item color="green">
                <p>{el.order_status}</p>
                <p>{convertToReadable(el.updated)}</p>
                </Timeline.Item>
                : (el.current_location_name ?
                    <Timeline.Item color="grey" dot={<ShopOutlined style={{fontSize: "24px"}} />} >
                      <p style={{fontSize: "18px"}}>{el.current_location_name}</p>
                    <p>{el.order_status}</p>
                    <p>{convertToReadable(el.updated)}</p>
                    </Timeline.Item>
                    : 
                    <Timeline.Item color="grey"  dot={ el.order_status === "New" ? <CheckOutlined style={{fontSize: "24px", color: "green"}} /> : <ClockCircleOutlined />} >
                    <p>{el.order_status}</p>
                    <p>{convertToReadable(el.updated)}</p>
                    </Timeline.Item>
                )
            ))}
  </Timeline>
      </div>
      </div>
    )
}

import "antd/dist/antd.css";
import { CheckOutlined } from "@ant-design/icons";

const CardView = (props) => {
  const {
    order_number = "",
    order_status = "",
    society_name = "",
    seller_name = "",
    weight = 0,
    next_destination = "",
    partner_name = "",
    index = 0,
  } = props;
  return (
    <div style={styles.cardContainer}>
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
          <p style={{ fontWeight: "bold" }}># {order_number}</p>
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
            <span style={{ fontWeight: "bold", opacity: 1 }}>
              {" "}
              society name
            </span>{" "}
            {society_name}
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
            <span style={{ fontWeight: "bold", opacity: 1 }}>
              {" "}
              next destination
            </span>{" "}
            {next_destination}
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
            <span style={{ fontWeight: "bold", opacity: 1 }}>
              {" "}
              weight of order
            </span>{" "}
            {weight} pounds
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
            <span style={{ fontWeight: "bold", opacity: 1 }}>
              {" "}
              order status
            </span>{" "}
            {order_status}
          </p>
          {partner_name && partner_name.trim() !== "" && (
            <p
              style={{
                color: "#1D1E1F",
                opacity: 0.7,
                fontSize: "12px",
                lineHeight: "16px",
                opacity: 0.7,
              }}
            >
              <span style={{ fontWeight: "bold", opacity: 1 }}>
                {" "}
                delivery partner
              </span>{" "}
              {partner_name}
            </p>
          )}
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
};

export default CardView;

const styles = {
  cardContainer: {
    width: "360px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "20px",
  },
};

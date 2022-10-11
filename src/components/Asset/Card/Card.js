import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const CustomCard = (props) => {
  const { url, cover, coverStyle, title } = props;

  return (
    <>
      <Card
        bordered
        bodyStyle={{ padding: "10px", border: "1px solid" }}
        onClick={() => {
          window.open(url, "_blank", "noopener,noreferrer");
        }}
        hoverable
        style={{ width: 150, textAlign: "center" }}
        cover={
          <img
            alt="example"
            src={cover}
            style={{
              backgroundColor: coverStyle ? coverStyle : "rgb(192, 186, 186)",
              padding: 10,
            }}
          />
        }
      >
        <Meta style={{ display: "inline" }} title={title} />
      </Card>
    </>
  );
};

export default CustomCard;

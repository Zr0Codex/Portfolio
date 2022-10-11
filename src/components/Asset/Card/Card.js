import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const CustomCard = (props) => {
  const { url, cover, coverStyle, title } = props;

  return (
    <>
      <Card
        bodyStyle={{ padding: "10px" }}
        onClick={() => {
          window.open(url, "_blank", "noopener,noreferrer");
        }}
        hoverable
        style={{ width: 200, textAlign: "center" }}
        cover={<img alt="example" src={cover} style={coverStyle} />}
      >
        <Meta style={{ display: "inline" }} title={title} />
      </Card>
    </>
  );
};

export default CustomCard;

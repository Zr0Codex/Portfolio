import React from "react";
import { Card, Col, Divider, Row } from "antd";
import CustomGrid from "../../Asset/Grid/Grid";
import "./Skills.style.scss";

import reactico from "../../Asset/Icons/reactV2.png";
import jsico from "../../Asset/Icons/js.png";
import CustomCard from "../../Asset/Card/Card";
import { FaReact } from "react-icons/fa";

const { Meta } = Card;

const Skills = () => {
  return (
    <>
      <div className="content">
        <h1>SKILLS</h1>
      </div>
      <div className="site-card-wrapper">
        <Row justify="center">
          <CustomGrid columns={4}>
            <CustomCard
              url="https://reactjs.org"
              cover={reactico}
              coverStyle={{ backgroundColor: "rgb(192, 186, 186)" }}
              title="React"
              description="React Framework"
            />
            <CustomCard
              url="https://www.javascript.com/"
              cover={jsico}
              coverStyle={{ backgroundColor: "rgb(192, 186, 186)" }}
              title="Javascript"
              description="programming language..."
            />
          </CustomGrid>
        </Row>
      </div>
    </>
  );
};

export default Skills;

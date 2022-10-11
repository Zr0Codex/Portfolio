import React from "react";
import CustomGrid from "../../../Asset/Grid/Grid";
import CustomCard from "../../../Asset/Card/Card";
import { Row } from "antd";
import "../Skills.style.scss";

import { postgresql, mongo, oracle } from "../../../Asset/Icons/colored";

const SkillsDBTools = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 10, fontSize: 20 }}>
          Database Tools
        </div>
        <Row justify="center">
          <CustomGrid columns={3}>
            <CustomCard
              url="https://www.postgresql.org/"
              cover={postgresql}
              title="Postgresql"
              coverStyle="white"
              description="React Framework"
            />
            <CustomCard
              url="https://www.mongodb.com/"
              cover={mongo}
              title="MongoDB"
              coverStyle="white"
              description="programming language..."
            />
            <CustomCard
              url="https://www.oracle.com/database/"
              cover={oracle}
              title="Oracle"
              coverStyle="white"
              description="programming language..."
            />
          </CustomGrid>
        </Row>
      </div>
    </>
  );
};

export default SkillsDBTools;

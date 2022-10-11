import React from "react";
import CustomGrid from "../../../Asset/Grid/Grid";
import CustomCard from "../../../Asset/Card/Card";
import { Row } from "antd";
import "../Skills.style.scss";

import { nodeBE, pyBE, javaBE } from "../../../Asset/Icons/colored";

const SkillsBE = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 10, fontSize: 20 }}>
          Back-End
        </div>
        <Row justify="center">
          <CustomGrid columns={3}>
            <CustomCard
              url="https://nodejs.org/en/"
              cover={nodeBE}
              title="Nodejs"
              coverStyle="white"
              description="React Framework"
            />
            <CustomCard
              url="https://spring.io/"
              cover={javaBE}
              title="Java(Spring)"
              coverStyle="white"
              description="programming language..."
            />
            <CustomCard
              url="https://www.djangoproject.com/"
              cover={pyBE}
              title="Python(Django)"
              coverStyle="white"
              description="programming language..."
            />
          </CustomGrid>
        </Row>
      </div>
    </>
  );
};

export default SkillsBE;

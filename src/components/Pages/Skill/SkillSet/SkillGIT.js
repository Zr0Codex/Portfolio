import React from "react";
import CustomGrid from "../../../Asset/Grid/Grid";
import CustomCard from "../../../Asset/Card/Card";
import { Row } from "antd";
import "../Skills.style.scss";

import { git, gitlab } from "../../../Asset/Icons/colored";

const SkillsGIT = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 10, fontSize: 20 }}>
          Source Control
        </div>
        <Row justify="center">
          <CustomGrid columns={2}>
            <CustomCard
              url="https://about.gitlab.com/"
              cover={gitlab}
              title="Gitlab"
              coverStyle="white"
              description="React Framework"
            />
            <CustomCard
              url="https://git-scm.com/"
              cover={git}
              title="Git"
              coverStyle="white"
              description="programming language..."
            />
          </CustomGrid>
        </Row>
      </div>
    </>
  );
};

export default SkillsGIT;

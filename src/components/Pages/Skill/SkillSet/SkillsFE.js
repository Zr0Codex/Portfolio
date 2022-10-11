import React from "react";
import CustomGrid from "../../../Asset/Grid/Grid";
import CustomCard from "../../../Asset/Card/Card";
import { Row } from "antd";
import "../Skills.style.scss";

import {
  reactFE,
  jsFE,
  bsFE,
  cssFE,
  htmlFE,
  scssFE,
} from "../../../Asset/Icons/colored";

const SkillsFE = () => {
  return (
    <>
      <div className="site-card-wrapper">
        <div style={{ textAlign: "center", marginBottom: 10, fontSize: 20 }}>
          Front-End
        </div>
        <Row justify="center">
          <CustomGrid columns={6}>
            <CustomCard
              url="https://reactjs.org"
              cover={reactFE}
              title="React"
              coverStyle="white"
              description="React Framework"
            />
            <CustomCard
              url="https://www.javascript.com/"
              cover={jsFE}
              title="Javascript"
              coverStyle="white"
              description="programming language..."
            />
            <CustomCard
              url="https://getbootstrap.com/"
              cover={bsFE}
              title="Bootstrap"
              coverStyle="white"
              description="programming language..."
            />
            <CustomCard
              url="https://en.wikipedia.org/wiki/CSS"
              cover={cssFE}
              title="CSS"
              coverStyle="white"
              description="programming language..."
            />
            <CustomCard
              url="https://en.wikipedia.org/wiki/HTML"
              cover={htmlFE}
              title="HTML"
              coverStyle="white"
              description="programming language..."
            />
            <CustomCard
              url="https://en.wikipedia.org/wiki/HTML"
              cover={scssFE}
              title="SASS"
              coverStyle="white"
              description="programming language..."
            />
          </CustomGrid>
        </Row>
      </div>
    </>
  );
};

export default SkillsFE;

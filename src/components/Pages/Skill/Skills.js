import React from "react";
import "./Skills.style.scss";

import { SkillsBE, SkillsFE, SkillsGIT, SkillsDBTools } from "./SkillSet";

const Skills = () => {
  return (
    <>
      <div className="content">
        <h1>SKILLS</h1>
      </div>
      <SkillsFE />
      <SkillsBE />
      <SkillsGIT />
      <SkillsDBTools />
    </>
  );
};

export default Skills;

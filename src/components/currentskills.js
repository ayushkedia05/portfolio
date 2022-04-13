import React from "react";
import "./currentskills.css";
import Skills from "./skills";
const Currentskill = () => {
  return (
    <React.Fragment>
      <section id="skills">
        <br></br>
        <br></br>
      <section >
        <div>
          <h1>Skills</h1>
          <div className="check">
            <Skills name="HTML" value={80}></Skills>
            <Skills name="CSS" value={70}></Skills>
            <Skills name="javaScript" value={70}></Skills>
            <Skills name="React" value={60}></Skills>
            <Skills name="NodeJS" value={50}></Skills>
            <Skills name="MongoDB" value={50}></Skills>
            <Skills name="C++" value={80}></Skills>
          </div>
        </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Currentskill;

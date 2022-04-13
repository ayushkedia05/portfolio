import React, { useState } from "react";
import "./skills.css";
const Skills = (props) => {
  const [delay, getdelay] = useState({});

  setTimeout(() => {
    const newstyle = {
      opacity: 1,
      width: `${props.value}%`,
    };
    getdelay(newstyle);
  },2000 );

  return (
    <React.Fragment>
      <div className="move" >
        <div>{props.name}</div>
        <div className="wrapper">
          {/* <br>   </br> */}
          <div className="progress">
            <div className="progress-done" style={{...delay }}>
              {props.value}%
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Skills;

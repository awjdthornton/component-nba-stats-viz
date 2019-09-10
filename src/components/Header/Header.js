import React from "react";
import "./Header.css";
import InputSelect from "../InputSelect/InputSelect.js"

const Header = (props) => (
            <div className="VizHeader">
              <h1>2018-19 NBA Regular Season vs. Playoffs Winning %</h1>
              <InputSelect onDimSelect={props.onDimSelect} />
            </div>
);

export default Header;

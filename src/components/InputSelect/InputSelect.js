import React from "react";

const InputSelect = (props) => (
              <div className="DimensionChooser">
                <label>Conference:
                  <select className="DimensionChooser-select" id="dim1" onClick={props.onDimSelect}>
                    <option>All</option>
                    <option>Eastern</option>
                    <option>Western</option>
                  </select>
                </label>
              </div>
);                
export default InputSelect;

import React, { Component } from 'react';
import './BarChart.css';


class BarChart extends Component {

  alertDiff = (record) => {
    alert(record.TEAM_ABR + " won " + (record.REG_W_PCT - record.PLYOFF_W_PCT) + "% fewer of their games during the playoffs.")
  }

  render() {
    return (
            <div className="VizWrapper">
              {
                this.props.data.map((record,index) => (
                  (this.props.conference === "All" || this.props.conference === record.TEAM_CONF) && (
                    <div className="VizItem" key={index} onClick={() => this.alertDiff(record)}>
                      <div className="VizData VizRegular" style={{height: record.REG_W_PCT + "%"}}><label>{record.REG_W_PCT}</label></div>
                      <div className="VizData VizPlayoff" style={{height: record.PLYOFF_W_PCT + "%"}}><label>{record.PLYOFF_W_PCT}</label></div>
                      <div className="VizLabel">{record.TEAM_ABR}</div>
                    </div>
                  )
                ))
              }
            </div>
    );
  }
}

export default BarChart;

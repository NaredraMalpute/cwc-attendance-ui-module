import React from 'react';
import { Card } from "antd";
import "./style.scss";

const AvailCasesCard = () => {
  return (
    <Card>
        <div className="card-cases-avail">
          <div className="case-context">
            <h4 className="para">Today</h4>
           
          </div>
          <div className="case-context">
           
            <h3 className="count">3.8K</h3>
          </div>
        </div>
      </Card>
  )
}

export default AvailCasesCard
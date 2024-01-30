import { Card, Progress } from 'antd';
import React from 'react'
import "./style.scss";


const AssignedCasesCard = () => {
  return (
    <Card>
      <div className="card-cases">
        <div>
          <Progress
            strokeColor={"#87d068"}
            strokeWidth={10}
            type="circle"
            percent={35}
            size={20}
            format={(percent) => ``}
          />
        </div>
        <div className="case-context">
          <h4 className="para">assigned cases</h4>
          <h3 className="count">3.8K</h3>
        </div>
      </div>
    </Card>
  );
}

export default AssignedCasesCard
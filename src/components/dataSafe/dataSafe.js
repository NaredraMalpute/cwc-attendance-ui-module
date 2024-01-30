import React from 'react';
import Verified from "../../assets/Images/verified.png";

function DataSafe() {
  return (
    <div className="colorWhite fs12 pt10 mb-2">
        <img src={Verified} alt="Verified" className='mr-halfrem'/>
        Your data is 100% safe. <span className="colorBlue">Know more</span>
      </div>
  )
}

export default DataSafe
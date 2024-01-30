import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import "./style.scss"

const BreadCrum = () => {
    const location = useLocation();

    let currentLink = "";

      const ConvertToTitleCase = (text) => {
       
        const result = text.replace(/([A-Z])/g, " $1");
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult;
      };

    const crums = location?.pathname?.split("/")?.filter(crum=> crum !== "" )?.splice(2)?.map(c=>{
        currentLink =+ `/${c}`;
        return (
          <div className="crumb" key={c}>
            <Link to={currentLink}>{ConvertToTitleCase(c)}</Link>
          </div>
        );
    })

  return (
    <div style={{display:"flex"}} className='breadcrumbs'><span className="txtHeader">{crums}</span></div>
  )
}

export default BreadCrum



import React from 'react';
import { useRouteError ,Link} from "react-router-dom";


const ErrorPage = () => {
      const error = useRouteError();
  return (

    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br /><br />
     <Link to="/fi-admin/dashboard">Return to Home Page</Link>
    </div>
  );
}

export default ErrorPage
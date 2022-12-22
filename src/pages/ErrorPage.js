import React from "react";
import {useRouteError} from "react-router-dom"


function ErrorPage() {
  const error = useRouteError()
  return (<div>
    <h1>Error Page</h1>
    <h3>Oops, an error occured.</h3>
    <p>
      <i>{error?.statusText || error?.message}</i>
    </p>
    </div>);
}

export default ErrorPage;

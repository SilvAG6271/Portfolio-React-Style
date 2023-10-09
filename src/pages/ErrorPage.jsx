import { isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouterError();
    if(isRouteErrorResponse(error)) {

    return (
        <div id="error-page">
            <h1>Malfunction Detected</h1>
            <p>Sorry, an unexpected malfunction has occurred</p>
           <p>
             <i>{error.statusText || error.message}</i>
           </p>
        </div>
    ); 
} else {
    return <div>Oops</div>;
}
}
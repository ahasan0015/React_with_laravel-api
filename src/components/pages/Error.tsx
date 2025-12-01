import { Link } from "react-router-dom"

function Error (){
    return(
        <>
          <div className="container text-center d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-3">Oops! Page not found</h2>
      <p className="mb-4 text-muted">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
        
        </>
    )
}
export default Error
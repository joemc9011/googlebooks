import { Link } from "react-router-dom";


function Nav(){
    return (
        <>
     
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Google Books</a>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

          <a className = "nav-item">
            <Link 
            to="/saved"
            className = {
              window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link"
            }
            >
              Saved
            </Link>
          </a>

          <a className = "nav-item">
            <Link 
            to="/search"
            className = {
              window.location.pathname === "/search"
              ? "nav-link active"
              : "nav-link"
            }
            >
              Search
            </Link>
          </a>



        




      </div>
    </div>

  </div>
</nav>
  </>
    )
}

export default Nav;
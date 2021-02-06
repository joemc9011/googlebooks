function Nav(){
    return (
        <>
     
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Google Books</a>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <ul className = "nav-nav">

          <li className = "nav-item">
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
          </li>

          <li className = "nav-item">
            <Link 
            to="/searced"
            className = {
              window.location.pathname === "/searched"
              ? "nav-link active"
              : "nav-link"
            }
            >
              Searched
            </Link>
          </li>



        </ul>




      </div>
    </div>

  </div>
</nav>
  </>
    )
}

export default Nav;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Navbar(){
  const { loginWithRedirect,isAuthenticated ,user} = useAuth0();
  const { logout } = useAuth0();
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">Application-CRUD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light" aria-current="page" href="#createUser">creatuser</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#showuser">showuser</a>
        </li>
        <li className="nav-item">
       {
        isAuthenticated ? <li className="nav-item">
        <button className="bg-dark text-light border-0 " style={{transform:"translateY(5px)"}}  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </li>
        :
        <li className="nav-item">
          <button className="bg-dark text-light border-0 " style={{transform:"translateY(5px)"}} onClick={() => loginWithRedirect()}>Log In</button>
        </li>
        
       }
        </li>
        </ul>
        <li className="nav-item me-3">
          {
            isAuthenticated && <span>{user.name}</span>
          }
          </li>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn1 btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    
  </div>
</nav>
        </>
    );
}
export default Navbar;
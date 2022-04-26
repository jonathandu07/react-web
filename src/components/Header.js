import logo from '../logo.svg';
import {NavLink} from 'react-router-dom'
const Header = () => {
    return(
        <header >
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
          <div className="container-fluid">
            <img src={logo} className="logo"alt="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Portfolio">portfolio</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        )
}

export default Header;
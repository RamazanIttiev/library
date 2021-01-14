import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" />
            </div>
            <div className="info">
              <NavLink to="/" className="d-block">
                Ramazan Ittiev
              </NavLink>
            </div>
          </div>
          <a type="submit">
            <i className="nav-link nav-icon fa fa-sign-out-alt" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

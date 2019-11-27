import React from "react"
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';


class Navbar extends React.Component {
  render () {
      const {
          logged_in,
          sign_in_route,
          sign_out_route
            } = this.props
        console.log(this.props)
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">Apartment Finder</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Nav>
                  <NavItem>
                    {
                      logged_in &&
                        <a className="nav-link" id="logged_in" href={sign_out_route}>Sign Out</a>
                    }
                    {!logged_in &&
                        <a className="nav-link" id="logged_in" href={sign_in_route}>Sign In</a>
                    }
                  </NavItem>
                </Nav>
            </li>
            <li className="nav-item">
                <Nav>
                    <NavItem>
                        <NavLink to="/listings" tag={Link}>Listings</NavLink>
                    </NavItem>
                </Nav>
            </li>
            {!logged_in ? null:
            <li className="nav-item">
                <Nav>
                    <NavItem>
                        <NavLink to="/CreateListing" tag={Link}>Create Listing</NavLink>
                    </NavItem>
                </Nav>
            </li>
            }
            <li className="nav-item">
                <Nav>
                    <NavItem>
                        <NavLink to="/AboutUs" tag={Link}>About Us</NavLink>
                    </NavItem>
                </Nav>
            </li>
        </ul>
        <div>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text"  placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>

        </div>

      </div>
    </nav>
    </React.Fragment>
    );
  }
}
export default Navbar

import React from "react";
import { Nav, NavItem, NavLink } from 'reactstrap';
import 'bootswatch/dist/lux/bootstrap.min.css';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

//pages
import AboutUs from "../pages/AboutUs"
import CreateListing from "../pages/CreateListing"
import Listings from "../pages/Listings"
import Navbar from "../pages/Navbar"
import Home from "../pages/Home"

export default class ApartmentListing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: []
        }
        this.getListings()
    }

    getListings = () => {
        fetch("/listings")
        .then(resq => {
            return resq.json()})
            .then(list => {
                this.setState({listings:list})})
    }

    addListing = (attrs) => {
        return fetch("/listings", {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({listing:attrs})
        }).then(response => {
            if(response.status === 201) {
                this.getListings()
            }
        })
    }


    render () {
        const {
            logged_in,
            sign_in_route,
            sign_out_route,
            current_user_id
        } = this.props
        const {listings} = this.state
        return (
            <div>
              <Router>
                <Navbar {...this.props}/>
                <Route exact path="/" component={Home}/>
                <Route path="/Listings" render = {(props) =><Listings {...props} listings = {listings} currentUser = {current_user_id} />} />
                <Route path="/CreateListing" render = {(props) =><CreateListing {...props} onSubmit = {this.addListing} />} />
                <Route path="/AboutUs" component={AboutUs} />
              </Router>
            </div>
        );
    }
}

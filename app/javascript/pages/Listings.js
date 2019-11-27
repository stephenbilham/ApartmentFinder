import React from "react"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';


class Listings extends React.Component {
  render () {
      const {listings} = this.props
      let list = listings.map(house => {
          return <li key={house.id}>{house.address} {house.price}
          <div>
            <Link to={`/listings/${house.id}`}>show details</Link>
          </div>
          </li>
      })

    return (
        <div className="list_row">
            <div className="list_column">
                <h1>Current Listings</h1>
                <ul>
                    {list}
                </ul>
            </div>
            <div className="image-float">
            </div>
        </div>

    );
  }
}

export default Listings

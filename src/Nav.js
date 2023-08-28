import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <nav className="row">
        <img
          className="col-sm- logo-small"
          src="https://res.cloudinary.com/dawteptkh/image/upload/v1692930718/IMG_1955_Small_a86c79.jpg"
          alt=""
        />
        <h3 className="col-3 nav-phone-number">(715) 651-8994</h3>
        <div className="col-6 nav-spacer"></div>
        <div className="col-sm nav-button">
          <Link to="/">Home</Link>
        </div>
        <div className="col-sm nav-button dropdown">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/who-we-are">Who We Are</a>
            <a className="dropdown-item" href="/what-to-expect">What To Expect</a>
            <a className="dropdown-item" href="/phc">PHC</a>
          </div>
        </div>
        <div className="col-sm nav-button dropdown">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Our Work
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="/pictures">Pictures</a>
            <a className="dropdown-item" href="/reviews">Reviews</a>
          </div>
        </div>
      </nav>
      <div id="green-stripe"></div>
    </div>
  )
}

export default Nav;
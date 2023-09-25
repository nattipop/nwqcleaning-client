import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="col-sm- logo-small"
              src="https://res.cloudinary.com/dawteptkh/image/upload/v1692930718/IMG_1955_Small_a86c79.jpg"
              alt=""
            />
          </a>
          <h3 className="col-3 nav-phone-number">(715) 651-8994</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-button">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item nav-button">
                <div className="col-sm dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/who-we-are">Who We Are</a>
                    <a className="dropdown-item" href="/what-to-expect">What To Expect</a>
                  </div>
                </div>
              </li>
              <li className="nav-item nav-button">
                <div className="col-sm dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Our Work
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/pictures">Pictures</a>
                    <a className="dropdown-item" href="/reviews">Reviews</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="green-stripe"></div>
    </div>
  )
}

export default Nav;
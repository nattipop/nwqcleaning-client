import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="col-2 footer-small-col">
          <img id="footer-logo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1692930718/IMG_1955_Small_a86c79.jpg" alt="" />
        </div>
        <div className="col" id="footer-text">
          <h1>Contact</h1>
          <h3>(715) 651-8994</h3>
          <h3>nwqcleaning@gmail.com</h3>
        </div>
        <div className="col-2 icons-div">
          <Link id="instagram-icon" to="https://www.instagram.com/n.w.q_cleaning/">
            <img className="icons" src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="" />
          </Link>
          <Link id="facebook-icon" to="https://www.facebook.com/NWQCleaning">
            <img className="icons" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png" alt="" />
          </Link>
          <Link id="google-icon" to="https://www.google.com/maps/@45.3154442,-91.6658582,15z?entry=ttu">
            <img className="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Map_marker_font_awesome.svg/512px-Map_marker_font_awesome.svg.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;
import { useEffect } from "react";
import { useNavigate } from "react-router";

const reviewsWidget = document.getElementById("reviews-widget");

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Home";
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewsWidget])

  return (
    <div id="home">
      <div id="hero">
        <h1 id="hero-text">Northwest Quality Cleaning</h1>
      </div>
      <div id="home-about">
        <div id="home-about-background">
          <div id="kristin_and_dom">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1693497661/Krisitn_Dom_sl2wak.jpg" alt="" />
          </div>
          <h1 className="wwa-header about-text-header">We're Kristin & Domanic Wiesner,</h1>
          <h1 className="wwa-sub-header about-text-sub">Owners of Northwest Quality Cleaning LLC. We are so grateful to get to work together as husband and wife. This is our full time career, and it has supported us as we work towards building our future together by God's grace!</h1>
        </div>
      </div>
      <div id="pictures-reviews">
        <div className="row pic-rev">
            <div className="col pic-rev-div" onClick={() => navigate("/pictures")}>
              <img className="pic-rev-photo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1693372589/IMG_8946_wwasxt.jpg" alt="" />
              <h2 className="pic-rev-text">Pictures</h2>
            </div>
            <div className="col pic-rev-div" onClick={() => navigate("/reviews")}>
              <img className="pic-rev-photo" id="review-pic" src="https://res.cloudinary.com/dawteptkh/image/upload/v1695678007/Screen_Shot_2023-09-25_at_4.36.41_PM_yig9gs.png" alt="" />
              <h2 className="pic-rev-text">Reviews</h2>
            </div>
        </div>
      </div>
      <div id="instagram-section"></div>
    </div>
  )
}

export default Home;
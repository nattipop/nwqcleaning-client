import { useEffect } from "react";
import { useNavigate } from "react-router";

const reviewsWidget = document.getElementById("reviews-widget");

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Home";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewsWidget])

  return (
    <div id="home">
      <div id="hero">
        <h1 id="hero-text">Northwest Quality Cleaning</h1>
      </div>
      <div id="pictures-reviews">
        <div className="row pic-rev">
            <div className="col pic-rev-div" onClick={() => navigate("/pictures")}>
              <img className="pic-rev-photo" src="https://res.cloudinary.com/dawteptkh/image/upload/v1693372589/IMG_8946_wwasxt.jpg" width="500px" alt="" />
              <h2 className="pic-rev-text">Pictures</h2>
            </div>
            <div className="col pic-rev-div" onClick={() => navigate("/reviews")}>
              <img className="pic-rev-photo" src="https://cdn-icons-png.flaticon.com/512/2701/2701190.png" width="300px" alt="" />
              <h2 className="pic-rev-text">Reviews</h2>
            </div>
        </div>
      </div>
      <div id="instagram-section"></div>
    </div>
  )
}

export default Home;
import { useEffect } from "react";

const reviewsWidget = document.getElementById("reviews-widget");

const Home = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Home";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewsWidget])

  return (
    <div id="home">
      <div id="hero">
        <img src="https://rrpwi.com/wp-content/uploads/2022/06/river-pic.jpg" alt="" />
        <h1 id="hero-text">Northwest Quality Cleaning</h1>
      </div>
      {/* <div id="hero-logo">
        <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1692930718/IMG_1955_Small_a86c79.jpg" alt="" />
      </div> */}
      <div id="instagram-section"></div>
    </div>
  )
}

export default Home;
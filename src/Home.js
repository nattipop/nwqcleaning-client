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
        <h1 id="hero-text">Northwest Quality Cleaning</h1>
      </div>
      <div id="instagram-section"></div>
    </div>
  )
}

export default Home;
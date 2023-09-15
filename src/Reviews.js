import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Reviews";
    const script = document.createElement("script");
  
    script.src = "https://widget.trustmary.com/ZYG_O6UaW";
    script.async = true;
    script.id = "reviews-widget"
    document.getElementsByClassName("App")[0].children[1].appendChild(script);
  }, [])

  return (
    <div id="reviews">
      <div id="reviews-white-box"></div>
      <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1693372535/IMG_8116_chwikr.jpg" alt="" id="reviews-header-div"></img>
      <h1 id="reviews-header">Reviews</h1>
      <h1 id="reviews-sub-header">Hear what our clients have to say</h1>
    </div>
  )
}

export default Reviews;
import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Reviews";
  })

  return (
    <div id="reviews">
      <div id="reviews-header-div">
        <div>
          <h1 id="reviews-header">Reviews</h1>
          <h3 id="reviews-sub-header">Don't believe us? Hear what our clients have to say.</h3>
        </div>
      </div>
    </div>
  )
}

export default Reviews;
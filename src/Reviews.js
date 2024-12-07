import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Reviews";
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="reviews">
      <div id="reviews-header-div">
        <div className="reviews-title">
          <h1 id="reviews-header">Reviews</h1>
          <h3 id="reviews-sub-header">Hear what our clients have to say</h3>
        </div>
      </div>
      <div className="container" id="reviews-box">
        <rw-widget-slider data-rw-slider="44390"></rw-widget-slider>
      </div>
    </div>
  )
}

export default Reviews;
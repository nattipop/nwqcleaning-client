import { useEffect } from "react";

const Reviews = ({history}) => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Reviews";
    const script = document.createElement("script");
    
    script.src = "https://widget.trustmary.com/ZYG_O6UaW";
    script.async = true;
    script.id = "reviews-widget"
    document.getElementsByClassName("App")[0].children[1].appendChild(script);
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
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
    </div>
  )
}

export default Reviews;
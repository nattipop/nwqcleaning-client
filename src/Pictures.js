import { useEffect } from "react";
import photos from "./photosets.json";
const Pictures = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Pictures";
  })

  const renderQuote = (photoset) => {
    if(photoset.quote_text) {
      return (
        <div>
          <h2 className="quote-text">"{photoset.quote_text}"</h2>
          <h3 className="quote-credit">{photoset.quote_credit}</h3>
        </div>
      )
    }
  }
  const renderPhotos = () => {
    return photos.map((photoset) => {
      return (
        <div key={photoset.id}>
          <div className="row photoset-row">
            {/* <div className="col-1"></div> */}
            <img className="col-6 photoset-img" src={photoset.before_url} alt="" />
            <img className="col-6 photoset-img" src={photoset.after_url} alt="" />
            {/* <div className="col-1"></div> */}
          </div>
          {renderQuote(photoset)}
        </div>
      )
    })
  }
  return (
    <div id="pictures">
      <div id="logo-header-div">
        <div className="">
          <h1 id="pictures-header">Pictures of Our Work</h1>
          <h3 id="pictures-sub-header">Take a look at some before and after pictures of our work here at Northwest Quality Cleaning</h3>
        </div>
      </div>
      {renderPhotos()}
    </div>
  )
}

export default Pictures;
import photos from "./photosets.json";
const Pictures = () => {
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
            <div className="col-3"></div>
            <img className="col-3 photoset-img" src={photoset.before_url} alt="" />
            <img className="col-3 photoset-img" src={photoset.after_url} alt="" />
            <div className="col-3"></div>
          </div>
          {renderQuote(photoset)}
        </div>
      )
    })
  }
  return (
    <div id="pictures">
      <h1 id="pictures-header">Our Work</h1>
      {renderPhotos()}
    </div>
  )
}

export default Pictures;
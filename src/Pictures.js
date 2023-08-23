import photos from "./photosets.json"

const Pictures = () => {
  const renderPhotos = () => {
    return photos.map((photoset) => {
      return (
        <div key={photoset.id}>
          <div className="row">
            <img className="col photoset-img" src={photoset.before_url} alt="" />
            <img className="col photoset-img" src={photoset.after_url} alt="" />
          </div>
          <h2>{photoset.quote_text}</h2>
        </div>
      )
    })
  }
  return (
    <div id="pictures">
      {renderPhotos()}
      pictures
    </div>
  )
}

export default Pictures;
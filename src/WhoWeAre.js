import { useEffect } from "react";

const WhoWeAre = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Who We Are";
  }, [])
  return (
    <div id="who-we-are">
      <div id="wwa-header-div">
        <div id="wwa-text-background">
          <div id="kristin_and_dom">
            <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1693497661/Krisitn_Dom_sl2wak.jpg" alt="" />
          </div>
          <h1 className="wwa-header about-text-header">We're Kristin & Domanic Wiesner,</h1>
          <h1 className="wwa-sub-header about-text-sub">the owners of Northwest Quality Cleaning LLC. We're so grateful to get to work together as husband and wife, with this being our full time career, and supporting us as we work towards building our future together, all by God's grace!</h1>
        </div>
      </div>
      <div id="wwa-our-purpose">
        <div className="col-6">
          <img className="wwa-picture" id="our-purpose-picture" src="https://res.cloudinary.com/dawteptkh/image/upload/v1693372550/FullSizeRender_b9yod9.jpg" alt="" />
        </div>
        <div id="our-purpose-text">
          <h1 className="wwa-header">Our Purpose:</h1>
          <h1 className="wwa-sub-header">We're here to serve you, make your life easier, and take the time to do the things you don't have time or maybe the capability to do anymore. We are dedicated to our quality towards every client, whether a one time or continual weekly cleaning, we will serve you and your home to the best of our abilities, giving you confidence and peace of mind, with your decision to take us on as your personal cleaners!</h1>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre;
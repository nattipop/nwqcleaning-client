import { useEffect } from "react";

const WhoWeAre = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Who We Are";
  })
  return (
    <div id="who-we-are">
      <div id="wwa-header-div">
        <div id="wwa-text-background">
          <h1 id="wwa-header">Who We Are</h1>
          <h3 id="wwa-sub-header">Hi! We're Kristin and Domanic Wiesner, the owners of Northwest Quality Cleaning LLC. We're so grateful to get to work together as husband and wife, with this being our full time career, and supporting us as we work towards building our future together, all by God's grace! </h3>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre;
import { useEffect } from "react";

const WhoWeAre = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Who We Are";
  })
  return (
    <div id="who-we-are">who we are</div>
  )
}

export default WhoWeAre;
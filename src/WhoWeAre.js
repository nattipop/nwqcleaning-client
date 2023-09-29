import { useEffect } from "react";

const WhoWeAre = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Who We Are";
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {/* <div id="sponsors-div" className="row">
        <h1 id="sponsor-title">By choosing us you are also helping to support:</h1>
        <div id="sponsor-phc" className="col sponsor">
          <img className="sponsor-images" src="https://scontent.feau1-1.fna.fbcdn.net/v/t39.30808-6/241627138_4316546101756663_1001089809806014965_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=UKOpiIpXtAgAX86530l&_nc_oc=AQm8E9lmCoEcfq-RhmCe3AbsprmQg0HnIfOGCL2fujU5LPmWtKffGRciwz9g8nEAgSE&_nc_ht=scontent.feau1-1.fna&oh=00_AfAIuK2yqInBNzstVJrtAj-Lb_Q_w2xZ7yIKdyg0Ahaiaw&oe=651A234F" alt="PHC" />
          <Link to="https://www.phcricelake.org/"><h1 className="sponsor-header">Pregnancy Help Center of Rice Lake</h1></Link>
          <h3 className="sponsor-description"><span>A percentage of the money we make goes toward PHC of Rice Lake. <br></br><br></br>From their website:<br></br> "Pregnancy Help Center of Rice Lake opened its doors to the community in 2001. This is a place where all our welcome regardless of race, economic status, age, marital status, or gender. Our client advocates and staff are here to meet with you about pregnancy, relationships, parenting options, and more."</span></h3>
          <a href="https://www.phcricelake.org" className="sponsor-read-more">Read More Here</a>
        </div>
        <div id="sponspor-mfh" className="col sponsor">
          <img className="sponsor-images" src="https://liveglobal.org/wp-content/uploads/2022/09/unnamed-1-1-1-768x576.webp" alt="My Father's House" />
          <Link to="https://liveglobal.org/partner/my-fathers-house-haiti/"><h1 className="sponsor-header">My Father's House in Haiti:</h1></Link>
          <h3 className="sponsor-description"><span>A percentage of the money we make also goes toward My Father's House. If you would like to give more for this cause specifically, leave a tip! All tips we recieve will be donated to My Father's House. <br></br><br></br>Description from their website:<br></br> "Three hundred thousand orphans in Haiti live around the streets and they have nobody to think about them. There are many who are homeless, lonely, from divorced homes, or abused. They all need the good news of the Gospel that Jesus loves them and that He offers them salvation. Hence, we need to reach out to children in Haiti. We are an orphanage located principally in Petion Ville Port au Prince the capital of Haiti."</span></h3>
          <a href='https://liveglobal.org/partner/my-fathers-house-haiti/' className="sponsor-read-more">Read More Here</a>
        </div>
      </div> */}
    </div>
  )
}

export default WhoWeAre;
import { useEffect } from "react";

const WhatToExpect = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | What To Expect";
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="what-to-expect">
      <div id="wte-header-div">
        <div className="wte-title">
          <h1 id="wte-header">Here's what you can expect when working with us:</h1>
        </div>
      </div>
      <div id="wte-all-steps">
        <div className="wte-step">
          <div className="col-auto overlay-picture">
            <img className="wte-photos" src="https://res.cloudinary.com/dawteptkh/image/upload/v1696001163/IMG_3951_nennrx.jpg" alt="" />
            <div className="wte-number-overlay">
              <h1 className="wte-number">1</h1>
            </div>
          </div>
          <div className="col wte-step-div">
            <h1 className="wte-step-header">Call us! <span id="call-us">(715) 651-8994</span></h1>
            <h3 className="wte-step-sub-header">The purpose of a phone call is for us to get to know each other. It's important for us to get an idea of what you are looking for so we can best fit your needs. If you are ready to move forward, we will schedule a consultation at your most convenient time!</h3>
          </div>
        </div>
        <div className="wte-step">
          <div className="col-auto overlay-picture">
            <img className="wte-photos" src="https://res.cloudinary.com/dawteptkh/image/upload/v1696001163/IMG_3949_nemuk7.jpg" alt="" />
            <div className="wte-number-overlay">
              <h1 className="wte-number">2</h1>
            </div>
          </div>
          <div className="col wte-step-div">
            <h1 className="wte-step-header">Consultation</h1>
            <h3 className="wte-step-sub-header">Next we meet in person! This is important to us because, as your personal cleaners, we will be the ones doing each job. We love to get to know the people we are working with! The consultation consists of a 10-15 minute walk-through of the space as well as time for any extra questions or concerns you may have.</h3>
          </div>
        </div>
        <div className="wte-step">
          <div className="col-auto overlay-picture">
            <img className="wte-photos" src="https://res.cloudinary.com/dawteptkh/image/upload/v1696001164/IMG_3950_fmqjtw.jpg" alt="" />
            <div className="wte-number-overlay">
              <h1 className="wte-number">3</h1>
            </div>
          </div>
          <div className="col wte-step-div">
            <h1 className="wte-step-header">Post-Consultation Follow-Up</h1>
            <h3 className="wte-step-sub-header">You will recieve an email or text (your preference) of the proposal. If everything looks great to you, let us know! We will get you on our schedule for your first clean.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatToExpect;
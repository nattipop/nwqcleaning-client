import { useEffect } from "react";

const WhatToExpect = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | What To Expect";
    window.scrollTo(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="what-to-expect">
      <h1 id="wte-header">Coming soon</h1>
    </div>
  )
}

export default WhatToExpect;
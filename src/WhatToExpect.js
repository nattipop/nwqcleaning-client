import { useEffect } from "react";

const WhatToExpect = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | What To Expect";
  }, [])

  return (
    <div id="what-to-expect">
      <h1 id="wte-header">Coming soon</h1>
    </div>
  )
}

export default WhatToExpect;
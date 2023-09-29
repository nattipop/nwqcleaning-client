import { useEffect } from "react";

const WhatToExpect = ({history}) => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | What To Expect";
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="what-to-expect">
      <h1 id="wte-header">Coming soon</h1>
    </div>
  )
}

export default WhatToExpect;
import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Home";
  })

  return (
    <div id="home">home</div>
  )
}

export default Home;
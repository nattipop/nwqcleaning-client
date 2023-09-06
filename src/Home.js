import { useEffect } from "react";


const Home = () => {
  useEffect(() => {
    document.title = "Northwest Quality Cleaning | Home";
  })

  return (
    <div id="home">
      <div id="hero">
        <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1693924151/7E5F4045-C429-4A73-A548-0CB74D7675DA_fie4kc.jpg" alt="" />
      </div>
      <div id="hero-logo">
        <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1692930718/IMG_1955_Small_a86c79.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home;
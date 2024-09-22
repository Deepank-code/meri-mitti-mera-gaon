import "./Home.css";
import FeatureSection from "./FeatureSection";
import AboutComp from "./AboutComp";

import ProductCard from "./ProductCard";

const addTocartHandler = () => {};
const Home = () => {
  return (
    <>
      <div id="parent-home-div">
        <div className="banner ">
          <div className="left-section">
            <p id="first-para">More Faster</p>
            <h2>
              Be The Fastest In Delivering Your <span>Food</span>
            </h2>

            <a href="#" className="get-started-btn">
              Get Started
            </a>
          </div>
          <div className="right-section">
            <img className="clock_icon" src="images/clock.png" alt="clock" />
            <div className="parent-img-div">
              <img className="bg-icon" src="images/bg-circle.png" />
              <img className="eating-girl" src="images/eating-girl.png" />
              <img className="pizza-widzet" src="images/pizza-wid.png" />
            </div>

            <img className="arrow-icon" src="images/arrow.png" />
          </div>
        </div>
        <FeatureSection />
        <div>
          <h2>Our Products</h2>
          <ProductCard
            productID="rte"
            price={230}
            stock={200}
            name="Tomato"
            photo="https://img.freepik.com/free-photo/photo-red-fresh-tomato-blank-background_125540-4260.jpg?size=626&ext=jpg&ga=GA1.1.1824858138.1725949183&semt=ais_hybrid"
            handler={addTocartHandler}
          />
        </div>

        {/* <OurMenu />  */}
        <AboutComp />
      </div>
    </>
  );
};
export default Home;

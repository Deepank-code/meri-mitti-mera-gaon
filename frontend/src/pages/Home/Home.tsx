import "./Home.css";
import FeatureSection from "./FeatureSection";
import AboutComp from "./AboutComp";

import ProductCard from "./ProductCard";
import { useLatestProductsQuery } from "../../redux/api/productApi";

const addTocartHandler = () => {};
const Home = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");
  console.log(data);
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
          {data?.products.map((p) => {
            return (
              <ProductCard
                key={p._id}
                productID={p._id}
                price={p.price}
                stock={p.stock}
                name={p.name}
                photo={p.photo}
                handler={addTocartHandler}
              />
            );
          })}
        </div>

        {/* <OurMenu />  */}
        <AboutComp />
      </div>
    </>
  );
};
export default Home;

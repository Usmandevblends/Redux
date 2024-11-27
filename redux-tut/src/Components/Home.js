import React from "react";
import phoneImage from "../Images/phone.png";

function Home() {
  return (
    <>
      <div>
        <div className="add-to-cart">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"  alt="E-commerce display"  />
        </div>
        <h1>Home Components</h1>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src={phoneImage} alt="Phone" />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price:$1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

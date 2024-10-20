import React, { useState } from "react";
import "./special.css";
import pic from "../../images/special-dish-banner.jpg";
import Seperator from "../../images/separator.svg";

const Special = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReadMore = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container-fluid special">
        <div className="row">
          <div className="col-12 col-md-6">
            <img src={pic} alt="Special Dish" className="special" />
          </div>
          <div className="col-12 right col-md-6">
            <p id="main-head">
              <small>SPECIAL DISH</small>
            </p>
            <img src={Seperator} alt="Separator" id="seperator" width="100px" />
            <h1 style={{ fontFamily: "Times, serif" }}>Lobster Tortellini</h1>
            <p>
              Indulge in our exquisite Lobster Tortellini, a delightful dish
              that features fresh lobster encased in delicate pasta, served with
              a rich and creamy sauce. Each bite offers a perfect blend of
              flavors, combining the sweetness of the lobster with a hint of
              garlic and herbs. This dish is not just a meal; it's an experience
              that transports you to the seaside with every mouthful. Paired
              with seasonal vegetables and a touch of lemon, it's a culinary
              journey you won't want to miss.
            </p>
            <span className="num">
              <strong>150 4928799</strong>
            </span>
            <br />
            <button type="button" id="btn2" onClick={handleReadMore}>
              <small>Read More</small>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>
              <b>Lobster Tortellini</b>
            </h2>
            <p>
              Lobster Tortellini features tender pasta filled with fresh lobster
              meat, complemented by a rich, creamy sauce. This luxurious dish is
              a celebration of coastal flavors, often enjoyed at special
              occasions for its elegance and depth of taste.
            </p>
            <button onClick={closeModal} id="btn2">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Special;

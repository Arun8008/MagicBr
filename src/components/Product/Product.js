import React from "react";
import "./Product.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Building, Home } from "../Redux/Slice";

export const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HomeDetails = useSelector(({ StoreAll }) => StoreAll.Building);
  console.log(HomeDetails);

  const Build = (value) => {
    dispatch(Home(value));
    navigate("/details");
    // console.log([value]);
  }

  return (
    <div className="card-section">
      <div className="container">
        <h2 className="heading">New Project Gallery</h2>
        <div className="row">
          {HomeDetails?.map((value, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="cardfull" onClick={() => Build(value)}>
                  <div className="col-5">
                    <div className="cardimg">
                      <img src={value.image} />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="cardcontent">
                      <h2>{value.title}</h2>
                      <h4>{value.name}</h4>
                      <h5>{value.area}</h5>
                      <p className="space">{value.space}</p>
                      <h3>{value.Amount}</h3>
                      <p>{value.limit}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

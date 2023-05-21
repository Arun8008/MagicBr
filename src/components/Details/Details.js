import React from "react";
import "./Details.scss";
import TextField from "@mui/material/TextField";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BalconyOutlinedIcon from "@mui/icons-material/BalconyOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import FloodOutlinedIcon from "@mui/icons-material/FloodOutlined";
import NightlifeOutlinedIcon from "@mui/icons-material/NightlifeOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useSelector } from "react-redux";
import { Home } from "../Redux/Slice";

const Details = () => {

  console.log(Home);

  const FullDetails = useSelector(({ StoreAll }) => StoreAll.Home);
  console.log(FullDetails);

  return (
    <>
      <div className="Details-Section">
        <div className="container">
          <div className="row">
            {[FullDetails]?.map((value, index) => {
              return (
                <div key={index} className="col-9">
                  <div className="home-detail">
                    <div className="offer-detail">
                      <div className="detail-head">
                        <p>
                          <span>{value.Amount}</span>
                          <a href="#">{value.Loan}</a>
                        </p>
                        <MoreVertIcon className="dot-icon" />
                      </div>
                      <div className="sale">
                        <p>
                          {value.Bhk}
                          <a href="#">{value.Location}</a>
                        </p>
                      </div>
                    </div>
                    <div className="Home-content">
                      <div className="row">
                        <div className="col-4">
                          <div className="Home-img">
                            <img src={value.img} />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="speciality">
                            <div className="col-12">
                              <div className="Room-speciality">
                                <div className="Beds">
                                  <BedOutlinedIcon />
                                  <p>{value.Beds}</p>
                                </div>
                                <div className="Baths">
                                  <BathtubOutlinedIcon />
                                  <p>{value.Baths}</p>
                                </div>
                                <div className="Balcony">
                                  <BalconyOutlinedIcon />
                                  <p>{value.Balcony}</p>
                                </div>
                                <div className="Unfurnished">
                                  <ChairOutlinedIcon />
                                  <p>{value.Covered}</p>
                                </div>
                              </div>
                            </div>
                            <div className="Land-speciality">
                              <div className="col-12 land-1">
                                <div className="col-4 Carpet Area">
                                  <p>Carpet Area</p>
                                  <h4>{value.CarpetArea}</h4>
                                  <p>₹4,444/sqft</p>
                                </div>
                                <div className="col-4 Transaction-Type">
                                  <p>Transaction Type</p>
                                  <h4>{value.Transcationtype}</h4>
                                </div>
                                <div className="col-4 Status">
                                  <p>Status</p>
                                  <h4>Ready to Move</h4>
                                </div>
                              </div>
                              <div className="col-12 land-1">
                                <div className="col-4 Additional-Rooms">
                                  <p>Additional Rooms</p>
                                  <h4>{value.Floor}</h4>
                                </div>
                                <div className="col-4 Facing">
                                  <p>Facing</p>
                                  <h4>{value.Facing}</h4>
                                </div>
                                <div className=" col-4 Furnished-Status">
                                  <p>Furnished Status</p>
                                  <h4>{value.FurnishedStatus}</h4>
                                </div>
                              </div>
                              <div className="col-12 land-1">
                                <div className="col-4 Lift">
                                  <p>Lift</p>
                                  <h4>{value.Lift}</h4>
                                </div>
                                <div className="col-4 Type-Of-Ownership">
                                  <p>Type Of Ownership</p>
                                  <h4>{value.TypeOfOwnership}</h4>
                                </div>
                                <div className="col-4 Parking">
                                  <p>Parking</p>
                                  <h4>{value.Carparking}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Contact-btn">
                      <button className="Con-btn">
                        <a href="#">Contact Builder</a>
                      </button>
                      <button className="Con-btn">
                        <a href="#">Book Site Visit</a>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-3">
              <div className="contact-detail">
                <h3>Contact Agent</h3>
                <p>Connection Point +91-98XXXXXX58</p>
                <div className="form">
                  <TextField
                    id="standard-multiline-flexible"
                    label="Your Name"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                  <TextField
                    id="standard-multiline-flexible"
                    type="tel"
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </div>
                <p>
                  I Agree to MagicBricks'<a href="#">Terms of Use</a>
                </p>
                <div className="Contact-Details">
                  <button>Get Contact Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="More-Details">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="All-Details">
                <h3>More Details</h3>
                <table>
                  <tr>
                    <td className="bold">Rental Value</td>
                    <td>₹55,000 | ₹10,000 Monthly Maintenance</td>
                  </tr>
                  <tr>
                    <td className="bold">Security Deposit</td>
                    <td>₹3.3 Lac</td>
                  </tr>
                  <tr>
                    <td className="bold">Address</td>
                    <td>Kovilambakkam, Chennai</td>
                  </tr>
                  <tr>
                    <td className="bold">Landmarks</td>
                    <td>Pallavaram 100 feet road</td>
                  </tr>
                  <tr>
                    <td className="bold">Furnishing</td>
                    <td>Unfurnished</td>
                  </tr>
                  <tr>
                    <td className="bold">Flooring</td>
                    <td>Ceramic Tiles, Vitrified</td>
                  </tr>
                  <tr>
                    <td className="bold">Overlooking</td>
                    <td>Garden/Park, Pool, Main Road</td>
                  </tr>
                </table>
                <div className="view">
                  <a href="#" className="btn">
                    View All Details
                  </a>
                  <KeyboardArrowDownIcon />
                </div>
                <p>
                  Description:
                  <span>
                    The property is located in Padur location with all the
                    needed amenitieseasy to access all places
                  </span>
                </p>
                <div className="Contact-btn">
                  <button className="Con-btn">
                    <a href="#">Contact Builder</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Amenities-section">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="amenities">
                <h3>Amenities</h3>
                <div className="row">
                  <div className="col-4">
                    <div className="Amenities-content">
                      <TipsAndUpdatesOutlinedIcon className="icon" />
                      <p>Power Back up</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <FloodOutlinedIcon className="icon" />
                      <p>Rain Water Harvesting</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <NightlifeOutlinedIcon className="icon" />
                      <p>Club House</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <ParkOutlinedIcon className="icon" />
                      <p>Park</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <LocalParkingOutlinedIcon className="icon" />
                      <p>Reserved Parking</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="Amenities-content">
                      <SecurityOutlinedIcon className="icon" />
                      <p>Security</p>
                    </div>
                  </div>
                </div>
                <div className="Contact-btn">
                  <button className="Con-btn">
                    <a href="#">View all 18 Amenities</a>
                    <KeyboardArrowDownIcon />
                  </button>
                  <button className="Brochure">
                    <FileDownloadOutlinedIcon />
                    <a href="#">Download Brochure</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

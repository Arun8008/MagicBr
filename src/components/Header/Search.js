import React from "react";
import tvc from "../Header/image/tvc.png";
// import tvc2 from '../Header/image/tvc2.png';
import "./Search.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Search = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <div className="searchsec">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="search-content">
                <h3>Welcome back! Let's continue your search</h3>
                <ul className="searchmenu">
                  <li>
                    <a className="line active" href="#">
                      Buy
                    </a>
                  </li>
                  <li>
                    <a className="line" href="#">
                      Rent
                    </a>
                  </li>
                  <li>
                    <a className="line" href="#">
                      PG
                    </a>
                  </li>
                  <li>
                    <a className="line" href="#">
                      Plot
                    </a>
                  </li>
                  <li>
                    <a className="line" href="#">
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a className="line" href="#">
                      Post Free Property Ad
                    </a>
                  </li>
                </ul>
                <div className="searchbox">
                  <div className="searchcenter">
                    <LocationOnIcon />
                    <p className="chennailoc">Chennai</p>
                  </div>
                  <input type="text" placeholder="Add more..."></input>
                  <div className="searchcenter" onChange={handleChange}>
                    <HomeIcon />
                    <p>Flat</p>
                    <KeyboardArrowDownIcon />
                  </div>
                  <div className="searchcenter">
                    <CurrencyRupeeIcon />
                    <p>Budget</p>
                    <KeyboardArrowDownIcon />
                  </div>
                  <button>
                    <SearchIcon />
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="img-content">
                <img src={tvc}></img>
                {/* <img src={tvc2}></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

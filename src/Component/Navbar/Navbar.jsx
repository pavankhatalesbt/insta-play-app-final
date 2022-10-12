import style from "./Navbar.module.css";
import Logo from "../../images/Logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import search from '../../images/search.svg'
import axios from "axios";

import Card from "../../Component/Mainpage/Card/Card";

const token = localStorage.getItem("token");

const Navbar = (props) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const removeUser = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <>
      <div className={style.container}>
        <div className={style.imgcontainer}>
          <img src={Logo} alt="websitelogo" />
        </div>

        {token ? (
          <div className={style.searchcontainer}>
            <div className="searchbox">
              <input
                className="inputsearch"
                type="text"
                onChange={props.onChangeHandler}
                placeholder="Search Movies"
              />
              <button
                className="searchbtn"
                onClick={props.searchMovie}
                type="submit"
              >
                <img src={search} />
              </button>
            </div>

            <button onClick={removeUser} className={style.logout}>
              Logout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;

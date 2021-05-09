import React from "react";
import "./page-notfound-style.scss";
import notfound from '../../assests/notfound.png'
import { Link } from "react-router-dom";

const PageNotfound = () => {
  return (
    <div class="mainbox">
       <img src={notfound} alt=""/>
    </div>
  );
};

export default PageNotfound;

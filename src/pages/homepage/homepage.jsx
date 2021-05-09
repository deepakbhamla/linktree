import React from "react";
import Search from '../search/search'
import PopularUser from '../user/user'
import "./homepage.style.scss";
import social from '../../assests/Social Media - 35344.mp4'
import VideoBg from "reactjs-videobg";

import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className="user">
          <VideoBg>
            <VideoBg.Source src={social} type="video/ogg" />
            <VideoBg.Source src={social} type="video/webm" />
            <VideoBg.Source src={social} type="video/mp4" />
          </VideoBg>
            <div>
                <h1 style={{color:'#333', display:'block'}}>
                    The Only Link You’ll Ever Need
                </h1>
                <p style={{marginBottom:'40px'}}>
                    Connect audiences to all of your content with just one link
                </p>
            </div>
            <Search/>
            <PopularUser/>
       </div>

   
    )
};

export default HomePage;

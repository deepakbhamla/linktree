import React from "react";
import "./user2.style.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg"

class User2Data extends React.Component {
  constructor() {
    super();

    this.state = {
      apidata: "",
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/deepakbhamla")
      .then((Response) => Response.json())
      .then((data) => this.setState({ apidata: data }, console.log(data)));
  }

  render() {
    const { apidata } = this.state;
    return (
      <div className="container">
        <div>
          <img className="avatar" src={apidata.avatar_url} alt="avatar" />
          <h1 className="name">@{apidata.login}</h1>
        </div>
        <div className="social-profile">
         <a href="https://www.instagram.com/deepakbhamla"> <button className="btn">Isntagram Profile</button> </a>
          <a href="https://twitter.com/deepakbhamla/"><button className="btn">Twitter Account</button> </a>
          <a href="https://github.com/deepakbhamla"><button className="btn">Github Account</button></a>
          <a href="https://www.linkedin.com/in/deepakbhamla/"><button className="btn">Linkden Profile</button></a>
          <a href="https://www.facebook.com/deepakbhamla/"><button className="btn">FaceBook Profile</button></a>
          <button className="btn">Text on Whatsapp</button>
        </div>
        <Logo className="logo"/>
      </div>
    );
  }
}


export default User2Data;
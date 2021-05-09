import React from "react";
import "./user1.style.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg"
import userdata from '../../data'

class User1Data extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: '', 
      id : `${this.props.match.params.id}`
    }
  }

  componentDidMount() {
     const id = parseInt(`${this.props.match.params.id}`)
     this.setState({data:userdata[id-1]})
  }
 
  render() {
    const { data, id } = this.state;
    return (  
      <div className="container" style={{marginTop:'20px'}}>
            <div>
                    <img className="avatar" src={data.avatar} alt="avatar" />
                    <h1 className="name">@{data.first_name} {data.last_name}</h1>
                    <h1 className="name">#{data.id}</h1>
            </div>
            <div className="social-profile">
               <a href={`https://instagram.com/${data.instagram_username}`}> <button className="btn">Isntagram Profile</button> </a>
               <a href={`https://twitter.com/${data.twitter_username}`}><button className="btn">Twitter Account</button> </a>
               <a href={`https://github.com/${data.github_username}`}><button className="btn">Github Account</button></a>
               <a href={`https://linkedin.com/in/${data.linkedin_username}`}><button className="btn">Linkden Profile</button></a>
               <a href={`https://facebook.com/${data.facebook_username}`}><button className="btn">FaceBook Profile</button></a>
               <button className="btn">Text on Whatsapp</button>
            </div>
        <Logo className="logo"/>
      </div>
    );
  }
}

export default User1Data;

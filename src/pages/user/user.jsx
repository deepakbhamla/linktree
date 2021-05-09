import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './user.css'
import userdata from '../../data'

export class PopularUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData : userdata
        }
    }
    
    render() {
        console.log(this.state.userData[0])
        return (
            <div style={{width:'50%', margin:'auto',marginTop:'60px', textAlign:'left'}}>
                <p>Popular Influencer...</p>
                <hr/>
                <div className="popular">
                    {
                        this.state.userData.map(value => 
                            <Link to={`/@user-links/${value.id}`} style={{textDecoration:'none',color:'#000'}}>  
                                <div >
                                    <img className="user" width='250px' src={value.avatar}/>
                                    <h1 className="username">{value.first_name} {value.last_name}</h1>
                                </div>
                            </Link>

                        )
                    }
                </div>
            </div>
        )
    }
}

export default PopularUser

import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <input type="search" 
                       placeholder='Search for influencer'  
                       style={{width:'50%',padding:'8px', borderRadius:'5px', outline:'none', border:'1px solid #28BF7B', color:'#28BF7B'}}/>
            </div>
        )
    }
}

export default Search

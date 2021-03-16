import React, { Component } from "react";

class Search extends Component {
    state = {};
    render(){
        return (
            <div className="">
            <h1 className="text-center text-primary">Welcome to course listings</h1>
                <input className="form-control inline-block" type="text" placeholder="Search" />
                <button className="btn btn-outline-primary float-middle">Search</button>
            </div>
        )
    }
}
export default Search
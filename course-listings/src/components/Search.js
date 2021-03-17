import React, { Component } from "react";
import '../bootstrap/bootstrap.min.css';
import axios from 'axios';


class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue:'',
            courses: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.getCourseDetails = this.getCourseDetails.bind(this);
        this.handleSearch =  this.handleSearch.bind(this);
    }

    handleChange = (event) => {
        const searchValue = event.target.value;
        this.setState({
            searchValue : searchValue
        });
    }    

    getCourseDetails = async () => {
        let courseUrl = await axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        console.log(courseUrl)
        this.setState({
            courses : courseUrl.data
        })
        
    }

    handleSearch = () => {
        this.getCourseDetails(this.state.searchValue);
    }

    render(){
        const { searchValue } = this.state;
        console.warn(this.state);
        const { courses } = this.state;
        return (
            <div className="container">
            <h1 className="text-center text-primary">Welcome to course listings</h1>
                <input className="form-control" type="text" name="searchValue" 
                placeholder="Search" value={searchValue} onChange={(event)=> this.handleChange(event)}/>
                <button className="btn btn-outline-primary" onClick={this.handleSearch}><i className="fa fa-search search-icon"/> Search</button>
                {courses ? (
                    <div>
                        {courses.map((course,index) => {
                            return (
                            <div key={index}>
                                <h1>Course Id:{course["Course Id"]}</h1>
                                <div className="card card-primary">
                                    <div className="card-block">
                                        <h2 className="card-title">Course Name:{course["Course Name"]}</h2>
                                        <label htmlFor="provider" className="card-text">Provider:{course["Provider"]}</label>
                                        <label htmlFor="Universities/Institutions" className="card-text">Universities/Institutions:{course["Universities/Institutions"]}</label>
                                        <label htmlFor="Parent Subject" className="card-text">Parent Subject:{course["Parent Subject"]}</label>
                                        <label htmlFor="Child Subject" className="card-text">Child Subject:{course["Child Subject"]}</label>
                                        <a href={course["Url"]} >Click here to dive into our course</a>
                                        <label htmlFor="Next Session Date">Next Session Date:{course["Next Session Date"]}</label>
                                        <label htmlFor="Length">Length:{course["Length"]}</label>
                                        <label>Video(Url):<a href={course["Video(Url)"]}>heloourl</a></label>
                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                ):(
                    <div className="card text-center">
                   <h2>Try Searching for a courses</h2> 
                   </div>
                )}
                </div>
                )}
        
    }

export default Search
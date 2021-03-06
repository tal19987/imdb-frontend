import React, { Component } from 'react';
import axios from 'axios';
import '../css/designs.css'
import Movie from '../functions/movies_list.function' 
import GithubLink from '../functions/gitHubLink.function';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchString: "",
            movies: {},
            showText: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.movies_func = this.movies_func.bind(this);
      }
    
    handleChange(e) {
        this.setState({
            searchString: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.get('http://localhost:8080/movies?movie='+this.state.searchString,
            { headers: {'Content-Type': 'application/json'} })
            .then(res =>
                    this.setState ({
                        movies: res.data["movies"],
                        showText: true
                    })
            
                )
    }
    movies_func() {
        var movies = this.state.movies.map((movie,i) => 
            {   
                return (
                    Movie(movie,i)
                )
            }
        )
        return movies
    }
    render() {
        return(
            <div>
                <form className="form-inline d-flex justify-content-center" style={{marginTop: "4%"}} onSubmit={this.handleSubmit}>
                    <div style={{marginBottom: "10px"}}>
                        <input type="movies" className="form-control mx-sm-3 mb-2" placeholder="Sepearate using ','" value={this.state.searchString} onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-primary mb-2">Click Me!</button>
                    </div>
                </form>
                <div className="row text-center text-lg-left">
                    {
                        this.state.showText && this.movies_func()
                    }
                </div>
                <hr />
                <GithubLink />
            </div>
        )
    }
}
export default Movies;
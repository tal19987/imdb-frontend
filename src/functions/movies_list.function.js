import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

var Movie = (movie,i) => {
    return (
            <div className="col-lg-2 col-md-1 col-1" style={{paddingLeft: "2rem"}} > 
                <div className="card" key={i} style={{width: "11rem",paddingBottom: "5px"}}> 
                    <img className="card-img-top" src={movie["poster"]} alt=""/> 
                    <div className="card-body">
                        <p class="card-text">
                            {movie["name"]}
                        </p>
                        <p class="card-text">
                            <FontAwesomeIcon icon={faStar}  style={{color: "yellow" }}/>
                            {movie["rating"]}
                            <span> <small> /10</small></span>
                        </p>
                    </div>
                </div>
            </div>
    )
}
export default Movie;
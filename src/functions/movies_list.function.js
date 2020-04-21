import React from 'react';

var Movie = (movie,i) => {
    return (       
        <div key={i}> 
            movie name is: {movie["name"]} <br />
            rating is: {movie["rating"]} <br />
            poster is: <img src={movie["poster"]} alt=""/> 
        </div>
    )
}
export default Movie;
import React, { Component } from 'react';
import 'animate.css';
import '../css/input.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Headline extends Component {
    render() {
        return (
            <div>
                <h1 className="text d-flex justify-content-center" style={{paddingTop: "100px"}}> Movies</h1>
                <span className="text-sub d-flex justify-content-center"> Perfect Movie Place </span>
            </div>
        )
    }
}
export default Headline;
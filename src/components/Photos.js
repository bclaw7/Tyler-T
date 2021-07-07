import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class Photos extends Component {
    render() {
        return (
            <Carousel>
                <div  id="photos">
                    <img src="img/tylert-backyard.jpg" alt="live at backyard" />
                    <p className="legend">Live at Kinney Family Farm - June 2021</p>
                </div>
                <div>
                    <img src="img/tylert-radio.jpg" alt="on air" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="img/tylert-sepia.jpg" alt="live at haunted hotel" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

    state = {
        rating: 0
    }
  // Initialize a 'rating' state


  // Write a function that returns 5 Star components
renderStars = () => {
    let stars = []
    let maxRating = 5 

    for (let i = 0; i < maxRating; i ++) {
        stars.push(
            <Star
                isSelected={ this.state.rating > i } 
                setRating= {() => this.handleStarUpdate(i + 1) }
                key={i}
            />
        )
    }
    return stars
}

  // Write an event handler that updates the rating state.

handleStarUpdate = (rating) => {
    if (this.state.rating === rating) {
        this.setState({ rating : 0 })
    } else {
        this.setState(
            { rating }
        )
    }
}
  // Pass the function to a Star component via props


    render() {
        return (
            <ul className="course--stars">
                {this.renderStars()}
            </ul>
        );
    }
}

export default StarRating;
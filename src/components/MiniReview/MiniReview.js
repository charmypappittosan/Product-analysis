import React from 'react';

const MiniReview = ({review}) => {
    const {name,feedback}=review;
    return (
        <div>
            <h1>{name}</h1>
            <p>{feedback}</p>
        </div>
    );
};

export default MiniReview;
import React from 'react';
import 'animate.css';

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border rounded-lg p-4 m-2 shadow-md animate__animated animate__fadeIn animate__delay-0.5s">
      <img src={review.image} alt={review.product} className="w-full h-32 object-cover rounded-md" />
      <h2 className="font-bold mt-2">{review.product}</h2>
      <div className="flex mt-1">{renderStars(review.rating)}</div>
      <p className="text-gray-600 mt-1">{review.content}</p>
    </div>
  );
};

export default ReviewCard;

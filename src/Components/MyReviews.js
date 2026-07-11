import React, { useState, useEffect } from "react";

const MyReviews = () => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("myReviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  // Add new review
  const addReview = () => {
    if (reviewText.trim() === "") return;

    const newReview = {
      id: Date.now(),
      text: reviewText
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("myReviews", JSON.stringify(updatedReviews));
    setReviewText("");
  };

  return (
    <div className="card">
      <h2>My Reviews</h2>

      <textarea
        placeholder="Write your review..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />

      <button onClick={addReview}>Post Review</button>

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyReviews;

function MyReviews() {
  const items = Object.keys(localStorage)
    .filter(k => k.startsWith("review-"))
    .map(k => JSON.parse(localStorage.getItem(k)));

  return (
    <div>
      <h2>My Reviews</h2>
      {items.map((r, i) => (
        <div key={i}>
          ❤️ {r.liked ? "Liked" : "No"} | ⭐ {r.starred ? "Rated" : "No"}
          <ul>{r.comments.map((c, j) => <li key={j}>{c}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export default MyReviews;

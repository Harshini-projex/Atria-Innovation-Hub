import React, { useState } from "react";

function ProjectCard({
  title,
  description,
  image,
  author,
  onDelete,
  onAddReview,
}) {
  const [likes, setLikes] = useState(0);
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="author">
        <span>{author}</span>
      </div>

      {/* ⭐ ❤️ */}
      <div className="card-actions">
        <button className="like" onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </button>
        <button className="star" onClick={() => setStars(stars + 1)}>
          ⭐ {stars}
        </button>
      </div>
        {title === "Sahayak" && (
  <button
    className="doc-btn"
    onClick={async () => {
      try {
        const response = await fetch("SIP Group report Final.pdf");
        const blob = await response.blob();

        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, "_blank");

        // Optional cleanup
        setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);
      } catch (err) {
        alert("Unable to open document");
      }
    }}
  >
    📄 View Project Document
  </button>
)}
        {title === "AI Career Buddy" && (
  <button
    className="doc-btn"
    onClick={async () => {
      try {
        const response = await fetch("Career Buddy report.pdf");
        const blob = await response.blob();

        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, "_blank");

        // Optional cleanup
        setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);
      } catch (err) {
        alert("Unable to open document");
      }
    }}
  >
    📄 View Project Document
  </button>
)}
          {title === "Coffee Website" && (
  <button
    className="doc-btn"
    onClick={async () => {
      try {
        const response = await fetch("4codz ppt.pptx");
        const blob = await response.blob();

        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, "_blank");

        // Optional cleanup
        setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);
      } catch (err) {
        alert("Unable to open document");
      }
    }}
  >
    📄 View Project Document
  </button>
)}
       {title === "CashMate App" && (
  <button
    className="doc-btn"
    onClick={async () => {
      try {
        const response = await fetch("4codz ppt.pptx");
        const blob = await response.blob();

        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, "_blank");

        // Optional cleanup
        setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);
      } catch (err) {
        alert("Unable to open document");
      }
    }}
  >
    📄 View Project Document
  </button>
)}
      {title === "AtriaEduEats Website" && (
  <button
    className="doc-btn"
    onClick={async () => {
      try {
        const response = await fetch("IDT Web Report.docx");
        const blob = await response.blob();

        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, "_blank");

        // Optional cleanup
        setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);
      } catch (err) {
        alert("Unable to open document");
      }
    }}
  >
    📄 View Project Document
  </button>
)}
{title === "Smart Parking" && (
  <button
    className="doc-btn"
    onClick={async () => {
      try {
        const response = await fetch("smart parking system reporttt.docx");
        const blob = await response.blob();

        const fileURL = window.URL.createObjectURL(blob);
        window.open(fileURL, "_blank");

        // Optional cleanup
        setTimeout(() => window.URL.revokeObjectURL(fileURL), 10000);
      } catch (err) {
        alert("Unable to open document");
      }
    }}
  >
    📄 View Project Document
  </button>
)}

     

      {/* 💬 Comments */}
      <div className="comment-box">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          onClick={() => {
            if (comment.trim() !== "") {
              onAddReview(title, comment);
              setComment("");
            }
          }}
        >
          Post
        </button>
      </div>

      
    </div>
  );
}

export default ProjectCard;

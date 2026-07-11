import React, { useState } from "react";

function Community() {
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("community")) || []
  );

  const post = () => {
    const updated = [...posts, msg];
    setPosts(updated);
    localStorage.setItem("community", JSON.stringify(updated));
    setMsg("");
  };

  return (
    <div>
      <h2>Community</h2>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={post}>Send</button>
      {posts.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default Community;

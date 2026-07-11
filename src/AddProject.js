import React, { useState } from "react";

function AddProject({ addProject }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
  });

  return (
    <div className="add-project">
      <h2>Add New Project</h2>
      <input placeholder="Title" onChange={(e) => setData({ ...data, title: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setData({ ...data, description: e.target.value })} />
      <input placeholder="Image URL" onChange={(e) => setData({ ...data, image: e.target.value })} />
      <input placeholder="Author ID" onChange={(e) => setData({ ...data, author: e.target.value })} />
      <input placeholder="Add Document" onChange={(e) => setData({ ...data, document: e.target.value })} />
      <button onClick={() => addProject(data)}>Add</button>
    </div>
  );
}

export default AddProject;

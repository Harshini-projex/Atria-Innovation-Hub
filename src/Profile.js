import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile")) || {}
  );

  const save = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile Saved");
  };

  return (
    <div>
      <h2>Profile</h2>
      <input placeholder="Bio" onChange={e => setProfile({...profile, bio:e.target.value})}/>
      <input placeholder="Semester" onChange={e => setProfile({...profile, sem:e.target.value})}/>
      <input placeholder="Branch" onChange={e => setProfile({...profile, branch:e.target.value})}/>
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Profile;

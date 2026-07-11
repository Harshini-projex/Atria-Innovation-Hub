import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    branch: "",
    semester: "",
    bio: ""
  });

  // Load profile from localStorage
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  // Save profile to localStorage
  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="card">
      <h2>My Profile</h2>

      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Branch"
        value={profile.branch}
        onChange={(e) => setProfile({ ...profile, branch: e.target.value })}
      />

      <input
        type="text"
        placeholder="Semester"
        value={profile.semester}
        onChange={(e) => setProfile({ ...profile, semester: e.target.value })}
      />

      <textarea
        placeholder="Bio"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
      />

      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default Profile;

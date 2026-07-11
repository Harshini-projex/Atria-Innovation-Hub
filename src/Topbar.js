function Topbar({ onSearch, onSignOut, onAddProject }) {
  return (
    <div className="topbar">
      <input
        type="text"
        placeholder="🔍 Search projects..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="submit-btn" onClick={onAddProject}>
        Add Project
      </button>
      <button className="sign-out-btn" onClick={onSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Topbar;

function Settings() {
  const change = () => alert("Password Changed (demo)");
  return (
    <div>
      <h2>Settings</h2>
      <button onClick={change}>Change Password</button>
    </div>
  );
}

export default Settings;

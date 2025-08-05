import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  if (!user) return <p>Please log in to see your profile.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {user.fullName}!</h1>
      <p>👤 Username: {user.username}</p>
      <p>📧 Email: {user.email}</p>
      <p>📱 Phone: {user.phone}</p>
      <p>🧍 Gender: {user.gender}</p>
      <p>🏠 Address: {user.address}</p>
      <p>📜 Bio: {user.bio}</p>
    </div>
  );
};

export default Profile;

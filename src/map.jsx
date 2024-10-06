// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: link to any CSS styles

// Component to display a team member's info
const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={`${name}'s profile`} className="profile-img" />
      <h2></h2>
      <h4></h4>
      <p>{description}</p>
    </div>
  );
};



ReactDOM.render(<App />, document.getElementById('root'));

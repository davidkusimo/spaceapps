// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: link to any CSS styles

// Component to display a team member's info
const TeamMember = ({ name, role, description, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={`${name}'s profile`} className="profile-img" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};

// Main App component to render team members
const App = () => {
  const team = [
    {
      name: 'Jeel Tandel',
      role: 'Designer/Coder/Innovator',
      description: (
        <p>
          Jeel Tandel is pursuing a Diploma in Computer Programming at Algonquin College 
          (2023-2025) with a strong GPA of 3.67. He possesses programming skills in Java, 
          SQL, and Data Analytics, and is actively involved in community service while representing 
          his peers as a class representative.
        </p>
      ),
      image: '/jeel.jpeg',
    },
    {
      name: 'David Kusimo',
      role: 'Tutor/Developer',
      description: (
        <p>
            First-year Computer Science student at Carleton University, passionate 
            about technology and software development. Eager to explore coding, 
            problem-solving, and emerging fields like AI and cybersecurity.
        </p>
      ),
      image: '/david.jpeg',
    },
    {
      name: 'Ben Nguyen',
      role: 'Bilingual Communicator and Emerging Data Scientist',
      description: (
        <p>
            Versatile professional with a robust background in insurance, 
            e-commerce, and not-for-profit sectors. Currently advancing in 
            cybersecurity and natural language processing, equipped with 
            strong communication and leadership skills developed through 
            Toastmasters. Ben also possesses hands-on programming experience, 
            including chatbot development.
        </p>
      ),
      image: '/ben.jpeg',
    }
  ];

  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-list">
        {team.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <div className="card">
        <Header />
        <SkillList />
        <Skill />
        <Footer />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="img/her.jpg" alt="Lauraine Delarosa"></img>
  );
}

function Header() {
  return (
    <div className="data">
      <h2>Lauraine Delarosa</h2>
      <p>
        Full-stack web developer and student at Udemy. When not coding or
        studying, I like to play board games, to cook (and eat), or to just
        enjoy the sunset at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="lightGreen" />
      <Skill skill="HTML+CSS" emoji="🤭" color="lightPink" />
      <Skill skill="JavaScript" emoji="🙄" color="lightYellow" />
      <Skill skill="Git+GitHub" emoji="👶" color="lightBlue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Footer() {
  return <h5>Thank you for stepping by🤗 </h5>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// const skillsData = [
//   "HTML 💻",
//   "SCC / Sass 💅🏻",
//   "Javascript 🖥️",
//   "React ⚛️",
//   "Git / Github 🔗",
// ];

const skills = [
  {
    skill: "HTML",
    level: "advanced",
  },
  {
    skill: "SCC / Sass",
    level: "advanced",
  },
  {
    skill: "Javascript",
    level: "intermediate",
  },
  {
    skill: "React",
    level: "begginer",
  },
  {
    skill: "Git / Github",
    level: "intermediate",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar photoName="./react-dev_profile/ava/alena.jpeg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photoName} alt="alena-dev" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Alena Vinogradova</h1>
      <h3>
        Junior frontend-developer based in London. Love creating web interfaces.{" "}
      </h3>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill title={skill.skill} level={skill.level} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: getLightHslColor() }}>
      <p>{props.title}</p>
      <span>
        {props.level === "advanced"
          ? "🚀"
          : props.level === "begginer"
          ? "🌱"
          : "✅"}
      </span>
      {/* <span>{props.level === "begginer" ? "😎" : ""}</span>
      <span>{props.level === "intermediate" ? "❤️" : ""}</span> */}
    </div>
  );
}

function getLightHslColor() {
  const h = Math.floor(Math.random() * 360); // Любой цветовой тон
  const s = Math.floor(Math.random() * 30) + 45; // % насыщенности
  const l = Math.floor(Math.random() * 30) + 55; // % светлоты
  return `hsl(${h}, ${s}%, ${l}%)`;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

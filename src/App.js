import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ProjectCard from "./ProjectCard";
import Login from "./Login";
import AddProject from "./AddProject";
import Profile from "./Components/Profile";
import MyReviews from "./Components/MyReviews";
import "./dash.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");
  
  const [projects, setProjects] = useState([
    {
      title: "Coffee Website",
      description: "Responsive coffee website using HTML, CSS, JavaScript",
      image: "https://i.ytimg.com/vi/MYFgtnKMDp4/maxresdefault.jpg",
      author: "1AT24CS072",
    },
    {
      title: "Smart Parking",
      description: "IOT based project on smart cities and urban development",
      image: "https://srrobotics.in/wp-content/uploads/2024/01/photo_3_2024-01-17_11-17-26.jpg",
      author: "1AT24CS0234",
    },
    {
      title: "AtriaEduEats Website",
      description: "Website built using HTML, CSS, JavaScript for Atrians",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMU4Wv9Lk7D_vz-Km3FFcEkP_-K4btlJMhYg&s",
      author: "1AT24CS091",
    },
    {
      title: "CashMate App",
      description: "One stop payment and savings platform for all gig workers",
      image: "https://periwin-cdn.s3.amazonaws.com/cms/media/blog_images/CashMate.png",
      author: "1AT24CS075",
    },
    {
      title: "AI Career Buddy",
      description: "Website that helps youngsters towards their future",
      image: "https://play-lh.googleusercontent.com/EDodom5TrAO45397tTgJ7zE4IYzlCx4C_52Gw6sWRyGDVf8X7nZ3KMAK1b0MIHAsxHbE",
      author: "1AT24CS083",
    },
    {
      title: "Sahayak",
      description: "AI-Powered Hyperlocal EcoSystem for Edtech and Healthtech",
      image: "https://www.studentsahayak.in/images/sahayaklogo.jpeg",
      author: "1AT24CS067",
    },
  ]);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar active={activePage} setActive={setActivePage} />

      <div className="main">
        <Topbar
          onSearch={setSearch}
          onSignOut={() => setIsLoggedIn(false)}
          onAddProject={() => setActivePage("add")}
        />

        {activePage === "dashboard" && (
          <>
            <h1 className="title">Project Dashboard</h1>
            <p className="subtitle">
              Showcase, Browse & Review projects with your peers.
            </p>

            <div className="card-container">
              {filteredProjects.map((p, i) => (
                <ProjectCard key={i} {...p} />
              ))}
            </div>
          </>
        )}

        {activePage === "add" && (
          <AddProject
            addProject={(proj) => {
              setProjects([proj, ...projects]);
              setActivePage("dashboard");
            }}
          />
        )}

        {activePage !== "dashboard" && activePage !== "add" && (
          <h2 style={{ color: "white" }}>
            {activePage} page coming soon 🚀
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;

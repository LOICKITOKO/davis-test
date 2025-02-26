import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Image1 from "./assets/image1.png"; // Image d'accueil
import ImgComedy1 from "./assets/comedy1.png"; // Image comédie 1
import ImgComedy2 from "./assets/comedy2.png"; // Image comédie 2
import ImgComedy3 from "./assets/comedy3.png"; // Image comédie 3
import ImgComedy4 from "./assets/comedy4.png"; // Image comédie 4
import ImgComedy5 from "./assets/comedy5.png"; // Image comédie 5

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="navbar">
          <button onClick={toggleTheme} className="toggle-btn">
            {isDarkMode ? "Mode Clair" : "Mode Sombre"}
          </button>
          <div className="nav-links">
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/a-propos" className="nav-link">À propos</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </div>

        <div className="p-4 max-w-6xl mx-auto text-center">
          <p className="description">
            Bienvenue sur le site de référence de la comédie ! <br />
            Découvrez les différents styles humoristiques qui font rire le monde entier.
          </p>

          <div className="flex items-center justify-center mb-8">
            <img src={Image1} alt="Logo" className="logo" />
            <h1 className="title">Bienvenue sur notre site de comédie</h1>
          </div>

          <h2 className="subtitle">Nos types de comédies</h2>

          <section className="comedy-types">
            <div className="comedy-container">
              {[ 
                { img: ImgComedy1, title: "Comédie romantique", desc: "Un mélange parfait d’amour et d’humour. Des situations drôles qui font battre le cœur.", className1: "romantic", className2: "satire", buttonText1: "🎭 Amour", buttonText2: "Humour" },
                { img: ImgComedy2, title: "Comédie de situation", desc: "Des quiproquos hilarants et des personnages attachants. Le quotidien devient une aventure comique.", className1: "sitcom", className2: "dark-comedy", buttonText1: "😂 Rires", buttonText2: "Quotidiens" },
                { img: ImgComedy3, title: "Comédie noire", desc: "Un humour mordant qui traite des sujets sérieux. Rire pour mieux réfléchir.", className1: "dark-comedy", className2: "animation", buttonText1: "🖤 Humour", buttonText2: "Mordant" },
                { img: ImgComedy4, title: "Comédie d'animation", desc: "Des blagues visuelles et des histoires incroyables. Un plaisir pour tous les âges.", className1: "animation", className2: "sitcom", buttonText1: "🎬 Drôle", buttonText2: "Animé" },
                { img: ImgComedy5, title: "Comédie satirique", desc: "Un regard critique et humoristique sur la société. Exagération et ironie au rendez-vous.", className1: "satire", className2: "romantic", buttonText1: "🎤 Rire", buttonText2: "Réflexion" }
              ].map((comedy, index) => (
                <div key={index} className="comedy-item">
                  <img src={comedy.img} alt={comedy.title} className="comedy-image" />
                  <div className="comedy-content">
                    <h3>{comedy.title}</h3>
                    <p>{comedy.desc}</p>
                    <div className="flex space-x-2 mt-2">
                      <button className={`comedy-button ${comedy.className1} px-4 py-2 rounded`}>{comedy.buttonText1}</button>
                      <span>&</span>
                      <button className={`comedy-button ${comedy.className2} px-4 py-2 rounded`}>{comedy.buttonText2}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Routes>
          {/* Ajoutez d'autres routes pour Contact, À propos et Login si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

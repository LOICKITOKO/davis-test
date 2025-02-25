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
      <div className={`p-4 max-w-6xl mx-auto ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Bouton pour changer le thème */}
        <button onClick={toggleTheme} className="mb-4 px-4 py-2 border rounded">
          {isDarkMode ? "Mode Clair" : "Mode Sombre"}
        </button>

        {/* Navigation */}
        <nav className="flex justify-between mb-8">
          <div>
            <Link to="/" className="mr-4">Accueil</Link>
            <Link to="/contact" className="mr-4">Contact</Link>
            <Link to="/a-propos" className="mr-4">À propos</Link>
            <Link to="/nos-sites" className="mr-4">Nos sites</Link>
          </div>
        </nav>

        {/* Image d'accueil */}
        <div className="flex items-center mb-8">
          <img src={Image1} alt="Logo" className="w-24 h-24 mr-4" />
          <div>
            <h1 className="text-2xl font-bold">Bienvenue sur notre site de comédie</h1>
            <p className="text-gray-600">Découvrez nos contenus hilarants et amusez-vous !</p>
          </div>
        </div>

        {/* Sous-titre : Nos types de comédies */}
        <h2 className="text-xl font-semibold mb-4">Nos types de comédies</h2>

        {/* Types de comédies */}
        <section className="comedy-types">
          <div className="comedy-container">
            <div className="comedy-item">
              <img src={ImgComedy1} alt="Comédie romantique" className="w-32 h-32 mr-4" />
              <div className="comedy-content">
                <h3>Comédie romantique</h3>
                <p>Les comédies romantiques mélangent amour et humour. Elles racontent les hauts et les bas des relations avec légèreté. Les personnages maladroits créent des situations drôles et attachantes. Ces films nous rappellent que l'amour peut être à la fois drôle et touchant.</p>
              </div>
            </div>

            <div className="comedy-item">
              <img src={ImgComedy2} alt="Comédie de situation" className="w-32 h-32 mr-4" />
              <div className="comedy-content">
                <h3>Comédie de situation</h3>
                <p>Les comédies de situation, ou 'sitcoms', se concentrent sur des contextes humoristiques. Elles suivent un groupe d'amis ou une famille dans des situations cocasses. Les malentendus et les quiproquos sont à l'honneur, provoquant de nombreux rires. Chaque épisode apporte de nouvelles aventures tout en gardant l'esprit des personnages.</p>
              </div>
            </div>

            <div className="comedy-item">
              <img src={ImgComedy3} alt="Comédie noire" className="w-32 h-32 mr-4" />
              <div className="comedy-content">
                <h3>Comédie noire</h3>
                <p>Les comédies noires traitent de sujets sérieux avec humour cynique. Elles montrent des personnages en dehors des normes sociales, soulignant l'absurde de la vie. Ce type de comédie mélange rire et réflexion. C'est une manière unique de remettre en question les conventions.</p>
              </div>
            </div>

            <div className="comedy-item">
              <img src={ImgComedy4} alt="Comédie d'animation" className="w-32 h-32 mr-4" />
              <div className="comedy-content">
                <h3>Comédie d'animation</h3>
                <p>Les comédies d'animation séduisent petits et grands grâce à leur humour visuel. Elles combinent des thèmes fantastiques avec des situations quotidiennes. Les blagues et les jeux de mots font rire toute la famille. Ces films transmettent souvent des leçons de vie tout en étant très amusants.</p>
              </div>
            </div>

            <div className="comedy-item">
              <img src={ImgComedy5} alt="Comédie satirique" className="w-32 h-32 mr-4" />
              <div className="comedy-content">
                <h3>Comédie satirique</h3>
                <p>Les comédies satiriques critiquent la société et la politique avec humour. Elles se moquent des comportements humains et des institutions. Par l'exagération, elles mettent en avant les absurdités de notre monde. Cela fait rire tout en nous poussant à réfléchir.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Routes>
        {/* Ajoutez d'autres routes pour Contact, À propos et Nos sites si nécessaire */}
      </Routes>
    </Router>
  );
};

export default App;

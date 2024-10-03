// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Allow animations to happen more than once
      offset: 120, // Offset value in pixels to delay the animation
    });
  }, []);

  // Handle Navbar Link Click
  const handleLinkClick = () => {
    setDisableAnimations(true); // Disable animations
    setTimeout(() => {
      setDisableAnimations(false); // Re-enable animations after 500ms (adjust if needed)
    }, 500);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-gray-400">
      <Navbar onLinkClick={handleLinkClick} /> {/* Pass the click handler to Navbar */}
      <div className="flex flex-col items-center justify-center mt-20">
        
        <section
          id="home"
          className="w-full max-w-5xl min-h-screen flex items-center justify-center p-8 rounded-lg shadow-lg"
          data-aos={!disableAnimations ? "zoom-in" : ""} // Conditionally add AOS attribute
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="mt-4">This is the home section where you introduce yourself.</p>
          </div>
        </section>

        <section
          id="about"
          className="h-screen w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-up" : ""} // Conditionally add AOS attribute
        >
          <h1 className="text-4xl font-bold text-center">About Me</h1>
          <p className="mt-4 text-center">This is the about section where you describe yourself and your background.</p>
        </section>

        <section
          id="projects"
          className="h-screen w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-up" : ""} // Conditionally add AOS attribute
        >
          <h1 className="text-4xl font-bold text-center">My Projects</h1>
          <p className="mt-4 text-center">This is where you showcase your projects with descriptions and links.</p>
        </section>

        <section
          id="contact"
          className="h-screen w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-up" : ""} // Conditionally add AOS attribute
        >
          <h1 className="text-4xl font-bold text-center">Contact</h1>
          <p className="mt-4 text-center">Include your contact information or a contact form here.</p>
        </section>
      </div>
    </div>
  );
}

export default App;

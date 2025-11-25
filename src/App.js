import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import {jobExperiences, projects} from './assets/strings/constants';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ScrollToTop from './components/scrollToTop';

function App() {
  const [disableAnimations, setDisableAnimations] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    AOS.init({

      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Allow animations to happen more than once
      offset: 120, // Offset value in pixels to delay the animation
    });
    document.title = "Nicholas Phoon";
    // Check if the view is mobile
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Assuming mobile view is <= 768px
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Set initial value
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // Handle Navbar Link Click
  const handleLinkClick = () => {
    setDisableAnimations(true); // Disable animations
    setTimeout(() => {
      setDisableAnimations(false); // Re-enable animations after 500ms (adjust if needed)
    }, 500);
  };
 
  const groupedExperiences = Object.values(
    jobExperiences.reduce((acc, job) => {
      if (!acc[job.companyName]) {

        acc[job.companyName] = {
          companyImage: job.companyImage,
          companyName: job.companyName,
          jobTitle: [], // Multiple roles
          date: [], // Multiple dates
          description: [], // Multiple descriptions,
          skills: []
        };
      }

      acc[job.companyName].jobTitle.push(job.jobTitle);
      acc[job.companyName].date.push(job.date);
      acc[job.companyName].description.push(job.description);
      acc[job.companyName].skills.push(job.skills)

      return acc;
    }, {})
  ).map(company => ({
    ...company
  }));



  return (

    <div className="bg-gray-800 min-h-screen text-gray-400 overflow-x-hidden">
      <Navbar onLinkClick={handleLinkClick} /> {/* Pass the click handler to Navbar */}
      <div className="flex flex-col items-center justify-center mt-20">

        <section
          id="about"
          className="w-full max-w-5xl min-h-screen flex items-center justify-center p-8 rounded-lg shadow-lg"
        >
          <div className="text-center">
            {/* Your name animates first */}
            <h1
              className="text-5xl font-bold"
              style={{ color: '#4ca4ab' }}
              data-aos={!disableAnimations ? "fade-up" : ""}
              data-aos-delay="0"
            >
              Hi, I'm Nicholas Phoon
            </h1>

            {/* About Me section animates together */}
            <div
              data-aos={!disableAnimations ? "fade-up" : ""}
              data-aos-delay="1000"
            >
              <h2 className="text-3xl font-bold mt-4">About Me</h2>
              <p className="mt-4">
                Year 3 Student pursuing a degree in Software Engineering in Singapore Institute of Technology with a strong foundation in programming languages including Python, Javascript, Java, C/C++, C#, SQL, and Kotlin. Experienced in developing machine learning solutions for the Singapore Armed Forces (SAF), leveraging object detection algorithms to automate and optimize daily operations. Skilled in building robust applications using modern frameworks such as Django, Flask, and React, with a focus on delivering user-centric and efficient software solutions.
              </p>
            </div>
          </div>
        </section>


        <section
          id="experience"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? (isMobileView ? "fade-down" : "fade-left") : ""}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Experiences</h1>
          {groupedExperiences.map((experience, index) => (

            <JobExperience
              key={index}
              companyImage={experience.companyImage}
              companyName={experience.companyName}
              jobTitle={experience.jobTitle}
              date={experience.date}
              description={experience.description}
              skills={experience.skills}
            />
          ))}
        </section>

        <section
          id="projects"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? (isMobileView ? "fade-down" : "fade-right") : ""} x
        >
          <h1 className="text-4xl font-bold text-center">Projects</h1>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
        <ScrollToTop />

      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import {jobExperiences, projects} from './assets/strings/constants';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollToTop from './components/scrollToTop';
import ARKTS from './assets/icons/ArkTS.png';
import ARKUI from './assets/icons/ArkUI.png';
import UIKIT from './assets/icons/UIKit.png';
import SWIFTUI from './assets/icons/SwiftUI.png';
import LIVE from './assets/icons/LiveActivityKit.png';
import WIDGET from './assets/icons/WidgetKit.png';
import UWB from './assets/icons/UWB.png';
import DB from './assets/icons/DB.png';
import SWIFTDATA from './assets/icons/SwiftData.png';
import SWIFTTEST from './assets/icons/SwiftTest.png';
import XCTEST from './assets/icons/XCTest.png';
import HYPIUM from './assets/icons/Hypium.png';

function App() {
  const [disableAnimations, setDisableAnimations] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    AOS.init({

      duration: 800, 
      easing: 'ease-in-out', 
      once: false, 
      offset: 120, 
    });
    document.title = "Nicholas Phoon";
    
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // Handle Navbar Link Click
  const handleLinkClick = () => {
    setDisableAnimations(true); 
    setTimeout(() => {
      setDisableAnimations(false); 
    }, 500);
  };
 
  const groupedExperiences = Object.values(
    jobExperiences.reduce((acc, job) => {
      if (!acc[job.companyName]) {

        acc[job.companyName] = {
          companyImage: job.companyImage,
          companyName: job.companyName,
          jobTitle: [],
          date: [],
          description: [],
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
          className="w-full max-w-5xl min-h-screen flex items-center justify-center p-8 rounded-lg shadow-lg">
          <div className="text-center">
            
            <h1
              className="text-5xl font-bold"
              style={{ color: '#4ca4ab' }}
              data-aos={!disableAnimations ? "fade-up" : ""}
              data-aos-delay="0">
              Hi, I'm Nicholas Phoon
            </h1>
           
            <div
              data-aos={!disableAnimations ? "fade-up" : ""}
              data-aos-delay="1000">
              <h2 className="text-3xl font-bold mt-4">About Me</h2>
              <p className="mt-4">
                Recent Software Engineering graduate from Singapore Institute of Technology with over a year of specialized experience in mobile application development across iOS, Android, and HarmonyOS. Experienced in engineering high-precision tracking and automotive applications using SwiftUI, Kotlin, and ArkUI, with hands-on work at Aumovio and Continental Automotive. Skilled in integrating complex hardware frameworks such as UWB and BLE, and building secure, real-time applications using Firebase, with a strong foundation in CI/CD pipelines and DevOps tools.
              </p>

            </div>
          </div>
        </section>
        <section
  id="skills"
  className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
  data-aos={!disableAnimations ? "fade-up" : ""}>
  <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
  <div className="flex flex-col gap-10">
    {[
      {
        category: "Programming Languages",
        skills: [
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
          { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
          { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
          { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
          { name: "ArkTypeScript", icon: ARKTS },
        ]
      },
      {
        category: "Frameworks",
        skills: [
          { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "SwiftUI", icon: SWIFTUI },
          { name: "UIKit", icon: UIKIT },
          { name: "ArkUI", icon: ARKUI },
          { name: "WidgetKit", icon: WIDGET },
          { name: "ActivityKit", icon: LIVE },
          { name: "Core Bluetooth", icon: SWIFTUI },
          { name: "Nearby Interaction", icon: UWB },
        ]
      },
      {
        category: "Cloud & Databases",
        skills: [
          { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
          { name: "SwiftData", icon:  SWIFTDATA},
          { name: "ArkData", icon: DB },
          { name: "Room (Android)", icon: DB },
        ]
      },
      {
        category: "Testing Frameworks",
        skills: [
          { name: "JUnit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
          { name: "XCTest", icon: XCTEST },
          { name: "SwiftTesting", icon: SWIFTTEST },
          { name: "Hypium", icon: HYPIUM },
        ]
      },
      {
        category: "DevOps Tools",
        skills: [
          { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
          { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        ]
      },
    ].map((group, groupIndex) => (
      <div key={groupIndex}>
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#4ca4ab' }}>
          {group.category}
        </h2>
        <div className="grid grid-cols-5 gap-6">
          {group.skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              ) : (
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: '#4ca4ab' }}>
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>
              )}
              <span className="text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


        <section
          id="experience"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? (isMobileView ? "fade-down" : "fade-left") : ""}>
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
          data-aos={!disableAnimations ? (isMobileView ? "fade-down" : "fade-right") : ""}>
          <h1 className="text-4xl font-bold text-center">Projects</h1>

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

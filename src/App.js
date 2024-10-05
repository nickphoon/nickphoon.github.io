import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import SIT from './assets/icons/SIT.png';
import SCB from './assets/icons/SCB.png';
import SAF from './assets/icons/SAF.png';
import MOM from './assets/icons/MOM.jpg';
import HORSAUI from './assets/projects/hotelSentiment.png';
import COSMIC from './assets/projects/CosmicQuest.png';
// import SITNDRINK from './assets/projects/SiTnDrink.png';
import PINK from './assets/projects/PinkVisuals.png';
import MEDIVR from './assets/projects/MediVR.png';
import SignLINGO from './assets/projects/SignLingo.png';
function App() {
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    AOS.init({
      
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: false, // Allow animations to happen more than once
      offset: 120, // Offset value in pixels to delay the animation
    });
    document.title = "Nicholas Phoon";
  }, []);

  // Handle Navbar Link Click
  const handleLinkClick = () => {
    setDisableAnimations(true); // Disable animations
    setTimeout(() => {
      setDisableAnimations(false); // Re-enable animations after 500ms (adjust if needed)
    }, 500);
  };
  // Job Experience
  const jobExperiences = [
    {
      companyImage: SIT, 
      companyName: 'Singapore Institute of Technology',
      jobTitle: 'Student Tutor for Programming Fundamentals (Python, C)',
      date: 'Sep 2024 - Present',
      description: 'Assist students with Python and C programming tutorials',
      skills: ['Python', 'C Programming Language'],
    },
    {
      companyImage: SIT, 
      companyName: 'Singapore Institute of Technology',
      jobTitle: 'Student Tutor for Data Structures and Algorithms',
      date: 'June 2024 - August 2024',
      description: 'Assist students with tutorials on data structures and algorithms',
      skills: ['Data Structures', 'Algorithm Optimzation', 'Algorithm Design', 'Python'],
    },
    {
      companyImage: SCB, 
      companyName: 'Standard Chartered',
      jobTitle: 'Analyst, Security Development (Attachment)',
      date: 'Aug 2023 - Sep 2023',
      description: ['Designed scripts for data scraping and data processing in CI/CD Pipeline',
      'Aid in data analysis to uncover insights and support decision-making'],
      skills: ['CI/CD', 'Azure DevOps', 'Data Analysis', 'Data Processing'],
    },
    {
      companyImage: SAF, 
      companyName: 'Singapore Armed Forces (SAF)',
      jobTitle: 'Software Developer',
      date: 'Jul 2020 - Jun 2022',
      description: ['Developed Machine Learning Pipelines to help automate daily operations of SAF, RSAF and NAVY for increased efficiency.',
      'Fine Tuned Computer Vision models to increase object detection accuracy'],
      skills: ['OpenCV', 'Computer Vision', 'Machine Learning', 'Object Detection', 'Microsoft Power BI'],
    },
    {
      companyImage: MOM, 
      companyName: 'Ministry of Manpower',
      jobTitle: 'Student Intern',
      date: 'Apr 2019 - Sep 2019',
      description: ['Assist UI/UX designer in designing intuitive user interfaces leveraging on principles of human computer interaction',
        'Implemented features for better and more streamlined Application Experience'
      ],
      skills: ['UI/UX', 'User Interface Design', 'Human Computer Interaction'],
    },
  ];
  
  const projects = [
    {
      title: 'SignLingo',
      description: 'A sign language-learning mobile application that serves as a dynamic educational tool, providing students with real-time feedback and practical exercises.',
      image: SignLINGO,
      date: "Mar 2024",
      techStack: ['Kotlin','MediaPipe', 'Object Detection'],
      videoUrl: "https://youtu.be/2S5p5F2Antk"
    },
  
    {
      title: 'MediVR',
      description: 'A Unity-built mobile app designed to help healthcare students transition from school to real-world clinical settings through user-centered experiments and a mixed reality medical simulator.',
      image: MEDIVR,
      date: "Oct 2023",
      techStack: ['Unity', 'AR/VR', 'C#'],
      videoUrl: "https://youtu.be/MpSCaSuhWWU"
    },
    {
      title: 'Pink Visuals',
      description: 'A web application for visualising Data Structures and Algorithms such as Hash Tables and Pathfinding Algorithms like Djikstra and A* .',
      image: PINK,
      date: "Jul 2023",
      techStack: ['Javascript', 'Data Structures and Algorithms'],
      videoUrl: "https://youtu.be/_B1rxbQVOoc"
    },
    
    {
      title: 'Cosmic Quest',
      description: 'Application of object-oriented programming to design a space exploration game to educate users on the different planets and its environments.',
      image: COSMIC,
      date: "Mar 2023",
      techStack: ['libGDX', 'SQLite', "Java"],
      videoUrl: "https://youtu.be/A6BV51frMWQ"
    },
    {
      title: 'HORSAUI',
      description: 'A web application that analyses and visualizes sentiments from hotel reviews, allowing travellers to identify the best hotels at a glance.',
      image: HORSAUI,
      date: "Sep 2022",
      techStack: ['Flask', 'Selenium', 'Matplotlib'],
      videoUrl: "https://youtu.be/6rroISIO6HI"

    },
    // {
    //   title: 'SiT n Drink',
    //   description: 'An e-commerce website using PHP and mySQl that supports email communication using PHPMailer.',
    //   image: SITNDRINK,
    //   techStack: ['PHP', 'JavaScript', "MySQL"],
    //   videoUrl: ""
    // },
    // {
    //   title: 'AI-Driven Sport Analysis and Improvement System',
    //   description: '-',
    //   image: '',
    //   techStack: ['django','tailwindcss', 'MediaPipe','mongoDB'],
    //   videoUrl: ""
    // },

    // can put bandify, SiT n Drink, AI-Driven Sports Analysis and Improvement System

  ];

  return (
    
    <div className="bg-gray-800 min-h-screen text-gray-400">
      <Navbar onLinkClick={handleLinkClick} /> {/* Pass the click handler to Navbar */}
      <div className="flex flex-col items-center justify-center mt-20">
        
        <section
          id="about"
          className="w-full max-w-5xl min-h-screen flex items-center justify-center p-8 rounded-lg shadow-lg"
          data-aos={!disableAnimations ? "fade-up" : ""} 
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4">Year 3 Student pursuing a degree in Software Engineering in Singapore Institute of Technology with a strong foundation in programming languages including Python, Javascript, Java, C/C++, C#, SQL and Kotlin. Experienced in developing machine learning solutions for the Singapore Armed Forces (SAF), leveraging object detection algorithms to automate and optimize daily operations. Skilled in building robust applications using modern frameworks such as Django, Flask, and React, with a focus on delivering user-centric and efficient software solutions.</p>
          </div>
        </section>

        <section
          id="experience"
          className="w-full max-w-5xl p-8 rounded-lg shadow-lg mt-8"
          data-aos={!disableAnimations ? "fade-left" : ""}
        >
          <h1 className="text-4xl font-bold text-center mb-8">Experiences</h1>
          {jobExperiences.map((experience, index) => (
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
      data-aos={!disableAnimations ? "fade-right" : ""}
    >
      <h1 className="text-4xl font-bold text-center">Projects</h1>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>

        
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Navbar from './components/navBar';
import JobExperience from './components/jobExperience';
import ProjectCard from './components/project';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ScrollToTop from './components/scrollToTop';

import SIT from './assets/icons/SIT.png';
import SCB from './assets/icons/SCB.png';
import SAF from './assets/icons/SAF.png';
import MOM from './assets/icons/MOM.jpg';
import HORSAUI from './assets/projects/hotelSentiment.png';
import COSMIC from './assets/projects/CosmicQuest.png';
import GROOMGO from './assets/projects/Groom&Go.png';
// import SITNDRINK from './assets/projects/SiTnDrink.png';
import PINK from './assets/projects/PinkVisuals.png';
import MEDIVR from './assets/projects/MediVR.png';
import SignLINGO from './assets/projects/SignLingo.png';
import CVHelper from './assets/projects/CVHelper.png';
import GOLF from './assets/projects/Golf.png';
import WHEEL from './assets/projects/WHEEL.png';
import DROWSY from './assets/projects/drowsyDetector.png'
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
  // Job Experience
  const jobExperiences = [
    {
      companyImage: SIT, 
      companyName: 'Singapore Institute of Technology',
      jobTitle: 'Student Tutor for Web Systems & Technologies',
      date: 'Jan 2025 - Mar 2025',
      description: 'Assist students with Web System & Technologies Labs',
      skills: ['PHP', 'Javascript', 'HTML', 'CSS'],
    },
    {
      companyImage: SIT, 
      companyName: 'Singapore Institute of Technology',
      jobTitle: 'Student Tutor for Programming Fundamentals (Python, C)',
      date: 'Sep 2024 - Nov 2024',
      description: 'Assist students with Python and C programming tutorials',
      skills: ['Python', 'C Programming Language'],
    },
    {
      companyImage: SIT, 
      companyName: 'Singapore Institute of Technology',
      jobTitle: 'Student Tutor for Data Structures and Algorithms',
      date: 'Jun 2024 - Aug 2024',
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
    { title: 'WanAn Detector',
      description: 'This project proposes an edge-based drowsiness detection system that leverages a Jetson Nano (a GPU-centric edge device) to collect and process sensor data from a webcam, heart rate sensor, and LiDAR (Light Detection and Ranging), while a Raspberry Pi hosts a local dashboard for real-time monitoring. By performing on-device analytics, the system aims to reduce latency, enhance reliability, and improve overall driver safety',
      image: DROWSY,
      date:"Apr 2025",
      techStack: ['MQTT', 'Python', "OpenCV", "dlib", "SQLite"],
      sourceCodeUrl:"https://github.com/nickphoon/INF2009_Team30",
      videoUrl: "https://youtu.be/kIrJbWF5tZA"
    },

    { title: 'WHEEL OF RESTAURANTS 𖥞',
      description: 'A Spin the wheel for deciding on what to eat based on current/selected location. 🍽️',
      image: WHEEL,
      date:"Mar 2025",
      techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
      sourceCodeUrl:"https://github.com/nickphoon/WHEELOFRESTAURANT",
      webpageUrl:"https://nickphoon.github.io/WHEELOFRESTAURANT/",
    },
    {
      title: 'AI-Driven Sport Analysis and Improvement System',
      description: 'This project develops a Proof-of-Concept AI model using Computer Vision to analyze golf swings and identify key body parts from video footage. A Front-End system provides golfers with detailed, data-driven feedback to enhance their performance.',
      image: GOLF,
      date:"Nov 2024",
      techStack: ['Django','Mediapipe', 'mongoDB Atlas','Google Cloud Platform', 'Docker', 'TailWindCSS'],
      videoUrl: "https://www.youtube.com/watch?v=-C7gg1LaQ08"
    },

   
    {
      title: 'CVHelper',
      description: 'A Python GUI developed to reduce time spent processing data such as converting videos to frames, data augmentation and sorting images by classes',
      image: CVHelper,
      date:"Oct 2024",
      techStack: ['PyQT6','OpenCV', 'NumPy'],
      sourceCodeUrl: "https://github.com/nickphoon/CVHelper.git"
    },
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
      title: 'Groom&Go',
      description: 'Twin e-commerce websites, one powered by MySQL and the other by MongoDB, have been developed to evaluate and compare the read and write speeds of each database system.',
      image: GROOMGO,
      date: "Sep 2023",
      techStack: ['mongoDB', 'mySQL'],
      videoUrl: "https://youtu.be/oAPFzkiS-5c"
    },
    {
      title: 'Pink Visuals',
      description: 'A web application for visualising Data Structures and Algorithms such as Hash Tables and Pathfinding Algorithms like Djikstra and A* .',
      image: PINK,
      date: "Jul 2023",
      techStack: ['Javascript', 'Data Structures and Algorithms'],
      videoUrl: "https://youtu.be/_B1rxbQVOoc",
      sourceCodeUrl:"https://github.com/nickphoon/pinkvisuals",
      webpageUrl:"https://nickphoon.github.io/pinkvisuals/home.html",
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
      videoUrl: "https://youtu.be/6rroISIO6HI",
      sourceCodeUrl:"https://github.com/nickphoon/HORSAUI",
    },
    // {
    //   title: 'SiT n Drink',
    //   description: 'An e-commerce website using PHP and mySQl that supports email communication using PHPMailer.',
    //   image: SITNDRINK,
    //   techStack: ['PHP', 'JavaScript', "MySQL"],
    //   videoUrl: ""
    // },
    

    // can put bandify, SiT n Drink, AI-Driven Sports Analysis and Improvement System

  ];

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
      data-aos={!disableAnimations ? (isMobileView ? "fade-down" : "fade-right") : ""}x
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

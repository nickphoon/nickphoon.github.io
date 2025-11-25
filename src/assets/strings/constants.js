 import CONTI from '../icons/CONTI.png';
 import SIT from '../icons/SIT.png';
 import SCB from '../icons/SCB.png';
 import SAF from '../icons/SAF.png'
 import MOM from '../icons/MOM.jpg';
 import AUMOVIO from '../icons/AUMOVIO.png';
 import HORSAUI from '../projects/hotelSentiment.png';
 import COSMIC from '../projects/CosmicQuest.png';
 import GROOMGO from '../projects/Groom&Go.png';
 import PINK from '../projects/PinkVisuals.png';
 import MEDIVR from '../projects/MediVR.png';
 import SignLINGO from '../projects/SignLingo.png';
 import CVHelper from '../projects/CVHelper.png';
 import GOLF from '../projects/Golf.png';
 import WHEEL from '../projects/WHEEL.png';
 import DROWSY from '../projects/drowsyDetector.png';
 // Job Experience
  const jobExperiences = [
    {
      companyImage: AUMOVIO,
      companyName: 'Aumovio Regensburg',
      jobTitle: 'Software Application Developer Intern',
      date: 'Oct 2025 - Present',
      description: ['Optimized user experience by improving navigation flows, enhancing accessibility, and implementing responsive User Interface designs for better engagement.',
        'Increased application performance  by reducing load times and memory usage through code refactoring, caching strategies, and efficient resource management.',
        'Developed custom build automation for HarmonyOS projects, simplifying environment setup and reducing build time for development and production releases.'],
      skills: ['HarmonyOS', 'UI/UX', 'Optimization']
    },
    {
      companyImage: CONTI,
      companyName: 'Continental Singapore',
      jobTitle: 'Software Application Developer Intern',
      date: 'May 2025 - Sep 2025',
      description: ['Developed cross-platform mobile applications using HarmonyOS ArkTS, delivering production-ready features for external clients.',
        'Migrated legacy Android (Java) applications to HarmonyOS NEXT, rebuilding native functionalities in ArkTS to ensure seamless performance and ecosystem compliance'
      ],
      skills: ['HarmonyOS', 'ArkTS', 'Java Android'],
    },
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
    {
      title: 'WanAn Detector',
      description: 'An edge-based drowsiness detection system that utilizes two edge devices for real-time alerts',
      image: DROWSY,
      date: "Apr 2025",
      techStack: ['MQTT', 'Python', "OpenCV", "dlib", "SQLite"],
      sourceCodeUrl: "https://github.com/nickphoon/INF2009_Team30",
      videoUrl: "https://youtu.be/kIrJbWF5tZA"
    },

    {
      title: 'WHEEL OF RESTAURANTS 𖥞',
      description: 'A Spin the wheel for deciding on what to eat based on current/selected location. 🍽️',
      image: WHEEL,
      date: "Mar 2025",
      techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
      sourceCodeUrl: "https://github.com/nickphoon/WHEELOFRESTAURANT",
      webpageUrl: "https://nickphoon.github.io/WHEELOFRESTAURANT/",
    },
    {
      title: 'AI-Driven Sport Analysis and Improvement System',
      description: 'This project develops a Proof-of-Concept AI model using Computer Vision to analyze golf swings and identify key body parts from video footage. A Front-End system provides golfers with detailed, data-driven feedback to enhance their performance.',
      image: GOLF,
      date: "Nov 2024",
      techStack: ['Django', 'Mediapipe', 'mongoDB Atlas', 'Google Cloud Platform', 'Docker', 'TailWindCSS'],
      videoUrl: "https://www.youtube.com/watch?v=-C7gg1LaQ08"
    },


    {
      title: 'CVHelper',
      description: 'A Python GUI developed to reduce time spent processing data such as converting videos to frames, data augmentation and sorting images by classes',
      image: CVHelper,
      date: "Oct 2024",
      techStack: ['PyQT6', 'OpenCV', 'NumPy'],
      sourceCodeUrl: "https://github.com/nickphoon/CVHelper.git"
    },
    {
      title: 'SignLingo',
      description: 'A sign language-learning mobile application that serves as a dynamic educational tool, providing students with real-time feedback and practical exercises.',
      image: SignLINGO,
      date: "Mar 2024",
      techStack: ['Kotlin', 'MediaPipe', 'Object Detection'],
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
      sourceCodeUrl: "https://github.com/nickphoon/pinkvisuals",
      webpageUrl: "https://nickphoon.github.io/pinkvisuals/home.html",
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
      sourceCodeUrl: "https://github.com/nickphoon/HORSAUI",
    }

  ];

  export  {projects, jobExperiences}
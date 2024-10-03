import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="block max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transform hover:scale-105 transition duration-300">
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-base">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;

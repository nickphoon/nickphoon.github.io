import React from 'react';

const ProjectCard = ({ project }) => {
  // Conditional rendering for the image or fallback text
  const renderImage = project.image ? (
    <img
      className="w-full h-48 object-cover"
      src={project.image}
      alt={project.title}
    />
  ) : (
    <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
      <p className="text-gray-500 dark:text-gray-300">Work in Progress</p>
    </div>
  );

  // Conditional rendering for the project card's content
  const cardContent = (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      {renderImage}
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2"style={{ color: '#4ca4ab' }}>{project.title}</h3>
        <p className="text-sm text-gray-400">{project.date}</p>
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
  );

  return project.videoUrl ? (
    <a
      href={project.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transform hover:scale-105 transition duration-300"
    >
      {cardContent}
    </a>
  ) : (
    <div className="block max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      {cardContent}
    </div>
  );
};

export default ProjectCard;

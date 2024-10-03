import React from 'react';

function JobExperience({ companyImage, companyName, jobTitle, date, skills, description }) {
  return (
    <div className="flex items-start space-x-4 mb-8 p-4 bg-gray-800 rounded-lg shadow-lg ">
      <img src={companyImage} alt={`${companyName} logo`} className="h-16 w-16 rounded-md object-cover" />
      <div>
        <h2 className="text-2xl font-bold text-gray-250">{jobTitle}</h2>
        <h3 className="text-lg text-gray-400">{companyName}</h3>
        <p className="text-sm text-gray-400">{date}</p>
        {/* Render description based on its type */}
        {Array.isArray(description) ? (
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-300">{description}</p>
        )}
        <div className="mt-2">
          
          <div className="flex flex-wrap gap-2 mt-1">
          <h4 className="font-semibold text-white">Skills:</h4> {/* Flex container for skills */}
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobExperience;

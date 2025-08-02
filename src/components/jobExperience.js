

function JobExperience({ companyImage, companyName, jobTitle, date, description, skills }) {
  return (
    <div className="flex items-start space-x-4 mb-8 p-4 bg-gray-800 rounded-lg shadow-lg">
      <img src={companyImage} alt={`${companyName} logo`} className="h-16 w-16 rounded-md object-cover" />
      <div>
        <h3 className="text-lg font-bold">{companyName}</h3>

        {jobTitle.map((title, idx) => (
          <div key={idx} className="mt-4">
            <h2 className="text-xl font-semibold" style={{ color: '#4ca4ab' }}>{title}</h2>
            <p className="text-sm text-gray-400">{date[idx]}</p>

            {Array.isArray(description[idx]) ? (
              <ul className="mt-2 text-gray-300 list-disc list-inside">
                {description[idx].map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-gray-300">{description[idx]}</p>
            )}
             <div className="mt-4">
          <h4 className="font-semibold text-white">Skills:</h4>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
          </div>
        ))}       
      </div>
    </div>
  );
}

export default JobExperience;

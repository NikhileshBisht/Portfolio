import React from 'react'

const TechnicalSkills = () => {
  const skills = {
    languages: ['C++', 'HTML', 'CSS', 'JavaScript/TypeScript', 'Python'],
    frameworks: ['React.js', 'Angular', 'Next.js', 'Node.js', 'Express.js', 'Redux', 'Material-UI', 'Tailwind CSS'],
    coreConcepts: ['Data Structures and Algorithms', 'Networking', 'Object-Oriented Programming (OOP)'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
    tools: ['Dockers', 'Azure Boards', 'Jira', 'VS Code', 'Git', 'Linux', 'Fabric']
  }

  return (
    <div className='w-full max-w-[90%] mx-auto mb-8 mt-6'>
      <h2 className='text-[#2d2e32] text-3xl font-extrabold mb-6'>Technical Skills</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Languages */}
        <div className='bg-[#f9f9f9] rounded-lg p-4'>
          <h3 className='text-[#2d2e32] text-lg font-bold mb-3 flex items-center'>
            <span className='text-[#555555] mr-2'>●</span>
            Languages
          </h3>
          <div className='flex flex-wrap gap-2'>
            {skills.languages.map((lang, index) => (
              <span
                key={index}
                className='px-3 py-1 text-sm bg-[#2d2e32] text-white rounded-md'
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className='bg-[#f9f9f9] rounded-lg p-4'>
          <h3 className='text-[#2d2e32] text-lg font-bold mb-3 flex items-center'>
            <span className='text-[#555555] mr-2'>●</span>
            Frameworks & Libraries
          </h3>
          <div className='flex flex-wrap gap-2'>
            {skills.frameworks.map((framework, index) => (
              <span
                key={index}
                className='px-3 py-1 text-sm bg-[#2d2e32] text-white rounded-md'
              >
                {framework}
              </span>
            ))}
          </div>
        </div>

        {/* Core Concepts */}
        <div className='bg-[#f9f9f9] rounded-lg p-4'>
          <h3 className='text-[#2d2e32] text-lg font-bold mb-3 flex items-center'>
            <span className='text-[#555555] mr-2'>●</span>
            Core Concepts
          </h3>
          <div className='flex flex-wrap gap-2'>
            {skills.coreConcepts.map((concept, index) => (
              <span
                key={index}
                className='px-3 py-1 text-sm bg-[#2d2e32] text-white rounded-md'
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className='bg-[#f9f9f9] rounded-lg p-4'>
          <h3 className='text-[#2d2e32] text-lg font-bold mb-3 flex items-center'>
            <span className='text-[#555555] mr-2'>●</span>
            Databases
          </h3>
          <div className='flex flex-wrap gap-2'>
            {skills.databases.map((db, index) => (
              <span
                key={index}
                className='px-3 py-1 text-sm bg-[#2d2e32] text-white rounded-md'
              >
                {db}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className='bg-[#f9f9f9] rounded-lg p-4'>
          <h3 className='text-[#2d2e32] text-lg font-bold mb-3 flex items-center'>
            <span className='text-[#555555] mr-2'>●</span>
            Tools
          </h3>
          <div className='flex flex-wrap gap-2'>
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                className='px-3 py-1 text-sm bg-[#2d2e32] text-white rounded-md'
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSkills

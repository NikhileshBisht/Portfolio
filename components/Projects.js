import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const projectList = [
    {projectName: "WEATHER APP", projectData: "This project is a weather app built with HTML, CSS, and JavaScript displays current weather information based on user location or input", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/weather-site"},
    {projectName: "CHAT-GPT", projectData: " The ChatGPT Clone project utilizes the 3.5 Turbo version of the ChatGPT model as its backend, enabling it to operate within the VS Code environment ", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/chatGPT"},
    {projectName: "ROCK-PAPER-SCISSOR", projectData: "The Rock, Paper, Scissors game implemented with HTML, CSS, and JavaScript provides an interactive way for users to play the classic hand game against a computer opponent.", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/ROCK-paper-sciss-"},
    {projectName: "THOUGH-SHARE", projectData: "The ThoughtShare project allows users to share their thoughts by entering their username and thought into a form. Upon submission, the data is stored in a Firebase Realtime Database, enabling seamless sharing seamless sharing and retrieval of thoughts in real-time.", techStack: ["GIT"], link: "#projects"},
    {projectName: "Coming Soon", projectData: "This project will come soon", techStack: [], link: "#projects"}
  ]
    
  return (
    <div id='projects' className='bg-white h-full pt-4 w-screen flex flex-col items-center justify-evenly'>
      <div className='flex flex-col justify-evenly w-[70%]'>
         
          <p className='text-[#2d2e32] text-4xl font-extrabold' >Projects</p>
      </div>

      <div className='md:grid md:grid-rows-2 md:grid-cols-3 ml-[15%] mr-[15%]'>
          {
            projectList.map((item, index) => {
              return(
                <Link href={item.link} target='blank'>
                  <div key={index} className='m-2 p-2 hover:scale-105 duration-300 rounded-lg bg-[#f9f9f9]'>
                    <p className='text-[#2d2e32] text-lg font-bold ml-1'>{item.projectName}</p>
                    <p className='w-[30%] md:w-[50%] h-0.5 bg-[#555555] ml-1'></p>
                    <p className='text-[#555555] text-base ml-1 pb-1'>{item.projectData}</p>
                    <div className='flex justify-around items-center'>
                      {Array.isArray(item.techStack) && item.techStack.length > 0 && (
                        item.techStack.map((tech, index) => {
                          return(
                            <div key={index} className="flex items-center justify-center md:px-3 md:py-2 px-2 py-1 text-sm border-solid rounded-md border-2 border-[#555555] bg-[#555555] text-white mb-2">
                              <p className='mx-auto'>{tech}</p>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </div>
                </Link>
              )
            })
          }
      </div>
    </div>
  )
}

export default Projects

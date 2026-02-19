import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const projectList = [
    { projectName: "korper heil", projectData: "This project is a weather app built with HTML, CSS, and JavaScript displays current weather information based on user location or input", techStack: ["SITE"], link: "https://www.korperheil.com/" },
    { projectName: "Face-Recognition-YOLOv9", projectData: "Face-Recognition-YOLOv9 is a real-time face detection and recognition project built using the YOLOv9 deep learning model. It identifies and tracks human faces in images or video streams with high speed and accuracy, making it suitable for applications like attendance systems, surveillance, and access control. The project combines efficient object detection with facial recognition techniques to deliver fast and reliable performance in real-world environments.", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/Face-Recognition-YOLOv9" },
    { projectName: "WEATHER APP", projectData: "This project is a weather app built with HTML, CSS, and JavaScript displays current weather information based on user location or input", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/weather-site" },
    { projectName: "CHAT-GPT", projectData: " The ChatGPT Clone project utilizes the 3.5 Turbo version of the ChatGPT model as its backend, enabling it to operate within the VS Code environment ", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/chatGPT" },
    { projectName: "ROCK-PAPER-SCISSOR", projectData: "The Rock, Paper, Scissors game implemented with HTML, CSS, and JavaScript provides an interactive way for users to play the classic hand game against a computer opponent.", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/ROCK-paper-sciss-" },
    { projectName: "THOUGH-SHARE", projectData: "The ThoughtShare project allows users to share their thoughts by entering their username and thought into a form. Upon submission, the data is stored in a Firebase Realtime Database, enabling seamless sharing seamless sharing and retrieval of thoughts in real-time.", techStack: ["GIT"], link: "https://github.com/NikhileshBisht/Thoughtshare" },
    // { projectName: "Coming Soon", projectData: "This project will come soon", techStack: [], link: "#projects" }
  ]

  return (
    <div id='projects' className='bg-white h-full p-10 w-full flex flex-col items-center justify-evenly overflow-x-hidden'>
      <div className='flex flex-col justify-evenly w-[70%]'>
        <p className='text-[#2d2e32] text-4xl font-extrabold' >Projects</p>
      </div>

      <div className='md:grid md:grid-rows-2 md:grid-cols-3 w-full max-w-[90%] mx-auto gap-4'>
        {
          projectList.map((item, index) => {
            return (
              <Link key={index} href={item.link} target='blank' className='h-full'>
                <div className='m-2 p-4 hover:scale-105 duration-300 rounded-lg bg-[#f9f9f9] h-full flex flex-col md:h-[250px]'>
                  <p className='text-[#2d2e32] text-lg font-bold ml-1 mb-2'>{item.projectName}</p>
                  <p className='w-[30%] md:w-[50%] h-0.5 bg-[#555555] ml-1 mb-2'></p>
                  <div className='flex-1 overflow-y-auto min-h-0 mb-2'>
                    <p className='text-[#555555] text-base ml-1'>{item.projectData}</p>
                  </div>
                  <div className='flex justify-around items-center mt-auto pt-2'>
                    {Array.isArray(item.techStack) && item.techStack.length > 0 && (
                      item.techStack.map((tech, techIndex) => {
                        return (
                          <div key={techIndex} className="flex items-center justify-center md:px-3 md:py-2 px-2 py-1 text-sm border-solid rounded-md border-2 border-[#555555] bg-[#555555] text-white">
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

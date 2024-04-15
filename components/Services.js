import React from 'react'

const Services = () => {
  const serviceList = [
    {service: "Custom Website Design", serviceText: "Visually engaging websites reflecting your brand and user-focused experience.", image: "customWeb.svg"},
    {service: "Responsive Development", serviceText: "Websites that adapt seamlessly to all devices for optimal user experience.", image: "responsive.svg"},
    {service: "Cutting-edge Tech", serviceText: "Dynamic websites with ReactJS, Next.js & modern front-end tools.", image: "cuttingEdge.jpg"},
    {service: "Performance Optimization", serviceText: "Lightning-fast performance optimized websites for quick loading and user engagement.", image: "performance.svg"},
    {service: "SEO-friendly Development", serviceText: "Boost online visibility with search engine friendly websites.", image: "seo.svg"},
    {service: "Ongoing Support", serviceText: "Ensure optimal website performance beyond deployment.", image: "support1.svg"}
  ]
  return (
    <div id='services' className='bg-[#f9f9f9] pb-4 pt-4 w-screen flex flex-col items-center justify-evenly'>
      <div className='flex flex-col justify-evenly w-[70%]'>
          <p className='text-[#555555] text-lg md:text-xl font-semibold italic'>What I can do</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold' >Services</p>
          <p className='text-[#555555] text-sm md:text-lg'>Are you looking to establish a strong online presence for your business or showcase your work through a stunning personal website? Look no further! As a passionate web developer, I specialize in crafting high-quality, bespoke websites that leave a lasting impression.</p>
          <p className='text-[#2d2e32] text-xl md:text-2xl font-bold mt-4' >What I Offer</p>
      </div>

      <div className='md:grid md:grid-rows-2 grid-cols-3 ml-[15%] mr-[15%]'>
        {serviceList.map((item, index) => {
          return(
            <div className='m-2 hover:scale-105 duration-300 rounded-lg bg-white p-2'>
              {/* border-2 */}
              <div>
                <img className='object-cover' src={item.image} alt="" />
              </div>
              <p className='text-[#2d2e32] text-lg font-bold ml-1'>{item.service}</p>
              <p className='w-[30%] md:w-[50%] h-0.5 bg-[#555555] ml-1'></p>
              <p className='text-[#555555] text-base ml-1'>{item.serviceText}</p>
            </div>
          )
        })}
      </div>
      
      <div className='w-[70%]'>
        <p className='text-[#2d2e32] text-lg font-bold mb-2'>Why Choose Me?</p>
        <p className='text-[#555555] text-base'>I'm not just a developer, I'm your online journey partner. Through close collaboration, I understand your vision, goals, and audience. Together, we'll create a unique website that reflects your business objectives and sets you apart.</p>
        <p className='text-[#555555] text-base font-bold mt-2'>Reach out to me, and let's bring your ideas to life!</p>
      </div>
    </div>
  )
}

export default Services

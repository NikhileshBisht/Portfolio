import React from 'react'
import SkillsAnimate from './SkillsAnimate'

const TechStack = () => {
    return (
        <div className='w-full   mt-4 md:mt-0 flex flex-col items-center justify-center py-10'>
            <div className='m-4 text-[#2d2e32]'>
                <SkillsAnimate iconSize={'md:text-8xl text-6xl'} />
            </div>
        </div>
    )
}

export default TechStack

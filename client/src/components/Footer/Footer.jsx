import React from 'react';
import { Element } from "react-scroll";
import ProjectMemberCard from '../reusable/ProjectMemberCard';

import projectMembers from '../../data/projectMembers.json';

const Footer = () => {
  return (
    <div className='text-center relative'>

      {/* A gap */}
      <div className='py-2 w-full border-t-2 border-black'></div>

      {/* project Guide */}
      <div className='pt-20'>
        <p className='text-2xl'>~ Major Project ~</p>
        <p>on</p>
        <p className='text-4xl'>Farmer Support System</p>
        <p className='text-2xl pt-4'>Under the guidance of</p>
        <div className='flex justify-center mt-4'>
          <ProjectMemberCard member={projectMembers.guide} isGuide={true}/>
        </div>
      </div>

      {/* A gap */}
      {/* <div className='py-2 w-full border-t-2 border-black'></div> */}

      {/* Project Members */}
      <div className='flex flex-col'>
        <p className='text-4xl my-4'>~ Members ~</p>
        <div className='flex flex-row flex-wrap justify-center gap-y-4'>
          {projectMembers.members.map((member, id) => (
            <div key={id}>
              <ProjectMemberCard member={member} isGuide={false}/>
            </div>
          ))}
        </div>
      </div>

      {/* A gap */}
      <div className='py-4'></div>

    </div>
  )
}

export default Footer
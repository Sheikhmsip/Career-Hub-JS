import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
  const jobs = useLoaderData();
  // const showAll = 
  return (
    <>
      <div className=' flex-row justify-between gap-5 items-center py-5 px-3 md:flex'>
        <div className='w-[] md:pl-6'>
          <div className='md:text-7xl text-6xl leading-tight font-semibold '>
            <p>One Step </p>
            <p>Closer To Your </p>
            <p className='text-[#9873FF]'> Dream Job</p>
          </div>
          <p className='md:w-[500px] pt-4'><small>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</small></p>
          <button className="btn bg-gradient-to-r from-purple-500 to-purple-400 ... border-none mt-3">Get Started</button>
        </div>
        <div>
          <img className='' src="../../../public/All Images/man.png" alt="" />

        </div>
      </div>
      <JobCategory></JobCategory>
      <h1 className='text-center text-5xl font-semibold'>Featured Jobs</h1>
      <p className='text-center text-base py-3 mt-2'>Explore thousands of job opportunities with all the information you need. I  ts your future</p>
      <div className='grid md:grid-cols-2 mx-auto card gap-5 w-[95%]'>
        {
          jobs.map(job => <FeaturedJobs key={job.id} job={job}></FeaturedJobs>)
        }
      </div>
    </>
  );
};

export default Home;
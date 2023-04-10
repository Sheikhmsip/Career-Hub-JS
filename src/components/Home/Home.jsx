import React from 'react';

const Home = () => {
    return (
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
    );
};

export default Home;
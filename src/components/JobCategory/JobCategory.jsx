import React from 'react';

const JobCategory = () => {
    return (
        <div className='py-5 mt-6'>
            <h1 className='text-center text-5xl font-semibold'>Job Category List</h1>
            <p className='text-center text-base py-3 mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            {/* Job Category section */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 items-center gap-3 w-[80%] mx-auto mt-6'>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <img className='py-4 pl-2' src="../../../public/Icons/accounts 1.png" alt="" />
                    <p className='text-2xl font-bold'>Account & Finance</p>
                    <p><small>300 Jobs Available</small></p>
                </div>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <img className='py-4 pl-2' src="../../../public/Icons/business 1.png" alt="" />
                    <p className='text-2xl font-bold'>Creative Design</p>
                    <p><small>100+ Jobs Available</small></p>
                </div>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <img className='py-4 pl-2' src="../../../public/Icons/social-media 1.png" alt="" />
                    <p className='text-2xl font-bold'>Marketing & Sales</p>
                    <p><small>150 Jobs Available</small></p>
                </div>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <img className='py-4 pl-2' src="../../../public/Icons/chip 1.png" alt="" />
                    <p className='text-2xl font-bold'>Engineearing Job</p>
                    <p><small>224 Jobs Available</small></p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
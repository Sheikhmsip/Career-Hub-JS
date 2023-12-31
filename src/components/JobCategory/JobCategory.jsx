import { CpuChipIcon, NewspaperIcon, SunIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import React from 'react';

const JobCategory = () => {
    return (
        <div className='py-5 mt-6'>
            <h1 className='text-center text-5xl font-semibold'>Job Category List</h1>
            <p className='text-center text-base py-3 mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            {/* Job Category section */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 items-center gap-3 md:w-[80%] md:mx-auto mx-2 mt-6'>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <NewspaperIcon className='h-20 w-20 py-4 pl-2 text-purple-400'></NewspaperIcon>
                    <p className='text-2xl font-bold'>Account & Finance</p>
                    <p><small>300 Jobs Available</small></p>
                </div>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <SunIcon className='h-20 w-20 py-4 pl-2 text-purple-400'></SunIcon>
                    <p className='text-2xl font-bold'>Creative Design</p>
                    <p><small>100+ Jobs Available</small></p>
                </div>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <UserGroupIcon className='h-20 w-20 py-4 pl-2 text-purple-400'></UserGroupIcon>
                    <p className='text-2xl font-bold'>Marketing & Sales</p>
                    <p><small>150 Jobs Available</small></p>
                </div>
                <div className=' bg-slate-100 border-gray-100 border-2 pl-3 py-4 h-[211px]'>
                    <CpuChipIcon className='h-20 w-20 py-4 pl-2 text-purple-400'></CpuChipIcon>
                    <p className='text-2xl font-bold'>Engineearing Job</p>
                    <p><small>224 Jobs Available</small></p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
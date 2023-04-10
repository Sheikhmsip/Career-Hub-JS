import React from 'react';

const FeaturedJobs = ({ job }) => {
    const { name, address, category, salary, picture, company, } = job
    // console.log(jobType.map(type => type))
    return (
        <div className='border p-4 relative h-[392px]'>
            <img className='w-[148px] h-[40] pt-5' src={picture} alt="" />
            <div className=' absolute bottom-3'>
            <p className='font-bold text-2xl'>{name}</p>
            <p className=' text-2xl'>{company}</p>
            <div className='flex gap-5'>
                <p> {address}</p>
                <p> {salary}</p>
            </div>
            <button className='btn btn-ghost border-2 border-red-200 mr-2 mt-5'>{category[0]}</button>
            <button className='btn btn-ghost border-2 border-red-200'>{category[1]}</button><br />
            <button className='btn bg-gradient-to-r from-purple-500 to-purple-400 ... border-none mt-5'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
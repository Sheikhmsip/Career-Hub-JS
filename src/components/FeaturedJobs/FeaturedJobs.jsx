import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'


const FeaturedJobs = ({ job }) => {
    const { name, address, category, salary, picture, company,icons } = job
    // console.log(jobType.map(type => type))
    return (
        <div className='border p-4 relative h-[392px]'>
            <img className='w-[148px] h-[40] pt-5' src={picture} alt="" />
            <div className=' absolute bottom-3'>
            <p className='font-bold text-2xl'>{name}</p>
            <p className=' text-2xl'>{company}</p>
            <div className='flex gap-3 pt-2'>
                <p className='flex gap-1'><MapPinIcon className="h-6 w-6 text-purple-300 "/>{address}</p>
                <p className='flex gap-1'> <CurrencyDollarIcon className="h-6 w-6 text-purple-300 " />  {salary}</p>
            </div>
            <button className='btn btn-ghost border-2 border-red-200 mr-2 mt-5'>{category[0]}</button>
            <button className='btn btn-ghost border-2 border-red-200'>{category[1]}</button><br />
            <button className='btn bg-gradient-to-r from-purple-500 to-purple-400 ... border-none mt-5'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Job = ({ job }) => {
    const { name, picture, company, category, jobType, address, salary } = job
    return (

        <div className='grid  md:grid-cols-4 items-center justify-between md:h-[250px] mx-auto bg-slate-100 border-2 border-purple-300 rounded-md my-2 gap-5'>


            <div className='bg-[#ebdfdf] rounded-md mt-2 md:mt-0 py-12 mx-auto px-5 ml-4 w-full '>
                <img className='md:w-[148px] w-[100%] h-[40] mx-auto ' src={picture} alt="" />
            </div>
            <div className='md:col-span-2 py-5 px-5'>
                <p className='font-bold text-2xl'>{name}</p>
                <p className=' text-2xl pt-2'>{company}</p>
                <button className='btn btn-ghost border-2 border-red-200 mr-2 mt-5'>{category[0]}</button>
                <button className='btn btn-ghost border-2 border-red-200'>{category[1]}</button>
                <div className='flex gap-3 pt-5'>
                    <p className='flex gap-1'><MapPinIcon className="h-6 w-6 text-purple-300 " />{address}</p>
                    <p className='flex gap-1'> <CurrencyDollarIcon className="h-6 w-6 text-purple-300 " />  {salary}</p>
                </div>
            </div>
            <div className='text-center ml-5 md:mb-0 mb-2 mx-auto'>
            <button className='btn bg-gradient-to-r from-purple-500 to-purple-400 ... border-none w-[100%] md:ml-5' >View Details</button>
            </div>
        </div>

    );
};

export default Job;
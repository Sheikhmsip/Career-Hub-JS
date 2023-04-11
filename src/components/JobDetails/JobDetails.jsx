import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { addToDb } from '../../Utilities/fakeDb';

const JobDetails = () => {
    const data = useLoaderData();
    let { id } = useParams();
    // console.log(jobs)
    const jobs = data.find(job => job.id === id)
    // console.log(jobs.id)
    const { descriptions, responsibility, name, salary, phone, email, address, requirements, experiences } = jobs;

   const applyJob = (id) => {
     toast('Applied Confirm for this job ✅✅');
    addToDb(id)

   }


    return (
        <>
            <h1 className='text-center font-bold text-3xl'>Job Details</h1>
            <div className='grid md:grid-cols-3 mt-20 w-[96%] mx-auto gap-2'>
                <div className=' md:col-span-2 pt-3'>
                    <p className='pb-3'><span className='font-bold'>Descriptions: </span>{descriptions}</p>
                    <p className='pb-3'><span className='font-bold'>Responsibility: </span> {responsibility}</p>
                    <p className='pb-3'><span className='font-bold'>Requirements:</span> {requirements}</p>
                    <p><span className='font-bold'>Experiences:</span> {experiences}</p>
                </div>
                <div>
                    <div className='px-3 bg-[#cdd1eb] rounded-md py-5'>
                        <h2 className='text-xl font-bold pb-3 '>Job Details</h2>
                        <hr className='px-2 py-2' />
                        <p className='flex gap-1 pt-2'> <CurrencyDollarIcon  className="h-6 w-6 text-purple-400"/> <span className='font-bold'>Salary:</span> <span>{salary}</span></p>
                        <p className='flex gap-1 py-2'><BriefcaseIcon className="h-6 w-6 text-purple-400" /> <span className='font-bold'>Job Title:</span> <span>{name}</span></p>
                        <p className=' text-xl font-bold pt-4 pb-2'>Contact Information</p>
                        <hr className='pb-2' />
                        <p className='flex gap-1 pt-2'><PhoneIcon className="h-6 w-6 text-purple-400" ></PhoneIcon><span className='font-bold'>Phone:</span> <span>{phone}</span></p>
                        <p className='flex gap-1 py-2'><EnvelopeIcon className="h-6 w-6 text-purple-400"/><span className='font-bold'>Email:</span> <span>{email}</span></p>
                        <p className='flex gap-1'><MapPinIcon className="h-6 w-6 text-purple-400"/> <span className='font-bold'>Address:</span> <span>{address}</span></p>
                    </div>
                    <button onClick={()=> applyJob(jobs.id)} className='w-full btn bg-gradient-to-r from-purple-500 to-purple-400 ... mt-5'>Apply Now</button>


                </div>


            </div>
        </>
    );
};

export default JobDetails;
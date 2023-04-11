import React, { useEffect, useState } from 'react';
import { addToDb, getJobsCart } from '../../Utilities/fakeDb';
import Job from '../Job/Job';

const JobApply = () => {
       
  const [jobs, setJobs] = useState([]);
   
  const [applyJob, setApplyJob] = useState([]);
  
  useEffect(() => {
          fetch('/data.json')
          .then(res => res.json())
          .then(data => setJobs(data))
        }, []);

        useEffect( () => {
          const storedApplyJob = getJobsCart();
          const saveJob = [];

          for (const id in storedApplyJob) {
            const addedJob = jobs.find(job => job.id == id );
            if (addedJob){
              const quantity = storedApplyJob[id];
              addedJob.quantity = quantity;
              saveJob.push(addedJob);
            }
          }
          setApplyJob(saveJob);
        }, [jobs]);

      

    return (
        <div className='py-5'>
          <h1 className='text-center text-3xl text-purple-500 font-bold pb-20'>Applied Jobs</h1>
          <div className='w-[96%] mx-auto'>
          {
            applyJob.map(job => <Job key={job.id}
            job={job}
            
            ></Job>)
          }
          </div>
        </div>
    );
};

export default JobApply;
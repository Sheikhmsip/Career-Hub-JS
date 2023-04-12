import React, { useEffect, useState } from 'react';
import { addToDb, getJobsCart } from '../../Utilities/fakeDb';
import Job from '../Job/Job';

const JobApply = () => {

  const [jobs, setJobs] = useState([]);

  const [applyJob, setApplyJob] = useState([]);
  const [filterJob, setFilterJob] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, []);

const remote = ()=>{

  const filter = filterJob.filter(f => f.category[0] === "Remote");
  setApplyJob(filter);
}
const onsite = ()=>{

  const filter = filterJob.filter(f => f.category[0] === "Onsite");
  setApplyJob(filter);
}


  useEffect(() => {
    const storedApplyJob = getJobsCart();
    const saveJob = [];

    for (const id in storedApplyJob) {
      const addedJob = jobs.find(job => job.id == id);
      if (addedJob) {
        const quantity = storedApplyJob[id];
        addedJob.quantity = quantity;
        saveJob.push(addedJob);
      }
    }
    setApplyJob(saveJob);
    setFilterJob(saveJob);
  }, [jobs]);



  return (
    <div className='py-5'>
      <h1 className='text-center text-3xl text-purple-500 font-bold pb-20'>Applied Jobs</h1>


      <div className='w-[96%] mx-auto'>
        <div className=' relative'>
          <div className=' absolute right-2 -top-16'>
            <button onClick={()=> onsite(applyJob)} className='btn bg-gradient-to-r from-purple-500 to-purple-400 ... border-none mr-2'>Onsite</button>
            <button onClick={()=> remote(applyJob)} className='btn bg-gradient-to-r from-purple-500 to-purple-400 ... border-none '>Remote</button>
          </div>

        </div>
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
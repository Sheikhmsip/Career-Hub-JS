import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData();
    let {id} = useParams();
    // console.log(jobs)
    const jobs = data.find(job => job.id === id)
        console.log(jobs.id)
        const {description , name, salary } = jobs;
   
    // if(data) {
    //         data.find(job => job.id === id)
    //         console.log(jobs.id)
    //     }
    

    return (
        <div>
            <h1>{salary}</h1>
        </div>
    );
};

export default JobDetails;
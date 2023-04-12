// use local storage to manage job data
const addToDb = id => {
    let jobsCart = getJobsCart();
    // add quantity
    const quantity = jobsCart[id];
    if (!quantity) {
        jobsCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobsCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobsCart));
}

const removeFromDb = id => {
    const jobsCart = getJobsCart();
    if (id in jobsCart) {
        delete jobsCart[id];
        localStorage.setItem('job-cart', JSON.stringify(jobsCart));
    }
}

const getJobsCart = () => {
    let jobsCart = {};

    //get the jobs cart from local storage
    const storedJob = localStorage.getItem('job-cart');
    if (storedJob) {
       jobsCart = JSON.parse(storedJob);
    }
    return jobsCart;
}

const deleteJobsCart = () => {
    localStorage.removeItem('job-cart');
}

export {
    addToDb,
    removeFromDb,
    getJobsCart,
    deleteJobsCart
}
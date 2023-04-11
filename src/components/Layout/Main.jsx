import React from 'react';
import Header from '../Header/Header';
import { Outlet , Link} from 'react-router-dom';
import Home from '../Home/Home';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           {/* <Home></Home> */}
           <Toaster></Toaster>
        </div>
    );
};

export default Main;
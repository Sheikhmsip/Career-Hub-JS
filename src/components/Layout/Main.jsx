import React from 'react';
import Header from '../Header/Header';
import { Outlet , Link} from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           {/* <Home></Home> */}
        </div>
    );
};

export default Main;
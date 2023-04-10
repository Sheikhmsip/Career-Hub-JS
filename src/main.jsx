import React from 'react'
import App from './App'
import './index.css'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import JobApply from './components/JobApply/JobApply';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
     
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'jobapply',
        element: <JobApply></JobApply>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

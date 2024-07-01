import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import SignIn from '../screens/signIn/SignIn'
import SignUp from '../screens/signUp/SignUp'
import AdminPanel from '../screens/adminPanel/AdminPanel';
import AboutUs from '../screens/aboutUs/AboutUs';
import UserPanel from '../screens/userPanel/UserPanel';
import JobSeekerPanel from '../screens/jobSeekerPanel/JobSeekerPanel';
import Courses from '../screens/courses/Courses';
import Jobs from '../screens/jobs/Jobs';
import Trainings from '../screens/trainings/Trainings';
import CardDetails from '../screens/cardDetails/CardDetails';
import EmployerPanel from '../screens/employerPanel/EmployerPanel';
import StudentPanel from '../screens/studentPanel/StudentPanel';






export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Jobs' element={<Jobs />}></Route>
                    <Route path='/Trainings' element={<Trainings />}></Route>
                    <Route path='/Courses' element={<Courses />}></Route>
                    <Route path='/CardDetails' element={<CardDetails />}></Route>
                    <Route path='/SignIn' element={<SignIn />}></Route>
                    <Route path='/SignUp' element={<SignUp />}></Route>
                    <Route path='/AboutUs' element={<AboutUs />}></Route>
                    <Route path='AdminPanel/*' element={<AdminPanel />}></Route>
                    <Route path='UserPanel/*' element={<UserPanel />}></Route>
                    <Route path='StudentPanel/*' element={<StudentPanel />}></Route>
                    <Route path='EmployerPanel/*' element={<EmployerPanel />}></Route>
                    <Route path='JobSeekerPanel/*' element={<JobSeekerPanel />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
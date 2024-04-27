import React, { useEffect } from 'react'
import logo from '../../assets/img/logo.png'
import NavBar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import './Home.css'
import hub from '../../assets/img/hub.jpeg'
import career from '../../assets/img/career.jpeg'
import jobPortal from '../../assets/img/jobPortal.jpeg'
import excellence from '../../assets/img/excellence.jpeg'
import excellence1 from '../../assets/img/excellence1.png'
import support from '../../assets/img/support.jpeg'
import resources from '../../assets/img/resources.jpeg'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'




export default function Home() {


    const aboutItems = [
        {
            icon: excellence,
            heading: 'Maritime Education Excellence',
            description: 'Top-tier courses blending theory and hands-on experience for a robust educational foundation.'
        },
        {
            icon: jobPortal,
            heading: 'Job Portal Precision',
            description: 'Navigate career waves seamlessly. Explore curated maritime job opportunities and connect with employers for a fulfilling career.'
        },
        {
            icon: career,
            heading: 'Personalized Career Counseling',
            description: 'Tailored career counseling to align your skills with rewarding maritime opportunities.'
        },
        {
            icon: hub,
            heading: 'Industry Networking Hub',
            description: 'Connect with professionals, attend events, and join forums for valuable maritime community connections.'
        },
    ]
    const aboutSection3Items = [
        {
            heading: 'Cutting-Edge Learning',
            description: "Experience excellence in maritime education with our state-of-the-art classrooms, simulation labs, and industry-relevant training equipment.",
            bgColor: '#bdffb3',
            borderColor: '#96FF44'
        },
        {
            heading: '24/7 Job Assistance',
            description: 'Receive round-the-clock support in your job search. Our dedicated team provides assistance with applications, resume building, and interview preparation.',
            bgColor: '#d0efff',
            borderColor: '#2A5DDE'
        },
        {
            heading: 'Career Resources',
            description: 'Access a wealth of career resources, from industry insights to resume templates, empowering you to make informed decisions about your maritime journey.',
            bgColor: ' #ccceff',
            borderColor: '#2B72C2'
        },
    ]

    const courses = [
        {
            name: "BASIC TRAINING",
            img: 'https://i0.wp.com/northeastmaritimeonline.com/wp-content/uploads/2022/08/Basic-Firefighting-3m-scaled.jpg?resize=1024%2C686&ssl=1',
            description: 'This online program includes all required course theory through presentations, reference material, videos and quizzes in the subject areas of Basic Marine Firefighting, Personal Survival Techniques, Elementary First Aid and Personal Safety & Social Responsibility. This course is for individuals taking Basic Training for the first time.'
        },
        {
            name: "SEARCH AND RESCUE (OPERATIONAL)",
            img: 'https://i0.wp.com/northeastmaritimeonline.com/wp-content/uploads/2022/08/Search-Rescue-4m-scaled.jpg?resize=1024%2C686&ssl=1',
            description: 'This Search and Rescue (Operational) course will provide students with the knowledge to coordinate search and rescue operations.'
        },
        {
            name: "AUXILIARY SAIL",
            img: 'https://i0.wp.com/northeastmaritimeonline.com/wp-content/uploads/2022/08/OUPV-2m-scaled.jpg?resize=1024%2C686&ssl=1',
            description: 'For mariners who hold or are applying for an OUPV (Operator of Uninspected Passenger Vessel), Master 100 or Master 200 gross tons license to meet the current USCG examination requirements for a Sailing Endorsement per 46 CFR 11.401(d) for an Auxiliary Sail endorsement to be added to any national endorsement as Operator of Uninspected Passenger Vessels (OUPV), or Master or Master of less than 200 GRT (Gross Register Tons).'
        },
        {
            name: "GLOBAL MARITIME DISTRESS AND SAFETY SYSTEM (GMDSS)",
            img: 'https://i0.wp.com/northeastmaritimeonline.com/wp-content/uploads/2022/08/GMDSS-2m-scaled.jpg?resize=1024%2C686&ssl=1',
            description: 'This GMDSS (Global Maritime Distress and Safety System) Course combines online simulations, animations, helpful explanations, and quizzes to make your training experience engaging and comprehensive. You will explore the functionality and use of all GMDSS components ranging from daily communication to emergency situations using our suite of HALO° simulators. All text passages include an audio component to assist ESL students.'
        },
        {
            name: "METEOROLOGY (OPERATIONAL)",
            img: 'https://i0.wp.com/northeastmaritimeonline.com/wp-content/uploads/2022/08/Meteorology-2m-scaled.jpg?resize=1024%2C686&ssl=1',
            description: 'This online course provides students with knowledge, proficiency and understanding of the characteristics of various weather systems, reporting procedures, and recording systems. This course will satisfy the Basic Meteorology Training of STCW A-II/1.'
        },
        {
            name: "SEARCH AND RESCUE (OPERATIONAL)",
            img: 'https://i0.wp.com/northeastmaritimeonline.com/wp-content/uploads/2022/08/Search-Rescue-2m-scaled.jpg?resize=1024%2C686&ssl=1',
            description: 'This Search and Rescue (Operational) course will provide students with the knowledge to coordinate search and rescue operations.'
        },
    ]

    return (
        <div>
            <NavBar />
            <Slider />
            <section>
                <div className="about-sec-5" style={{ paddingBottom: '20px' }}>
                    <div className="about-sec5-circle" data-aos="zoom-in"></div>
                    <Grid container>
                        <Grid item sm={8}>
                            <div className="about-sec5-header" >
                                <div className="heading1" data-aos="fade-up">Featured Courses</div>
                                <div className="about-text about-sec4-text" data-aos="fade-up">Discover our featured maritime courses designed to equip you with the skills needed for a successful career at sea. From navigation to marine engineering, we've got you covered.</div>
                            </div>
                        </Grid>
                        <Grid item sm={4}>
                            {/* <img src={partners1} className='about-sec5-header-img' /> */}
                        </Grid>
                    </Grid>
                    <div className="about-sec5-body">
                        <Grid container spacing={4}>
                            {courses && courses.map((course, index) => {
                                return (
                                    <Grid item sm={4} key={index} >
                                        <div className="course-card" data-aos="zoom-in">
                                            <img src={course.img} alt="" />
                                            <div className="course-card-body">
                                                <div className='course-card-heading' >{course.name}</div>
                                                <div className="course-card-descripiton">
                                                    {course.description.slice(0, 80)} . . .
                                                </div>
                                                <div className="course-card-btns-box">
                                                    <Btn label='Enroll Now' className="course-card-btn" style={{ backgroundColor: 'green' }} />
                                                    <Btn label='Check Details' className="course-card-btn" />
                                                </div>
                                            </div>

                                        </div>

                                    </Grid>
                                )
                            })}


                        </Grid>
                    </div>
                    <div data-aos="fade-up">
                        <Btn label="SHOW ALL COURSES" style={{ margin: '50px auto' }} />
                    </div>
                </div>
            </section >
            <section>
                <div className="about-sec-5" style={{ paddingBottom: '20px' }}>
                    <div className="about-sec5-circle" style={{ left: '-550px' }} data-aos="zoom-in"></div>
                    <Grid container>
                        <Grid item sm={4}>
                        </Grid>
                        <Grid item sm={8}>
                            <div className="about-sec5-header">
                                <div className="heading1" data-aos="fade-up">Featured Trainings</div>
                                <div className="about-text about-sec4-text" data-aos="fade-up">Explore our spotlighted maritime trainings tailored to empower you with essential skills for a successful career at sea. From navigation techniques to advanced marine engineering, we've curated a comprehensive selection to ensure your proficiency in every aspect of maritime expertise.
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                    <div className="about-sec5-body">
                        <Grid container spacing={4}>
                            {courses && courses.map((course, index) => {
                                return (
                                    <Grid item sm={4} key={index}>
                                        <div className="course-card" data-aos="zoom-in">
                                            <img src={course.img} alt="" />
                                            <div className="course-card-body">
                                                <div className='course-card-heading' >{course.name}</div>
                                                <div className="course-card-descripiton">
                                                    {course.description.slice(0, 80)} . . .
                                                </div>
                                                <div className="course-card-btns-box">
                                                    <Btn label='Enroll Now' className="course-card-btn" style={{ backgroundColor: 'green' }} />
                                                    <Btn label='Check Details' className="course-card-btn" />

                                                </div>
                                            </div>

                                        </div>

                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                    <div data-aos="fade-up">
                        <Btn label="SHOW ALL TRAININGS" style={{ margin: '50px auto' }} />
                    </div>
                </div>
            </section >
            <div style={{ height: '30px' }} />
        </div >
    )
}



import React, { useEffect, useState } from 'react';
import './AdminPanel.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignIn from '../signIn/SignIn';
import Snack from '../../components/snack/Snack';
import Loader from '../../components/loader/Loader';
import UserManagement from './adminPanelScreens/userManagement/UserManagement';
import StudentManagment from './adminPanelScreens/studentManagement/StudentManagment';






export default function AdminPanel() {
    const [deviceType, setDeviceType] = useState('');
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('ap-navLinks ap-activeMenu');
    let [handleContent, setHandleContent] = useState('ap-rightSide ap-contractContent');
    let [activeScreen, setActiveScreen] = useState('Dashboard');
    let [userData, setUserData] = useState({});

    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');

    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");

        if (storedUserData) {
            const data = JSON.parse(storedUserData);
            setUserData(data)
        }
    }, [])

    const navigate = useNavigate();

    const btns = [
        {
            label: 'User Management',
            to: 'UserManagement',
        },
        {
            label: 'Student Management',
            to: 'StudentManagement',
        },
    ]

    const handleBtnClick = (e) => {
        setActiveScreen(e.label);
        navigate(e.to)
        if (deviceType === 'Mobile') {
            setMenu(!menu)
        }
    }

    useEffect(() => {
        menu ? setActiveMenu('ap-navLinks') : setActiveMenu("ap-navLinks ap-activeMenu");
        menu ? setHandleContent('ap-rightSide') : setHandleContent('ap-rightSide ap-contractContent')
    }, [menu])


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setDeviceType('Mobile');
                setMenu(true)
            } else if (width >= 768 && width < 1024) {
                setDeviceType('Tablet');
            } else {
                setDeviceType('Laptop/Desktop');
            }
        };

        // Initial check on component mount
        handleResize();

        // Add event listener to check on window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect(() => {
    //     navigate('Dashboard')
    // }, [])

    const handleLogout = () => {
        setIsLoading(true)
        getData(`/logout`).then((response) => {
            if (response.success) {
                setSnackMsg(response.message);
                setSeverity('success')
                setOpenSnack(true);
                setIsLoading(false);
                localStorage.removeItem("userData");
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            } else {
                setSnackMsg(response.message);
                setOpenSnack(true);
                setIsLoading(false)
            }
        })
            .catch((error) => {
                setSnackMsg("Network Error ", error.message);
                setOpenSnack(true);
                setIsLoading(false)
            });
    }



    return (
        <div>
            <div className='ap-main'>
                <div className={activeMenu}>
                    <div>
                        <div className="sideBar-Profile-sec">
                            <img src={"https://tse1.mm.bing.net/th?id=OIP.FUYG2ULJI1LzxUqxK9pCZQHaHa&pid=Api&P=0&h=220"} className='ap-profile' />
                            <div className="sideBar-profile-name">{"Admin"}</div>
                            <div className="sideBar-profile-email">{userData?.email}</div>
                        </div>
                        {
                            btns.map((e, i) => {
                                return (
                                    <div key={e.label} onClick={() => handleBtnClick(e)} >
                                        {activeScreen === e.label ? <div className='ap-iconBtnActive' >
                                            {/* <img src={e.activeIcon} alt="icon" width={e.iconWidth} height={e.iconHeight} /> */}
                                            {e.label}
                                        </div> : <div className='ap-iconBtn' >
                                            {/* <img src={e.icon} alt="icon" width={e.iconWidth} height={e.iconHeight} /> */}
                                            {e.label}
                                        </div>}
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div>
                        <div onClick={handleLogout} className='ap-iconBtn' style={{ marginTop: '-20px' }} >
                            {/* <img src={info} alt="icon" width='20px' height='20px' /> */}
                            Logout
                        </div>
                    </div>


                </div>
                {/* Main Content of Screeens  */}
                <div className={handleContent} >
                    <div className="ap-header">
                        <div className='ap-header-left' >
                            <div className="ap-menuIcon" onClick={() => {
                                setMenu(!menu)
                            }}>
                                <MenuIcon sx={{ fontSize: '22px' }} />
                            </div>
                            {activeScreen}
                        </div>
                        <div className="ap-header-right">
                            <div className="ap-header-profile">
                                <div className="ap-header-profile-left">
                                    <div className='ap-header-profile-left-imgBox' >
                                        <img src={"https://tse1.mm.bing.net/th?id=OIP.FUYG2ULJI1LzxUqxK9pCZQHaHa&pid=Api&P=0&h=220"} alt="avatar" />
                                        <div />
                                    </div>
                                    <div className="ap-header-profile-left-text">
                                        <div className="ap-header-profile-left-text-name">{userData?.firstname + " " + userData?.lastname}</div>
                                        <div className="ap-header-profile-left-text-role">{userData?.role?.name ?? 'Role'}</div>
                                    </div>
                                </div>
                                <div className="ap-header-profile-right">
                                    {/* <img src={msg} alt="msgs" /> */}
                                    <div className="ap-header-profile-right-notificationBox">
                                        {/* <img src={bellIcon} alt="notifications" /> */}
                                        <div>2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Routes>
                        <Route path='UserManagement' element={<UserManagement />}></Route>
                        <Route path='UserManagement' element={<UserManagement />}></Route>
                        <Route path='StudentManagement' element={<StudentManagment />}></Route>
                        <Route path='FeatureManagement' element={<SignIn />}></Route>
                    </Routes>
                </div>

            </div>
            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </div>
    )
}

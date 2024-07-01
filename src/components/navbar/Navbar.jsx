import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/logo.png'
import Btn from "../btn/Btn";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';






export default function NavBar({ active }) {
    let [menu, setMenu] = useState('true');
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [openLiveSignal, setOpenLiveSignal] = useState(false);
    let [openGBPLinks, setOpenGBPLinks] = useState(false);
    let [activeLink, setActiveLink] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        menu ? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    }, [menu])

    useEffect(() => {
        setActiveLink(active)
    }, [])

    const handleLiveSignalLinks = () => {
        setOpenLiveSignal(false)
    }
    const handleGBPLinks = () => {
        setOpenGBPLinks(false)
    }


    return (
        <>
            <div className="navBar">
                <img onClick={() => navigate('/')} src={logo} className="logo-nb" />

                <div>
                    <div className={activeMenu}>
                        <div
                            className={activeLink === 'Home' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/')
                            }
                            }
                        >Home</div>
                        <div
                            className={activeLink === 'Courses' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/Courses')
                            }
                            }
                        >Courses</div>
                        <div
                            className={activeLink === 'Trainings' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/Trainings')
                            }
                            }
                        >Trainings</div>
                        <div
                            className={activeLink === 'Jobs' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/Jobs')
                            }
                            }
                        >Jobs</div>
                        <div
                            className={activeLink === 'About Us' ? "link-nb" : "link-nb1"}
                            onClick={() => {
                                navigate('/AboutUs')
                            }
                            }
                        >About Us</div>

                        <div
                            className="link-nb1"
                            onClick={() => navigate('/SignUp')} >Create Account</div>
                        <Btn
                            className='navBtn' label="LOGIN" onClick={() => navigate('/SignIn')} />
                    </div>
                    <div className="icon">
                        {menu ? <MenuIcon onClick={() => setMenu(!menu)} /> : <CloseIcon onClick={() => setMenu(!menu)} />}
                    </div>
                </div>
            </div>
        </>
    )
} 
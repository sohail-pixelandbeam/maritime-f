import React, { useState } from 'react'
import './Footer.css'
import { Grid } from '@mui/material'
import logo from '../../assets/img/logo.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import {  useNavigate } from 'react-router-dom'
import Snack from '../snack/Snack'
import Loader from '../loader/Loader'


export default function Footer({ hideContact }) {
    let [formData,setFormData] = useState(null)
    const navigate = useNavigate();
 
    // const data1 = [facebook, twitter, linkedin, p]
    const links = [ 
        {name:'Courses', to:'/Courses'}, 
        {name:'Trainings', to:'/Trainings'},
        {name:'Jobs', to:'/Jobs'},

    ];

    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');
    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }

    const sendContactEmail = async () => {
        setIsLoading(true);
        const { firstName, lastName, email, phoneNumber } = formData;
        if (firstName && lastName && email && phoneNumber) {
            try {
                // Prepare data for sending email
                const data = {
                    service_id: 'nexa-career',
                    template_id: 'template_62e2jal',
                    user_id: 'oYKRBmPYmAeLWvmHP',
                    template_params: {
                        firstName,
                        lastName,
                        email,
                        phoneNumber,
                        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...' // Include reCAPTCHA token if needed
                    }
                };
    
                // Send email using EmailJS API
                const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
    
                if (response.ok) {
                    setSnackMsg("Email sent successfully");
                    setSeverity("success");
                    setOpenSnack(true);
                    setIsLoading(false);
                    setFormData({
                        firstName:'',
                        lastName:'',
                        email:'',
                        phoneNumber:''
                    })
                } else {
                    throw new Error('Failed to send email');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                setSnackMsg(error.message || 'Error sending email');
                setSeverity("error");
                setOpenSnack(true);
                setIsLoading(false);
            }
        } else {
            setOpenSnack(true);
            setSnackMsg("Required fields are missing.");
            setIsLoading(false);
        }
    };
    


    return (
        <div className='footer-main'>
            {/* <img src={pattern1} alt="pattern" className='footer-pattern1' />
            <img src={pattern2} alt="pattern" className='footer-pattern2' /> */}
            <div className="padding foooter-lower">
                <Grid container spacing={0}>
                    <Grid item sm={5} xs={12}>
                        <img src={logo} alt="logo" className="footer-logo" />
                        <div className='footer-text footer-right-padding' data-aos="fade-up">Your comprehensive platform for navigating the waters of maritime education and career opportunities. </div>
                    </Grid>
                    <Grid item sm={3} xs={12} >
                        <div className="footer-heading">Useful Links</div>
                        {links && links.length > 0 &&
                            links.map(item => {
                                return (
                                    <div className="footer-link-text" key={item?.name}
                                    onClick={()=>navigate(item?.to)}
                                    >
                                        <ArrowForwardIosIcon sx={{ color: 'white', fontSize: '14px' }} />
                                        {item?.name}
                                    </div>
                                )
                            })
                        }
                    </Grid>
                    <Grid item sm={4} xs={12} >
                        <div className="footer-heading">Contact</div>
                        <div className="footer-item">
                            <div style={{ marginTop: '5px' }}>
                                <EmailIcon sx={{ color: 'white', fontSize: '20px' }} />
                            </div>
                            <div className="footer-text footer-right-padding ">contact.maritime@gmail.com</div>
                        </div>
                        <div className="footer-item">
                            <div style={{ marginTop: '5px' }}>
                                <PlaceIcon sx={{ color: 'white', fontSize: '20px' }} />
                            </div>
                            <div className="footer-text footer-right-padding">Gulistan-e-Johar, Karachi</div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="footer-lowest">
                <div className="footer-text">© Maritime Education System & Job Portal  2024 | All Rights Reserved</div>
                {/* <div className='footer-lowest-links'>
                    <div className="footer-text footerLink-hover">Terms & Conditions</div>
                    <div className="footer-text footerLink-hover">Privacy Policy</div>
                    <div className="footer-text footerLink-hover">Contact Us</div>
                </div> */}
            </div>
            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </div>
    )
}
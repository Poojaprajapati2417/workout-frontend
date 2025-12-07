import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./../images/bg2.jpg"
import { FaHeart, FaDumbbell, FaChartLine, FaUsers, FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { GiProgression, GiBiceps, GiMuscleUp, GiWeightLiftingUp } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { MdFitnessCenter, MdTrendingUp } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const LandingPage = () => {
    return (
        <div className="hero-slider">
            
                    <section id='hero' className="hero">
                        <div className="hero-text">
                            <div className="hero-badge">
                                <GiBiceps className="hero-icon" />
                                <span>Your Fitness Journey Starts Here</span>
                            </div>
                            <h1> <span className="brand-highlight">Workout Buddy</span></h1>
                            <p className="hero-description">
                                Track your workouts, monitor progress, and stay motivated. 
                                Your personal fitness companion for achieving your goals.
                            </p>
                            <div className="hero-cta">
                                <Link to="/signup">
                                    <button className="primary-btn">Get Started Free</button>
                                </Link>
                                <Link to="/login">
                                    <button className="secondary-btn">Already have an account?</button>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src={img1} alt="Workout Illustration" />
                        </div>
                    </section>
               

                {/* Features Slide */}
              
                    <section id='features' className="features">
                        <div className="section-header">
                            <h2>Why Choose Workout Buddy?</h2>
                            <p>Everything you need to crush your fitness goals</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className='feature-icons'>
                                    <FaChartLine />
                                </div>
                                <h3>Track Progress</h3>
                                <p>Monitor your strength gains, reps, and overall fitness journey with detailed analytics.</p>
                            </div>
                            <div className="card">
                                <div className='feature-icons'>
                                    <FaDumbbell />
                                </div>
                                <h3>Log Workouts</h3>
                                <p>Easily log your exercises, sets, reps, and weights to keep your training organized.</p>
                            </div>
                            <div className="card">
                                <div className='feature-icons'>
                                    <FaHeart />
                                </div>
                                <h3>Stay Motivated</h3>
                                <p>Build consistency and stay encouraged through your fitness journey with progress tracking.</p>
                            </div>
                        </div>
                    </section>
              

                {/* Benefits Slide */}
                
                    <section id='benefits' className="benefits">
                        <div className="section-header">
                            <h2>Transform Your Fitness Journey</h2>
                            <p>Join thousands of users achieving their goals</p>
                        </div>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <MdTrendingUp />
                                </div>
                                <div className="benefit-content">
                                    <h3>Progressive Overload</h3>
                                    <p>Systematically increase your training intensity for continuous improvement</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <FaCalendarAlt />
                                </div>
                                <div className="benefit-content">
                                    <h3>Consistency Tracking</h3>
                                    <p>Build lasting habits with our intuitive workout logging system</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <FaTrophy />
                                </div>
                                <div className="benefit-content">
                                    <h3>Achieve Goals</h3>
                                    <p>Set and reach your fitness milestones </p>
                                </div>
                            </div>
                           
                        </div>
                    </section>
             

                {/* CTA Slide */}
              
                    <section className="cta-section">
                        <div className="cta-content">
                            <div className="cta-icon">
                                <GiMuscleUp />
                            </div>
                            <h2>Ready to Start Your Fitness Journey?</h2>
                            <p>Join thousands of users who are already transforming their lives with Workout Buddy</p>
                            <div className="cta-buttons">
                                <Link to="/signup">
                                    <button className="primary-btn large">Start Your Free Journey</button>
                                </Link>
                                <Link to="/login">
                                    <button className="secondary-btn large">Sign In</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                  
                   
             
        </div>
    )
}

export default LandingPage

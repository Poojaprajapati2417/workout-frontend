import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/workout-concept-illustration.png"
import { FaHeart } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { GiBiceps } from "react-icons/gi";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

const LandingPage = () => {
    return (
        <div className="hero-slider">
            <Swiper
                modules={[Navigation, Autoplay,Pagination]}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <section className="hero">
                        <div className="hero-text">
                            <h1>Welcome to Workout Buddy <GiBiceps /></h1>
                            <p>Track workouts, monitor your progress, and stay motivated. Your fitness journey starts here.</p>
                            <Link to="/signup"><button>Get Started</button></Link>
                        </div>
                        <img src={img1} alt="Workout Illustration" />
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="features">
                        <h2>Features</h2>
                        <div className="cards">
                            <div className="card">
                                <div className='feature-icons'><GiProgression /></div>
                                <h3>Track Workouts</h3>
                                <p>Log daily workout sessions including reps, sets and loads.</p>
                            </div>
                            <div className="card">
                                <div className='feature-icons'> <FaHeart /></div>
                                <h3>Stay Motivated</h3>
                                <p>Build consistency and stay encouraged through your journey.</p>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default LandingPage

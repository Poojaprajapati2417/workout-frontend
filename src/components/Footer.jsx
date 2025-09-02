import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* App Name */}
                <div style={{display:"flex", alignItems:"center", justifyContent:"center" ,gap:"10px"}}>
                    <a href="#hero"><span className="logo" ><FaDumbbell style={{ font: "24px", color: "#1aac83" }} /></span></a>
                    <h2 className="footer-title">Workout Buddy</h2>
                </div>


                <p className="footer-tagline">Track your workouts. Stay fit. Stay motivated.</p>

                {/* Navigation */}
                <ul className="footer-nav">
                    <HashLink smooth to="/#hero">Home</HashLink>
                    <HashLink smooth to="/#features">Features</HashLink>

                    <HashLink smooth to="/#benefits">Benefits</HashLink>


                </ul>


                <hr />
                {/* Copyright */}
                <p className="footer-copy">
                    © {new Date().getFullYear()} Workout Tracker | Built by Poojakumari Prajapati
                </p>
            </div>
        </footer>
    );
};

export default Footer;

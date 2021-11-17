import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <footer className="footer-content text-center">
            <div className="email">
            <a className="email-link" href="mailto:drobin4@gmail.com"><p>drobin4@gmail.com</p></a>
            </div>
            <div className="social-container">
            <SocialIcon className="social-icon" url="https://www.linkedin.com/in/david-robinette/"></SocialIcon>
            <SocialIcon className="social-icon" bgColor="#ced4da" url="https://github.com/david90937"></SocialIcon>
            <SocialIcon className="social-icon" url="https://discordapp.com/users/David909#7254"></SocialIcon>
            </div>
        </footer>
    )
};

export default Footer;
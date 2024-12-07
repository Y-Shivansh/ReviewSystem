import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content self-center text-center text-md">
                <p>&copy; {currentYear} Review System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
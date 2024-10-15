
// const Footer=()=>{

//     return <>
//        <span>@Copyright 1999-2024 by Refsnes Data. All Rights Reserved</span>
//     </>
// }

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section: Company Name and Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Company Information */}
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h2 className="text-xl font-bold">Amit Company</h2>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Bottom Section: Social Media Links */}
        <div className="mt-4 text-center sm:text-left">
          <ul className="flex justify-center sm:justify-start space-x-6">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

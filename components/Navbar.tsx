'use client';

import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <div id="burgerMenu" className={`menu h-screen w-20 bg-red flex-col ${isMenuOpen ? 'open w-56' : ''} transition-all duration-300 ease-out fixed`}>
          <div id="menuIcon" className="menu-icon cursor-pointer p-4 w-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M35 26.0167L32.65 28.3333L24.3 20L32.65 11.6667L35 13.9833L29.0667 20L35 26.0167ZM5 10H26.6667V13.3333H5V10ZM5 21.6667V18.3333H21.6667V21.6667H5ZM5 30V26.6667H26.6667V30H5Z" fill="#B01901"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5 10H21.6667V13.3333H5V10ZM5 26.6667H21.6667V30H5V26.6667ZM5 18.3333H25V21.6667H5V18.3333ZM26.6667 11.6667L24.3 13.9833L30.2333 20L24.3 26.0167L26.6667 28.3333L35 20L26.6667 11.6667Z" fill="#B01901"/>
              </svg>
            )}
          </div>
          <div className={`menu-items ${isMenuOpen ? 'w-56 h-5/6 flex items-center flex-col justify-around' : 'hidden'} transition-all duration-300 ease-out`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="75" height="76" viewBox="0 0 75 76" fill="none">
                <g clipPath="url(#clip0_39_32)">
                    <path d="M4.16666 38C4.16666 44.5927 6.12162 51.0374 9.78434 56.519C13.447 62.0007 18.653 66.2731 24.7439 68.796C30.8347 71.3189 37.537 71.979 44.003 70.6929C50.469 69.4067 56.4085 66.232 61.0702 61.5703C65.732 56.9085 68.9067 50.9691 70.1928 44.503C71.479 38.037 70.8189 31.3348 68.296 25.2439C65.7731 19.153 61.5006 13.9471 56.019 10.2844C50.5374 6.62166 44.0927 4.66669 37.5 4.66669C28.6594 4.66669 20.181 8.17859 13.9298 14.4298C7.67855 20.681 4.16666 29.1595 4.16666 38ZM39.5833 62.0209V67.0625C38.8958 67.0625 38.2083 67.1667 37.5 67.1667C36.7917 67.1667 36.1042 67.1667 35.4167 67.0625V62.0209H39.5833ZM8.43749 40.0834C8.43749 39.3959 8.33332 38.7084 8.33332 38C8.33332 37.2917 8.33332 36.6042 8.43749 35.9167H13.4792V40.0834H8.43749ZM66.5625 35.9167C66.5625 36.6042 66.6667 37.2917 66.6667 38C66.6667 38.7084 66.6667 39.3959 66.5625 40.0834H61.5208V35.9167L66.5625 35.9167ZM54.9375 19.25C55.1412 19.4213 55.2838 19.654 55.3439 19.9132C55.404 20.1724 55.3783 20.4441 55.2708 20.6875L42.4583 42.6875L20.4583 55.5C19.4792 56.0209 18.1667 54.6875 18.7083 53.7084L31.8958 32.1042L53.5 18.9167C53.7434 18.8092 54.0151 18.7835 54.2743 18.8436C54.5335 18.9038 54.7662 19.0464 54.9375 19.25ZM39.5833 13.9792H35.4167V8.93753C36.1042 8.93753 36.7917 8.83336 37.5 8.83336C38.2083 8.83336 38.8958 8.83336 39.5833 8.93753L39.5833 13.9792Z" fill="#B01901"/>
                    <path d="M40.3125 40.5625L49.5208 24.7708L34.0208 34.25L40.3125 40.5625Z" fill="#B01901"/>
                </g>
                <defs>
                    <clipPath id="clip0_39_32">
                        <rect width="75" height="75" fill="white" transform="matrix(0 -1 1 0 0 75.5)"/>
                    </clipPath>
                </defs>
            </svg>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/accueil">accueil</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/etude-retraite">étude retraite</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/demarche-administratives">démarches administratives</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/temoignages">témoignages</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/contact">contact</a>
          </div>
        </div>
      ) : (
        <header className="h-screen bs:h-28 ms:w-56 bs:w-screen bg-red flex bs:justify-center items-center fixed">
          <div className='bs:w-9/12 w-full bs:h-full h-5/6 flex bs:flex-row bs:show bs:justify-between items-center flex-col justify-around'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="76" viewBox="0 0 75 76" fill="none">
                <g clipPath="url(#clip0_39_32)">
                    <path d="M4.16666 38C4.16666 44.5927 6.12162 51.0374 9.78434 56.519C13.447 62.0007 18.653 66.2731 24.7439 68.796C30.8347 71.3189 37.537 71.979 44.003 70.6929C50.469 69.4067 56.4085 66.232 61.0702 61.5703C65.732 56.9085 68.9067 50.9691 70.1928 44.503C71.479 38.037 70.8189 31.3348 68.296 25.2439C65.7731 19.153 61.5006 13.9471 56.019 10.2844C50.5374 6.62166 44.0927 4.66669 37.5 4.66669C28.6594 4.66669 20.181 8.17859 13.9298 14.4298C7.67855 20.681 4.16666 29.1595 4.16666 38ZM39.5833 62.0209V67.0625C38.8958 67.0625 38.2083 67.1667 37.5 67.1667C36.7917 67.1667 36.1042 67.1667 35.4167 67.0625V62.0209H39.5833ZM8.43749 40.0834C8.43749 39.3959 8.33332 38.7084 8.33332 38C8.33332 37.2917 8.33332 36.6042 8.43749 35.9167H13.4792V40.0834H8.43749ZM66.5625 35.9167C66.5625 36.6042 66.6667 37.2917 66.6667 38C66.6667 38.7084 66.6667 39.3959 66.5625 40.0834H61.5208V35.9167L66.5625 35.9167ZM54.9375 19.25C55.1412 19.4213 55.2838 19.654 55.3439 19.9132C55.404 20.1724 55.3783 20.4441 55.2708 20.6875L42.4583 42.6875L20.4583 55.5C19.4792 56.0209 18.1667 54.6875 18.7083 53.7084L31.8958 32.1042L53.5 18.9167C53.7434 18.8092 54.0151 18.7835 54.2743 18.8436C54.5335 18.9038 54.7662 19.0464 54.9375 19.25ZM39.5833 13.9792H35.4167V8.93753C36.1042 8.93753 36.7917 8.83336 37.5 8.83336C38.2083 8.83336 38.8958 8.83336 39.5833 8.93753L39.5833 13.9792Z" fill="#B01901"/>
                    <path d="M40.3125 40.5625L49.5208 24.7708L34.0208 34.25L40.3125 40.5625Z" fill="#B01901"/>
                </g>
                <defs>
                    <clipPath id="clip0_39_32">
                        <rect width="75" height="75" fill="white" transform="matrix(0 -1 1 0 0 75.5)"/>
                    </clipPath>
                </defs>
            </svg>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/accueil">accueil</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/etude-retraite">étude retraite</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/demarche-administratives">démarches administratives</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/temoignages">témoignages</a>
            <a className="font-navbar text-xl not-italic font-extrabold uppercase text-center text-white-50 hover:text-white transition-colors duration-300" href="/contact">contact</a>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;

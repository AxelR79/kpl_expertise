'use client';

import React from 'react';

const Banner = () => {
  return (
    <div className="bg-grey h-110 flex justify-center">
      <div className="w-9/12 flex">
        <div className="w-1/2 relative flex flex-col justify-center">
            <div className='border-black border-t-4 border-r-4 w-12 h-12 absolute top-16 right-0'></div>
            <h1 className="leading-tight font-montserrat text-6xl font-extrabold uppercase text-black px-8">"On ne choisit pas cette activité par hasard ..."</h1>
            <div className='border-black border-b-4 border-l-4 w-12 h-12 absolute top-84 left-0'></div>
        </div>
        <div className="w-1/2 relative flex justify-center items-center">
            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="307" height="307" viewBox="0 0 307 307" fill="#4B5461">
                <path d="M153.375 272.667C87.6112 272.65 34.0833 219.122 34.0833 153.358C34.0833 87.6112 87.6112 34.1004 153.375 34.0833C219.139 34.0833 272.667 87.5942 272.667 153.358C272.667 219.122 219.139 272.65 153.375 272.667ZM153.375 306.75C194.053 306.75 233.064 290.591 261.828 261.827C290.591 233.064 306.75 194.053 306.75 153.375C306.75 112.697 290.591 73.6859 261.828 44.9225C233.064 16.1591 194.053 0 153.375 0C112.697 0 73.6859 16.1591 44.9225 44.9225C16.1591 73.6859 0 112.697 0 153.375C0 194.053 16.1591 233.064 44.9225 261.828C73.6859 290.591 112.697 306.75 153.375 306.75ZM82.1068 224.626C83.1797 225.703 84.5224 226.473 85.9944 226.853C87.4663 227.234 89.0135 227.212 90.4742 226.791L191.889 197.717C193.278 197.32 194.542 196.574 195.562 195.551C196.582 194.528 197.324 193.262 197.717 191.872L226.808 90.4572C227.184 89.1884 227.257 87.8491 227.021 86.547C226.785 85.2448 226.247 84.0163 225.449 82.9602C224.652 81.9041 223.618 81.05 222.43 80.4667C221.242 79.8833 219.934 79.587 218.611 79.6016L216.259 79.9425L114.861 109.05C113.472 109.447 112.208 110.193 111.188 111.216C110.168 112.239 109.426 113.505 109.033 114.895L79.9425 216.276C79.5239 217.734 79.5039 219.278 79.8845 220.746C80.2652 222.215 81.0326 223.555 82.1068 224.626ZM206.204 100.529L182.636 182.618L124.114 124.08L206.204 100.529Z" fill="#4B5461"/>
            </svg>
            <img className="w-auto h-full absolute right-0" src="img/laurent.png" alt="Laurent Petit" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
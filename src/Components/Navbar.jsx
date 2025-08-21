import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div>
             <nav className='flex justify-center'>
         <ul className='flex justify-between w-1/2 text-3xl'>
           <li>home</li>
          <li>about</li>
          <li className='text-2xl'>services</li>
          <li>blog</li>
         </ul>
        </nav>
        </div>
        </div>
    );
};

export default Navbar;

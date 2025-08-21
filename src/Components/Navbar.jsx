import Link from 'next/link';
import React from 'react';

const Navbar = () => {

        const links=(
        
        <div className="flex space-x-8 font-semibold text-gray-700 items-center">
               
       <Link href="/" > Home</Link>
       <Link href="/products" > Products</Link>
       <Link href="/addProducts" > Add Products</Link>
      
      </div>
        )
    
    return (
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
			<p className='text-2xl font-mono font-extrabold'>GoriberDokan</p>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
		{links}
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
		
			<button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Log In</button>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-black">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Navbar;

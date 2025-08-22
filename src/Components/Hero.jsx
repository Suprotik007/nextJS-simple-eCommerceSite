import React from 'react';

const Hero = () => {
  return (
    <section className="p-6 py-16 dark:bg-violet-700  rounded-2xl dark:text-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">

         
          <h2 className="text-center lg:text-left text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Up to <br className="sm:hidden" /> <span className="text-yellow-400">50% Off</span>
          </h2>

          
          <p className="text-center lg:text-left text-lg font-medium space-x-2">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-yellow-300">MAGIC50</span>
          </p>

          <a
            href="/products"
            rel="noreferrer noopener"
            className="px-8 py-3 rounded-md border border-yellow-400 bg-yellow-400 text-gray-900 font-semibold shadow-md hover:bg-yellow-500 hover:border-yellow-500 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

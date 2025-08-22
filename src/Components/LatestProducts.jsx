"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import Link from "next/link";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => a.price - b.price).slice(0, 4);
        setProducts(sorted);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

 if (loading) {
    return (
      <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900  tracking-tight">
        Popular Products
      </h2>
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p._id} className="px-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col space-y-4 hover:shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {p.name}
              </h3>
              <p className="text-violet-600 font-extrabold text-lg">
                💰 ${p.price}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-grow">
                {p.description.length > 100
                  ? p.description.substring(0, 100) + "..."
                  : p.description}
              </p>
               <Link href={`/details/${p._id}`}>
  <button className="bg-violet-600 text-white py-1 px-2 rounded hover:bg-violet-700 transition-colors">
    Details
  </button>
</Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

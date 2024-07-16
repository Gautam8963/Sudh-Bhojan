import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        
        <p className="text-gray-600 text-lg mb-6">
          Welcome to FoodieHub, your number one source for ordering food online. We're dedicated to giving you the very best of cuisine, with a focus on quality, customer service, and uniqueness.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Features</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Wide variety of cuisines</li>
          <li>Easy and secure payment options</li>
          <li>Fast delivery</li>
          <li>24/7 customer support</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img src="https://pngfre.com/wp-content/uploads/oggy-1.png" alt="Team member" className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Oggy</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img src="https://i.pinimg.com/736x/9e/a7/b5/9ea7b548bb35114bdd527eefbe40166e.jpg" alt="Team member" className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Jack</h3>
            <p className="text-gray-500">Chief Chef</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img src="https://mystickermania.com/cdn/stickers/cartoons/oggy-cockroaches-cockroach-512x512.png" alt="Team member" className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-bold text-gray-700">Dee Dee</h3>
            <p className="text-gray-500">Head of Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

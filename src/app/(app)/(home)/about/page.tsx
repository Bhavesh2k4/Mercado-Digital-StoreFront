import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h1 className="text-4xl font-black">ABOUT MERCADO</h1>
        </div>

        <div className="bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-6">
          <h2 className="text-2xl font-black mb-4">WHAT IS MERCADO?</h2>
          <p className="text-lg font-semibold">
            A digital marketplace platform where vendors can sell digital products 
            like software, courses, templates, and more. Each vendor gets their own 
            custom storefront with automatic payment processing.
          </p>
        </div>

        <div className="bg-blue-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
          <h2 className="text-2xl font-black mb-4">HOW IT WORKS</h2>
          <div className="space-y-3 font-semibold">
            <p>• Vendors create custom storefronts with their own subdomain</p>
            <p>• Upload and sell digital products instantly</p>
            <p>• Customers purchase and access products in their library</p>
            <p>• Platform handles payments, delivery, and user management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
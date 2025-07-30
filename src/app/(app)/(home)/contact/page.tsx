import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-black text-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h1 className="text-4xl font-black">CONTACT</h1>
        </div>

        <div className="bg-blue-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📱</span>
              <div>
                <p className="font-black text-lg">PHONE</p>
                <a href="tel:+916363906794" className="font-semibold text-xl hover:underline">
                  +91 6363906794
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <p className="font-black text-lg">EMAIL</p>
                <a href="mailto:bhavesh.oct2k4@gmail.com" className="font-semibold text-xl hover:underline">
                  bhavesh.oct2k4@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-3xl">🐙</span>
              <div>
                <p className="font-black text-lg">GITHUB</p>
                <a 
                  href="https://github.com/bhavesh2k4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-xl hover:underline"
                >
                  bhavesh2k4
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
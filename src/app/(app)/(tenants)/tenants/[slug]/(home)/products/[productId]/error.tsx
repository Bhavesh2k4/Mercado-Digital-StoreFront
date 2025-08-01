"use client"
import { HomeIcon, RefreshCw, SearchCheckIcon } from 'lucide-react';
import React from 'react'

const ErrorPage = () => {
  return (
    <div className="h-screen bg-yellow-300 p-4 overflow-hidden flex flex-col">
      <div className="mb-4">
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-black text-white px-4 py-2 font-bold border-4 border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <HomeIcon className="inline-block w-4 h-4 mr-2" />
          HOME
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-12 gap-4 h-full items-center">
            
            <div className="col-span-2 space-y-4">
              <div className="bg-red-500 border-4 border-black w-16 h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-45"></div>
              <div className="bg-blue-500 border-4 border-black w-12 h-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="bg-green-500 border-4 border-black w-20 h-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-12"></div>
            </div>
            <div className="col-span-8 text-center">
              <div className="bg-red-500 border-8 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-1">
                <h1 className="text-6xl font-black text-white mb-2">404</h1>
                <h2 className="text-2xl font-black text-white">NO PRODUCTS FOUND</h2>
              </div>

              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="bg-white border-6 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
                  <SearchCheckIcon className="w-12 h-12 text-black" />
                </div>
                <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
                  <p className="text-lg font-bold text-black">SEARCH CAME UP EMPTY!</p>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button className="bg-blue-500 text-white px-6 py-3 font-black border-4 border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1">
                  <RefreshCw className="inline-block w-4 h-4 mr-2" />
                  TRY AGAIN
                </button>
                <button className="bg-green-500 text-white px-6 py-3 font-black border-4 border-black hover:bg-white hover:text-black transition-colors duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1">
                  BROWSE ALL
                </button>
              </div>
            </div>
            <div className="col-span-2 space-y-4">
              <div className="bg-purple-500 border-4 border-black w-14 h-14 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full"></div>
              <div className="bg-orange-500 border-4 border-black w-18 h-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12"></div>
              <div className="bg-pink-500 border-4 border-black w-16 h-16 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-white border-3 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <h4 className="font-black text-sm mb-1">MAYBE WE DONT</h4>
          <p className="font-semibold text-xs">Have what you want</p>
        </div>
        
        <div className="bg-white border-3 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <h4 className="font-black text-sm mb-1">TRY AMAZON</h4>
          <p className="font-semibold text-xs">They have everything</p>
        </div>
        
        <div className="bg-white border-3 border-black p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
          <h4 className="font-black text-sm mb-1">ACCEPT DEFEAT</h4>
          <p className="font-semibold text-xs">Move on with life</p>
        </div>
      </div>

      <div className="absolute top-20 left-10 bg-cyan-400 border-4 border-black w-8 h-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-12"></div>
      <div className="absolute top-32 right-16 bg-lime-400 border-4 border-black w-6 h-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-45"></div>
      <div className="absolute bottom-32 left-20 bg-rose-400 border-4 border-black w-10 h-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-30"></div>
      <div className="absolute bottom-20 right-24 bg-indigo-400 border-4 border-black w-8 h-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full"></div>
    </div>
  );
}

export default ErrorPage
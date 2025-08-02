"use client"
import React from 'react'
import { toast } from 'sonner'

const TestPaymentPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Testing Instructions Section Only */}
      <div className="bg-yellow-400 text-black p-8 border-8 border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-pink-500 text-white px-6 py-3 transform rotate-45 translate-x-4 translate-y-2">
          <span className="font-black text-xs">TEST MODE</span>
        </div>
        
        <h2 className="text-black text-3xl font-black uppercase mb-6">
           TESTING INSTRUCTIONS
        </h2>
        
        <p className="text-xl mb-6 font-bold">
          This is a <strong className="text-black">TEST ENVIRONMENT</strong>. Use these test card details to simulate payments:
        </p>
        
        <div className="bg-white text-black p-6 border-4 border-black font-mono">
          <div className="mb-4">
            <strong>Indian Test Card (Visa):</strong>
          </div>
          <div className="space-y-2 text-lg">
            <div className="flex items-center gap-3">
              Card Number: <strong>4000 0035 6000 0008</strong>
              <button 
                onClick={() => { navigator.clipboard.writeText('4000003560000008'); toast.success('Card number copied!'); }}
                className="bg-blue-500 text-white px-3 py-1 text-sm font-bold rounded hover:bg-blue-600 transition-colors hover:cursor-pointer"
              >
                COPY
              </button>
            </div>
            <div>Expiry: Any future date (e.g., 12/28)</div>
            <div>CVV: Any 3 digits (e.g., 567)</div>
            <div>Name: Any name you want</div>
          </div>
          <div className="mt-4 text-base italic">
            <em>This card will always succeed in test mode and simulate a successful Indian payment.</em>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestPaymentPage
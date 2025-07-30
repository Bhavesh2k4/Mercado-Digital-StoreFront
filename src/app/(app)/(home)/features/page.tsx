import React from 'react';

const FeaturesPage = () => {
  const features = [
    { icon: "🏬", title: "MULTI-TENANT", desc: "Multiple vendors, one platform", color: "bg-red-300" },
    { icon: "🌐", title: "CUSTOM DOMAINS", desc: "vendor.mercado.com subdomains", color: "bg-blue-300" },
    { icon: "💳", title: "PAYMENTS*", desc: "Stripe Connect integration", color: "bg-yellow-300" },
    { icon: "📚", title: "DIGITAL LIBRARY", desc: "Customer purchase history", color: "bg-green-300" },
    { icon: "⭐", title: "REVIEWS", desc: "Product ratings system", color: "bg-purple-300" },
    { icon: "🔍", title: "SEARCH & FILTER", desc: "Find products easily", color: "bg-pink-300" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6`}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-black mb-2">{feature.title}</h3>
              <p className="font-semibold text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-orange-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
          <h2 className="text-2xl font-black mb-4">TECH STACK</h2>
          <div className="grid md:grid-cols-2 gap-4 font-semibold">
            <div>
              <p>⚙️ Next.js 15</p>
              <p>🎨 TailwindCSS V4</p>
              <p>💅 ShadcnUI Components</p>
            </div>
            <div>
              <p>🧱 Payload CMS</p>
              <p>🖼️ Image Upload Support</p>
              <p>🛠️ Admin & Merchant Dashboards</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-white border-2 border-black">
            <p className="font-black text-sm">
              *Payment provider still being evaluated for Indian market compatibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
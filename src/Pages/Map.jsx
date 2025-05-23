
"use client"

import { useState } from "react"

export default function Map() {
  const [isFullMap, setIsFullMap] = useState(false)

  const companyInfo = {
    name: "ProCleaning",
    location: "Gulshan, Dhaka",
    phone: "+880 1234 567890",
    email: "info@procleaning.com",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.40880433022462!3d23.790542300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f7b9bf49%3A0x7a6b7dd72dcfaa2c!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653061891672!5m2!1sen!2sbd",
  }

  return (
    <section className="w-full py-12 bg-slate-50">
      <div className=" px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Us</h2>
          <p className="max-w-xl mx-auto text-gray-600 text-base md:text-xl mt-2">
            Visit our office or get in touch with us directly
          </p>
        </div>

        <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-md overflow-hidden border">
          <div className="border-b bg-gray-100 px-6 py-4">
            <h3 className="text-xl font-semibold">{companyInfo.name}</h3>
          </div>

          <div className={`relative ${isFullMap ? "h-[500px]" : "h-[300px]"} w-full transition-all duration-300`}>
            <iframe
              src={companyInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ProCleaning Location"
              className="absolute inset-0"
            ></iframe>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                📍 <span>{companyInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                📞 <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                ✉️ <span>{companyInfo.email}</span>
              </div>
            </div>
            <button
              onClick={() => setIsFullMap(!isFullMap)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {isFullMap ? "Collapse Map" : "View Full Map"} 🔗
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

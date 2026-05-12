"use client"
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-300 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          การสร้างคิว
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 mb-8">
            <h1 className="text-white font-bold text-4xl">เลขคิว: {}</h1>
          </div>
          
          <form action="" className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ชื่อลูกค้า
              </label>
              <input 
                type="text" 
                placeholder="ใส่ชื่อลูกค้า"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                หมายเหตุ
              </label>
              <input 
                type="text" 
                placeholder="เพิ่มเติม"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              สร้างคิว
            </button>
            <button
              type="button"
              onClick={() => window.location.href = "/admin/display"}
              className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              ยกเลิก
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

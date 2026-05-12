import React from "react";

import MenuItems from "@/app/components/menuItems";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuItems />
      <div className="p-20">
        <div className="flex gap-8">
          <div className="flex-1">
            <div className="justify-center flex gap-8">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl p-16 w-96">
                <div className="text-center">
                  <p className="text-blue-100 text-lg font-semibold mb-2 tracking-wide">
                    คิวปัจจุบัน
                  </p>
                  <h1 className="text-white text-9xl font-black mb-6 tracking-tight drop-shadow-lg">
                    1
                  </h1>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/30">
                    <p className="text-white text-xl font-bold">กำลังเรียก</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-2xl p-16 w-96">
                <div className="text-center">
                  <p className="text-green-100 text-lg font-semibold mb-2 tracking-wide">
                    คิวถัดไป
                  </p>
                  <h1 className="text-white text-9xl font-black mb-6 tracking-tight drop-shadow-lg">
                    2
                  </h1>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full border border-white/30">
                    <p className="text-white text-lg font-bold">รอเรียก</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {Queue Panel} */}
          <div className="w-96 bg-white rounded-2xl shadow-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">
              รายการคิวทั้งหมด
            </h2>
            {/* Fetch queue data from API */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div>
                  <p className="font-bold text-gray-800">คิว #1</p>
                  <p className="text-sm text-gray-600">สมชาย ใจดี</p>
                </div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  กำลังเรียก
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

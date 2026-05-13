"use client";
import React from "react";
import { EditIcon, TrashIcon } from "lucide-react";

export default function TablesPage() {
  return (
    <div className="bg-gray-100 p-5 rounded-2xl w-full max-w-6xl mx-auto">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
          โต๊ะทั้งหมด
        </h1>
        
        {/* Add Table Button */}
        <div className="mb-4">
          <button
            className="w-40 text-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors shadow-md"
            onClick={() =>
              (window.location.href = "/admin/display/tables/create-table")
            }
          >
            เพิ่มโต๊ะ
          </button>
        </div>
      </header>
      {/* Tables List */}
      <main>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Table Header */}
          <table className="w-full">
            <thead className="bg-blue-600">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold text-lg">
                  เลขที่โต๊ะ
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold text-lg">
                  จำนวนที่นั่ง
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold text-lg">
                  สถานะ
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold text-lg">
                  หมายเหตุ
                </th>
                <th className="px-6 py-3 text-left text-white font-semibold text-lg">
                  จัดการ
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-800 font-medium">1</td>
                <td className="px-6 py-4 text-gray-600">4</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    ว่าง
                  </span>
                </td>
                {/* Description */}
                <td>
                  <div>
                    
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    {/* Edit Button */}
                    <button className="bg-blue-600 hover:bg-blue-800 px-3 py-1 rounded-lg text-white font-medium flex items-center gap-1 transition-colors">
                      <EditIcon size={16} />
                      แก้ไข
                    </button>
                    
                    {/* Delete Button */}
                    <button className="bg-red-600 hover:bg-red-800 px-3 py-1 rounded-lg text-white font-medium flex items-center gap-1 transition-colors">
                      <TrashIcon size={16} />
                      ลบ
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

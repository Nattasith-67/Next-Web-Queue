"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    const [user, setUser] = useState([])

    useEffect(() => {
        let url = ``;
    })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-2">เข้าสู่ระบบ</h1>
            <p className="text-gray-600 text-center mb-6">สำหรับพนักงาน</p>
            <form action="" className="space-y-4">
                <div>
                    <input 
                        type="text" 
                        placeholder='กรอกชื่อผู้ใช้' 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='กรอกรหัสพนักงาน' 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        เข้าสู่ระบบ
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

export default function MenuItems() {
  return (
    <div className="bg-blue-600">
      <nav className="container mx-auto px-4">
        <ul className="flex items-center space-x-8 py-4">
          <li>
            <Link 
              href="/admin/display/create-queue" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              สร้างบัตรคิว
            </Link>
          </li>
          <li>
            <Link 
              href="/admin/display/queue-list" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              รายการคิว
            </Link>
          </li>
          <li>
            <Link 
              href="/admin/statistics" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              สถิติ
            </Link>
          </li>
          <li>
            <Link 
              href="/admin/settings" 
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              ตั้งค่า
            </Link>
          </li>
          <li>
            <Link 
              href="/admin/display/editType"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              สร้าง/แก้ไขประเภท
            </Link>
          </li>
          <li className="ml-auto">
            <Link 
              href="/admin" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              ออกจากระบบ
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

function SellerLayout() {
  return (
    <div className="h-screen w-screen flex flex-col">
    <header className="h-[6vh] w-full bg-white text-black shadow-lg border-b border-gray-300 relative z-10">
    </header>
    <div className="flex flex-1">
        <nav className="w-[30vh] h-full bg-gray-700 text-white shadow-lg border-r border-gray-500 absolute top-0 z-20">
        </nav>
        <main className="flex flex-1 bg-gray-50 shadow-inner p-6 ml-[30vh]">
            <Outlet />
        </main>
    </div>
</div>
  )
}

export default SellerLayout

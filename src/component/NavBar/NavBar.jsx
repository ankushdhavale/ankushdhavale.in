import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <nav className=''>
        <section className='px-4 py-2 flex border-transparent rounded p-1 shadow-slate-500 bg-cyan-950'>
            <text className='font-extrabold text-sm'>Ankush</text>
            <div className='list-container'>
                <ul className='flex gap-5 text-xs items-center'>
                    <li to="/">About</li>
                    <li >Project</li>
                    <li>Blog</li>
                    <li>Hello</li>
                </ul>
            </div>
        </section>
      </nav>
    </>
  )
}

export default NavBar;
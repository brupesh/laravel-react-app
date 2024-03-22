import React from "react"
import { NavLink } from "react-router-dom"

function Header() {

    const NavStyle = ({isActive}:any) => {
        return {
            color: isActive ? 'orange' : ''
        }
    }


  return (
    <div className='text-center p-2 text-white bg-gray-500 w-full'>
        <nav>
        <ul className="flex justify-center gap-4">
          <li>
            <NavLink className="font-bold hover:text-orange-300" style={NavStyle} to="/"  >Home</NavLink>
          </li>
          <li>
            <NavLink className="font-bold hover:text-orange-300" style={NavStyle} to="/users" >Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
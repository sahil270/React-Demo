import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

export default function Header() {
  return (
    <header className='shadow sticky z-50 top-0'>
      <nav className='border-gray-700 px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <Link to='/' className='flex items-center'>
            <img src={logo} className='mr-3 h-12' alt='Logo' />
          </Link>
          <div className='flex items-center lg:order-2'>
            <Link
              to='#'
              className='text-white hover:bg-gray-500 focus:ring-4 focus:ring-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
            >
              Log in
            </Link>
            <Link
              to='#'
              className='text-black bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
            >
              Get started
            </Link>
          </div>
          <div
            className='justify-start items-center w-full lg:flex lg:w-auto lg:order-1'
            id='mobile-menu-2'
          >
            <ul className='flex flex-wrap mt-0 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <NavLink
                  to=''
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-inherit"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/navbar'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-inherit"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Background Changer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/password-generator'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-inherit"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Password Generator
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/currency-converter'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-inherit"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Currency Converter
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/task-tracker'
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-green-500" : "text-inherit"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-500 lg:p-0`
                  }
                >
                  Task Tracker
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

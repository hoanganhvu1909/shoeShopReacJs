import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  // Một số lưu ý khi sử dụng hook
  // 1. Luôn khai báo hook ở cấp độ cao nhất trong component
  // 2. Không khai báo hook nằm trong bất kì hàm nào hết, hook luôn để nằm ở cấp độ component
  //   console.log(window.location.href);
  const navigate = useNavigate();
  const checkActive = ({ isActive, isPending }) => {
    // console.log(isActive);
    // console.log(isPending);
    let className = 'block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0';
    // className += isActive ? " text-red-500" : " text-white";
    return `${className} ${isActive ? 'text-red-500' : 'text-black'}`;
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/redux" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">CyberSoft</span>
          </NavLink>
          <div className="flex items-center lg:order-2">
            <button
              onClick={() => {
                let a = 4 + 5;
                if (a > 8) {
                  // sử dụng navigate để điều hướng tới component Ex_redux
                  navigate('/redux');
                }
              }}
              className="py-2 px-5 text-sm bg-orange-500 text-white rounded"
            >
              Đăng nhập
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/" className={checkActive} aria-current="page">
                  {({ isActive, isPending }) => {
                    return isActive ? 'Home' : 'Không biết';
                  }}
                </NavLink>
              </li>
              <li>
                <NavLink to="/redux" className={checkActive}>
                  Redux
                </NavLink>
              </li>
              <li>
                <NavLink to="/shoe-detail/9" className={checkActive}>
                  Detail shoes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

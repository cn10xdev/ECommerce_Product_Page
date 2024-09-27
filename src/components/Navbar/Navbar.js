import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logoSVG from "../../assets/logos/logo-no-background.png";
import cartIcon from "../../assets/icons/shopping-cart.png";

/* Styles */
import MenuSvg from "../../assets/MenuSvg";
import { navigation } from "../../constants/navbarMenu";
import { SmallScreenNavBackground } from "../SmallScreenNavBackground/SmallScreenNavBackground";

const Navbar = ({ cart }) => {
  const pathname = useLocation();
  const [currentUser, setCurrentUser] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm py-0"
        }
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-2 text-n-2">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logoSVG} alt="logo" className=" w-40" />
          </NavLink>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  style={({ isActive }) =>
                    isActive ? { color: "#AC6AFF" } : {}
                  }
                  className={`block relative font-code text-2xl uppercase lg:cursive lg:text-[1rem] lg:capitalize transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1"
                  }  lg:hover:text-n-1/50 xl:px-12`}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
            <SmallScreenNavBackground />
          </nav>

          {currentUser ? (
            <div></div>
          ) : (
            <>
              <button className="hidden lg:flex">
                <NavLink
                  to="/sign-in"
                  style={({ isActive }) =>
                    isActive ? { color: "#AC6AFF" } : {}
                  }
                  className={`cursor-pointer hidden lg:flex items-center gap-1 font-code text-n-1  justify-center  transition-colors hover:text-[#AC6AFF] mr-8 font-semibold`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                    />
                  </svg>

                  <span>Sign-In</span>
                </NavLink>
              </button>

              <NavLink
                to="/cart"
                className={`cursor-pointer hidden lg:flex items-center gap-1 font-code text-n-1  justify-center  transition-colors p-2 bg-[#AC6AFF] hover:bg-transparent relative`}
                style={{ borderRadius: "50%" }}
              >
                <div className="absolute rounded-full w-4 h-4 top-0 right-0 text-sm shadow-lg shadow-black bg-white text-black flex items-center justify-center">
                  {cart.length}
                </div>
                <img src={cartIcon} alt="cart" className="w-9 h-9" />
              </NavLink>
            </>
          )}

          <button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

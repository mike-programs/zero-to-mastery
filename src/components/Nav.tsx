import logo from "../assets/Home/images/ztm-logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Primary from "./Buttons/Primary";
import Secondary from "./Buttons/Secondary";
import { useState } from "react";
import { IconContext } from "react-icons";

function Nav() {
  const [isOpen, setOpen] = useState(false);

  function toggleNav() {
    setOpen(!isOpen);
  }

  return (
    <div className="sticky top-0 bg-white z-20">
      <div className="flex p-4 lg:px-16 md:py-3 justify-between">
        <div className="md:flex md:items-center">
          <img src={logo} alt="ztm-logo" className="w-24" />
        </div>

        <div>
          <div
            className={
              isOpen
                ? "fixed top-[4.5rem] h-screen right-0 mx-auto left-0 text-center bg-white pt-5"
                : "hidden xl:flex xl:flex-row xl:items-center xl:gap-5 xl:p-2 "
            }
          >
            <div className="flex flex-col gap-5 text-xl font-semibold mb-5 xl:flex-row xl:my-auto xl:text-sm xl:gap-7">
              <span>
                Academy
                <IconContext.Provider value={{ style: { display: "inline" } }}>
                  <RiArrowDropDownLine size={30} />
                </IconContext.Provider>
              </span>
              <span className="nav-style">Testimonials</span>
              <span className="nav-style">Blog</span>
              <span className="nav-style">Cheat Sheets</span>
              <span className="nav-style">Community</span>
            </div>

            <div className="flex flex-col gap-4 xl:gap-2 xl:flex-row xl:items-center xl:w-92 xl:justify-evenly">
              <Secondary
                paddingX="px-7 md:px-9"
                paddingY="py-3 md:py-2"
                content="SIGN IN"
              />
              <Primary
                paddingX="py-3 px-8"
                paddingY="md:py-2"
                fontSize="text-base"
                fontWeight="font-medium"
                content="JOIN ZERO TO MASTERY"
              />
            </div>
          </div>
        </div>
        <div className="flex self-center xl:hidden" onClick={toggleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <hr className="md:hidden" />
    </div>
  );
}

export default Nav;

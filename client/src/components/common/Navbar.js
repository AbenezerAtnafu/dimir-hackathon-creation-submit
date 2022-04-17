import { useState } from "react";
import logo from "../../assets/images/logo2.png";
const Navbar = ({ isMobileNavOpen, showMobileNav }) => {
  const [toggleBackground, setToggleBackground] = useState("bg-banner-2");
  return (
    <div
      className={`${toggleBackground}  bg-cover h-screen flex flex-col transition-all delay-75 duration-1000`}
    >
      <div className="flex flex-col lg:flex-row h-1/2">
        <div
          className="flex flex-col items-start lg:w-1/4 border-r lg:border-b  border-primary"
          onMouseOver={() => setToggleBackground("bg-banner-2")}
        >
          <img src={logo} alt="" className="ml-8 mt-6 hidden lg:block w-48" />
          <div
            className="border-2 border-white text-white w-28 py-2 mb-4 lg:mb-0 lg:-rotate-90 mt-16 transition-all duration-1000 hover:bg-white hover:text-primary font-bold cursor-pointer text-center"
            onClick={() => showMobileNav(!isMobileNavOpen)}
          >
            Menu |||
          </div>
        </div>
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-2")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              Lalibela
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Our numbers can tell you who we are
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("ourNumber");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className=" cursor-pointer text-center text-white text-2xl font-bold pb-8  group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary"
          >
            Our numbers
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-3")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              Axum
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Look at the selection of our projects
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("ourProject");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            href="#ourProject"
            className="cursor-pointer text-center text-white text-2xl font-bold pb-8  group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary"
          >
            Our projects
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-4")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              Fasiledes
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Request rental service for any machines
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("rentMachineries");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer text-center text-white text-2xl font-bold pb-8  group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary"
          >
            Rent Machineries
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-1/2">
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-5")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              Harer
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Request rental service for any machines
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("rentMachineries");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer text-center text-white text-2xl font-bold pb-8  group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary"
          >
            Rent Machineries
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-6")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              Tis Abay
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Book your Consultation easily
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("consultation");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer text-center text-white text-2xl font-bold pb-8 group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary "
          >
            Book Consultation
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-1")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              AAU
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Book your Consultation easily
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("consultation");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer text-center text-white text-2xl font-bold pb-8  group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary"
          >
            Book Consultation
          </p>
        </div>
        <div
          className="flex flex-col justify-end items-center lg:w-1/4 border-r border-b  border-primary group hover:bg-fourth opacity-70 transition-all duration-1000"
          onMouseOver={() => setToggleBackground("bg-banner-7")}
        >
          <div className="group-hover:flex flex-col hidden items-start pb-28">
            <p className="text-white text-4xl font-bold pb-4 hidden lg:block">
              Tiya Stones
            </p>
            <p className="text-white text-xl font-light hidden lg:block">
              Let's have fun and test yourself
            </p>
          </div>

          <p
            onClick={(e) => {
              let hero = document.getElementById("game");
              e.preventDefault(); // Stop Page Reloading
              hero &&
                hero.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="cursor-pointer text-center text-white text-2xl font-bold pb-8  group-hover:border group-hover:py-4 group-hover:px-8 group-hover:mb-8 hover:bg-secondary hover:text-primary"
          >
            Have fun
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

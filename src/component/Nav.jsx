import React, { useState } from "react";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="nav fixed z-20 w-full">
      <div className="nav-container w-full">
        <div className="navbar fixed top-4 left-0 w-full flex justify-between items-center px-4 py-4">
          <div className="logo no-underline text-white font-bold uppercase text-2xl tracking-widest pl-8">
            ISRAD
          </div>
          <div
            className="menu-toggle cursor-pointer flex items-center justify-center w-12 h-12"
            onClick={() => setNavOpen(!navOpen)}
          >
            <div
              className={
                navOpen
                  ? "hamBox hamBoxOpen relative w-11 h-11 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-[#2a2a2f] flex items-center justify-center"
                  : "hamBox relative w-11 h-11 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:bg-[#2a2a2f] flex items-center justify-center"
              }
            >
              <span
                className={
                  navOpen
                    ? "lineTop spin absolute block w-8 h-0.5 rounded-[10px] bg-white left-0.5 right-0 m-auto transition-all duration-500 ease-in-out top-5.5 rotate-[135deg]"
                    : "lineTop absolute block w-8 h-0.5 rounded-[10px] bg-white/50 left-0.5 right-0 m-auto transition-all duration-500 ease-in-out top-4.5"
                }
              ></span>
              <span
                className={
                  navOpen
                    ? "lineBottom spin absolute block w-8 h-0.5 rounded-[10px] bg-white left-0.5 right-0 m-auto transition-all duration-500 ease-in-out bottom-5 rotate-[225deg]"
                    : "lineBottom absolute block w-8 h-0.5 rounded-[10px] bg-white/50 left-0.5 right-0 m-auto transition-all duration-500 ease-in-out bottom-4.5"
                }
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay fixed bg-[#18181c] -z-10 left-0 w-full h-screen overflow-hidden p-16 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0 flex flex-col justify-center items-center gap-0">
            <li className="nav-item list-none relative">
              <a
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                }}
                className="no-underline text-white text-[6em] font-sans font-normal relative transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                HOME
              </a>
            </li>
            <li className="nav-item list-none relative">
              <a
                href="/projects"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
                className="no-underline text-white text-[6em] font-sans font-normal relative transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item list-none relative">
              <a
                href="/about"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.0s" : "0s",
                }}
                className="no-underline text-white text-[6em] font-sans font-normal relative transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                ABOUT
              </a>
            </li>
            <li className="nav-item list-none relative">
              <a
                href="/contact"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
                className="no-underline text-white text-[6em] font-sans font-normal relative transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                CONTACT
              </a>
            </li>
          </ul>
          <div className="nav-footer absolute w-full bottom-0 left-0 p-8 flex justify-between">
            <div className={`location relative -bottom-5 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans uppercase${navOpen ? ' opacity-100' : ' opacity-0'}`}> 
              <span>Toronto, ON</span>
            </div>
            <div className="nav-social-media">
              <ul className="flex">
                <li className="list-none">
                  <a href="#" className={`relative -bottom-5 no-underline font-sans text-white uppercase pl-8 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]${navOpen ? ' opacity-100' : ' opacity-0'}`}>YouTube</a>
                </li>
                <li className="list-none">
                  <a href="" className={`relative -bottom-5 no-underline font-sans text-white uppercase pl-8 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]${navOpen ? ' opacity-100' : ' opacity-0'}`}>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React, { useState } from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, onClick, style }) => {
  const letters = children.split("");
  
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      onClick={onClick}
      style={{
        ...style,
        lineHeight: 0.9,
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
      className="no-underline text-[#F2AA4C] lg:text-[6em] text-[3em] font-sans font-bold transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
        {letters.map((l, i) => (
          <span key={i} style={{ position: 'relative', display: 'inline-block', overflow: 'hidden' }}>
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" }
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ display: 'inline-block' }}
            >
              {l}
            </motion.span>
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 }
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              style={{ 
                display: 'inline-block', 
                position: 'absolute', 
                top: 0, 
                left: 0
              }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.a>
  );
};

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className="nav fixed z-20 w-full bg-[#101820] font-[Space Grotesk]"
      style={{ fontFamily: "Space Grotesk, sans-serif" }}
    >
      <div className="nav-container w-full">
        <div className="navbar fixed top-4 left-0 w-full flex justify-between items-center px-4 py-4">
          <div className="logo font-bold uppercase text-2xl tracking-widest pl-8 overflow-hidden">
            <motion.span 
              className="text-[#F2AA4C] mix-blend-difference inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
            >
              ISRAD
            </motion.span>
          </div>

          <div
            className="menu-toggle cursor-pointer flex items-center justify-center w-12 h-12 bg-[#101820]"
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
                    ? "lineTop spin absolute block w-8 h-0.5 rounded-[10px] bg-[#F2AA4C] left-0.5 right-0 m-auto transition-all duration-500 ease-in-out top-5.5 rotate-[135deg]"
                    : "lineTop absolute block w-8 h-0.5 rounded-[10px] bg-[#F2AA4C]/50 left-0.5 right-0 m-auto transition-all duration-500 ease-in-out top-4.5"
                }
              ></span>
              <span
                className={
                  navOpen
                    ? "lineBottom spin absolute block w-8 h-0.5 rounded-[10px] bg-[#F2AA4C] left-0.5 right-0 m-auto transition-all duration-500 ease-in-out bottom-5 rotate-[225deg]"
                    : "lineBottom absolute block w-8 h-0.5 rounded-[10px] bg-[#F2AA4C]/50 left-0.5 right-0 m-auto transition-all duration-500 ease-in-out bottom-4.5"
                }
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay fixed bg-[#101820] -z-10 left-0 w-full h-screen overflow-hidden p-16 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className="nav-links absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0 flex flex-col justify-center items-center gap-8">
            <li className="nav-item list-none relative overflow-hidden mb-6">
              <FlipLink 
                href="/"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.8s" : "0s",
                  fontFamily: "Space Grotesk, sans-serif"
                }}
              >
                HOME
              </FlipLink>
            </li>
            <li className="nav-item list-none relative overflow-hidden mb-6">
              <FlipLink
                href="/projects"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                  fontFamily: "Space Grotesk, sans-serif"
                }}
              >
                PROJECTS
              </FlipLink>
            </li>
            <li className="nav-item list-none relative overflow-hidden mb-6">
              <FlipLink
                href="/about"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.0s" : "0s",
                  fontFamily: "Space Grotesk, sans-serif"
                }}
              >
                ABOUT
              </FlipLink>
            </li>
            <li className="nav-item list-none relative overflow-hidden">
              <FlipLink
                href="/contact"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                  fontFamily: "Space Grotesk, sans-serif"
                }}
              >
                CONTACT
              </FlipLink>
            </li>
          </ul>
          <div className="nav-footer absolute w-full bottom-0 left-0 p-4 md:p-6 lg:p-8 flex flex-row md:flex-row justify-between items-center">
            <div
              className={`location relative mb- md:mb-0 transition-all duration-2000 ease-[cubic-bezier(0.16,1,0.3,1)] font-sans uppercase flex items-end${
                navOpen ? " opacity-100" : " opacity-0"
              }`}
              style={{ lineHeight: 1 }}
            >
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  display: "inline-block",
                  transform: "translateY(0)"
                }}
                className="text-[#F2AA4C] text-[10px] md:text-[22px]"
              >
                by nexaworks
              </span>
            </div>
            <div className="nav-social-media w-full md:w-auto">
              <ul className="flex justify-end md:justify-start items-baseline gap-4 md:gap-6">
                <li className="nav-item list-none relative overflow-hidden cursor-pointer text-[5px]">
                  <FlipLink
                    href="#"
                    style={{
                      top: navOpen ? "0" : "120px",
                      transitionDelay: navOpen ? "1.2s" : "0s",
                      paddingLeft: '0',
                      fontFamily: "Space Grotesk, sans-serif"
                    }}
                    onClick={() => {}}
                  >
                    YOUTUBE
                  </FlipLink>
                </li>
                <li className="nav-item list-none relative overflow-hidden text-[5px]">
                  <FlipLink
                    href="#"
                    style={{
                      top: navOpen ? "0" : "120px",
                      transitionDelay: navOpen ? "1.3s" : "0s",
                      paddingLeft: '0',
                      fontFamily: "Space Grotesk, sans-serif"
                    }}
                    onClick={() => {}}
                  >
                    INSTAGRAM
                  </FlipLink>
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

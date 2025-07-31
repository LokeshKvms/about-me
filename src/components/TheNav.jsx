import React, { useState, useRef, useEffect } from "react";

const TheNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState("0px");

  const menuItems = ["Hero", "About", "Projects", "Contact"];
  const animationDuration = 700;
  const staggerDelay = 100;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (contentRef.current) {
      setMenuHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white-heat/70 dark:bg-black-sheep/70 backdrop-blur-md shadow-lg"
          : "bg-white-heat dark:bg-black-sheep"
      } min-h-[10vh] text-typo dark:text-white-heat sticky top-0 z-50 border-b-2 border-neutral-950 dark:border-white-heat transition-all duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tight">K.V.M.S. LOKESH</div>

        <div className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group transition-transform duration-300 hover:scale-[1.1]"
            >
              <span className="group-hover:underline">{item}</span>
              <span className="absolute inset-0 z-[-1] transition-transform transform scale-x-0 group-hover:scale-x-100 origin-left border-b-2 border-typo dark:border-white-heat"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden relative" onClick={toggleMenu}>
          <button className="group relative z-10 block w-full bg-white-heat dark:bg-black-sheep border-2 border-neutral-950 dark:border-white-heat p-2 transition-transform -translate-x-0.5 -translate-y-0.5 hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0">
            <svg
              className="w-6 h-6 mx-auto text-typo dark:text-white-heat"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="absolute inset-0 z-0 bg-neutral-950 dark:bg-white-heat"></div>
        </div>
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: menuHeight }}
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out px-8 ${
          isOpen ? "border-t-2 border-black-sheep dark:border-white-heat" : ""
        }`}
      >
        {menuItems.map((item, index) => {
          const delay = `${index * staggerDelay}ms`;
          return (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)}
              style={{
                transition: `opacity ${animationDuration}ms ease, transform ${animationDuration}ms ease`,
                transitionDelay: isOpen ? delay : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
              }}
              className="block py-2 font-medium text-lg hover:text-slate-600 dark:hover:text-slate-400"
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default TheNav;

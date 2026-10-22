import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Pictures from "./Pictures";
import { assetUrl } from "../../utils/paths.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const location = useLocation();
  const links = [
    { name: "Home", to: "/" },
    { name: "Vídeos", to: "/videos" },
    { name: "Imagens", to: "/imagens" },
    { name: "Websites", to: "/websites" },
    { name: "Canais", to: "/canais" },
    { name: "Programação", to: "/programacao" },
    { name: "Currículo", to: "/curriculo" },
    { name: "Contatos", to: "/contatos" },
  ];

  return (
    <header className="w-full flex items-center justify-between bg-primary sm:h-[60px] lg:h-[90px] gap-4 py-3 px-6 fixed top-0 left-0 z-50 shadow-sm">

      {/* LOGO */}
      <div className="flex items-center gap-x-4 xl:gap-x-6 ml-0 sm:ml-90 lg:ml-6">
        <Link to="/" className="transition-transform hover:scale-110 cursor-pointer">
          <Pictures
            src={assetUrl('pics/logo.webp')}
            alt="Logo"
            width="w-[40px] sm:w-[50px] lg:w-[76px]"
          />
        </Link>
      </div>

      {/* MENU DESKTOP */}
      <div className="hidden xl:flex items-center space-x-6 relative">
        <nav className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex items-center font-medium transition-all duration-300 ease-in-out cursor-pointer ${location.pathname === link.to
                ? "text-light-blue text-[18px] scale-110"
                : "text-white text-[14px] hover:text-light-blue hover:-translate-y-1 hover:scale-110"
                }`}
            >
              {link.name}
              {location.pathname === link.to && (
                <motion.span
                  layoutId="active-menu-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-light-blue"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

      </div>

      {/* MOBILE HEADER */}
      <div className="xl:hidden flex items-center gap-4">

        {/* TOGGLE MENU */}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-light-blue transition-transform duration-200 hover:scale-110 cursor-pointer"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 xl:hidden"
              onClick={toggleMenu}
            />

            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute top-full left-0 w-full bg-gray-800/90 backdrop-blur-md border-t border-gray-700 xl:hidden shadow-lg"
            >
              <ul className="flex flex-col items-center py-4">
                {links.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="w-full flex items-center justify-center"
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={`relative block text-lg font-medium text-center py-1 transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center ${location.pathname === link.to
                        ? "text-light-blue text-[16px] scale-110"
                        : "text-white hover:text-light-blue hover:-translate-y-1 hover:scale-110 text-[14px]"
                        }`}
                    >
                      {link.name}
                      {location.pathname === link.to && (
                        <motion.span
                          layoutId="active-menu-indicator"
                          className="absolute -bottom-px left-0 right-0 h-[2px] rounded-full bg-light-blue"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

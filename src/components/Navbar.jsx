import { useState, useContext } from "react";
import ThemeSelector from "./ThemeSelector";
import { ThemeContext } from "../contexts/ThemeContexts";
const navitem = [
    { id: 1, name: "Home", href: "/Content", current: true },
    { id: 2, name: "Coffe", href: "/", current: true },
    { id: 3, name: "About Coffe", href: "/", current: true },
    { id: 4, name: "Espresso", href: "/", current: true },
];

export default function Navbar() {
    const [page, Setpage] = useState("Home")
    function handleSelectPage(e) {
        Setpage((e) => Setpage(e.target.value))
    }

    const { color, setColor } = useContext(ThemeContext);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed w-full opacity-30 hover:opacity-90 z-10 ${color} h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8`}>
            <div className="text-xl  font-semibold p-1 text-orange-950 transition-all hover:scale-118 hover:text-orange-500 outline-2 " style={{ borderRadius: ".5em 0 .5em 0" }}>
                <a href="/">COFFEE's</a>
            </div>
            <div className="flex items-center">
                {/* Mobil Menü Butonu */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden focus:outline-none focus:ring-2 focus:ring-inset opacity-10 focus:ring-orange-500"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <svg
                        className={`h-6 w-6 fill-current text-orange-950 ${isMobileMenuOpen ? "hidden" : "block"
                            }`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <svg
                        className={`h-6 w-6 fill-current text-orange-950 ${isMobileMenuOpen ? "block" : "hidden"
                            }`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Büyük Ekran Menüsü */}
                <ul className="hidden lg:flex space-x-4">
                    {navitem.map((item) => (
                        <li onClick={(e) => handleSelectPage(e)}
                            value={item.name}
                            key={item.id}
                            className="rounded-lg uppercase border-2 p-3 hover:border-orange-500 border-b-2 border-orange-950 list-item m-1.5 hover:text-orange-500 text-orange-950 "
                        >
                            <a className="" href={item.href}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobil Menü (Koşullu Olarak Gösterilir) */}
            <div
                className={`lg:hidden absolute top-16 left-0 w-full  backdrop-opacity-10  bg-amber-400 shadow-md ${isMobileMenuOpen ? "block" : "hidden"
                    }`}
                id="mobile-menu"
            >
                <ul className="py-2 flex flex-col items-center space-y-2">
                    {navitem.map((item) => (
                        <li key={item.id} className="hover:bg-amber-100 w-full text-center p-2">
                            <a
                                href={item.href}
                                className="text-orange-950 block"
                                onClick={toggleMobileMenu} // Menü öğesine tıklayınca menüyü kapat
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
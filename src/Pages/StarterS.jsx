import { ShoppingBagIcon } from "lucide-react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";

const menuItems = [
    { label: "ACTIVATIONS", path: "/check-compatibility" },
    { label: "MOBILE TOP-UP", path: "/recharge" },
];

export default function StartS() {
    return (
        <main className="max-w-xl mx-auto relative h-dvh w-full overflow-hidden bg-white flex flex-col items-center bg-[url('/assets/element.png')] bg-contain bg-center bg-no-repeat">
            {/* Header */}
            <div className="w-full flex items-center justify-between px-4 border-b border-gray-100 shadow-md shadow-gray-200  py-3 z-20">
                <img
                    src="/assets/logo.png"
                    alt="Logo"
                    className="h-10 object-contain"
                />

                <div className="flex items-center gap-4">
                    <LanguageSelector />
                    <ShoppingBagIcon className="w-6 h-6" />
                </div>
            </div>

            {/* Logo */}
            <div className="relative z-10 text-center mt-28">
                <img
                    src="/assets/app-logo.png"
                    alt="T Mobile"
                    className="mx-auto mt-3 w-84 h-auto"
                />
            </div>

            {/* Buttons */}
            <div className="relative bg-green-300/60 p-4 rounded-xl z-10 mt-10 w-full max-w-[300px] px-4 flex flex-col gap-3">
                {menuItems.map((item) => (
                    <Link key={item.label} to={item.path} className="block">
                        <button className="w-full h-10 rounded-full bg-[var(--primary-color)] hover:bg-black duration-300 text-white text-xs font-bold flex items-center justify-between px-5">
                            {item.label}
                            <span className="text-lg">→</span>
                        </button>
                    </Link>
                ))}
            </div>

            {/* Bottom Wave */}
            <img
                src="/assets/wave.png"
                alt=""
                className="absolute bottom-0 left-0 w-full object-cover pointer-events-none"
            />
        </main>
    );
}
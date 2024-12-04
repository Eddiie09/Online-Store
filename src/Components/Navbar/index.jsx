import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { useContext } from "react"; // Importar useContext
import { ShoppingCartContext } from "../../Context"; // Importar el contexto

const Navbar = () => {
    const context = useContext(ShoppingCartContext); // Obtener el contexto

    const activeStyle =
        "underline underline-offset-4 text-blue-500 font-semibold";

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 bg-white shadow-md text-sm font-light">
            {/* Logo y Navegación Principal */}
            <ul className="flex items-center gap-4">
                <li className="font-bold text-lg text-gray-800">
                    <NavLink to="/" className="hover:text-blue-500">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/all"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            {/* Usuario y Acciones */}
            <ul className="flex items-center gap-6">
                <li className="text-gray-600">Eddie@platzi.com</li>
                <li>
                    <NavLink
                        to="/my-orders"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/my-account"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/sign-in"
                        className={({ isActive }) =>
                            isActive ? activeStyle : "hover:text-blue-500"
                        }
                    >
                        Sign In
                    </NavLink>
                    </li>
                    <li className="flex items-center gap-2 text-gray-800">
                        <div className="relative">
                            <ShoppingBagIcon className="h-6 w-6 text-gray-700" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {context.count}
                            </span>
                        </div>
                    </li>

            </ul>
        </nav>
    );
};

export default Navbar;

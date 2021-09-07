import { FaHome, FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

export const navLinks = [
	{ title: "Home", icon: <FaHome />, path: "/" },
	{ title: "Profile", icon: <FaUser />, path: "/profile" },
	{ title: "Orders", icon: <FiShoppingCart />, path: "/orders" },
];

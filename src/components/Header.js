import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-200 shadow-lg sm:bg-orange-50 lg:bg-orange-50 font-serif">
      <div className=" flex logo-container">
        <img className="h-16 w-34 m-4 px-12" src={LOGO_URL} />
        <h1 className="px-4 m-8 ml-0">Online Status {onlineStatus ? "🟢" : "🔴"}</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">

          <li className="px-4 text-lg text-gray-800 transform transition duration-500 ease-in-out hover:scale-125 hover:text-orange-500 hover:px-4 hover:shadow-lgz">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg text-gray-800 transform transition duration-500 ease-in-out hover:scale-125 hover:text-orange-500 hover:px-4 hover:shadow-lgz">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg text-gray-800 transform transition duration-500 ease-in-out hover:scale-125 hover:text-orange-500 hover:px-4 hover:shadow-lgz">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4 text-lg text-gray-800 transform transition duration-500 ease-in-out hover:scale-125 hover:text-orange-500 hover:px-4 hover:shadow-lgz">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <button
            className="login px-4 text-lg text-gray-800 transform transition duration-500 ease-in-out hover:scale-125 hover:text-red-500 hover:px-4 hover:shadow-lgz "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

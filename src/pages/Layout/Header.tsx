import { useState } from "react";
import { FaSign, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const user = {
  _id: "utyyu",
  role: "admin",
};
const Header = () => {
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="header">
        <div>
          <img src={"Organic.png"} alt="logo" />
          <img className="name-logo" src={"name.png"} alt="" />
        </div>
        <div className="nav-links">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/govt_scheme"}>Govt Schemes</NavLink>
          <NavLink to={"/youth_scheme"}>Youth Scheme</NavLink>
          <NavLink to={"/post_scheme"}>Post Office Scheme</NavLink>
          <NavLink to={"pyq"}>PYQ</NavLink>
          {user?._id ? (
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <FaUser />
              <dialog open={IsOpen}>
                <div>
                  {user.role === "admin" && (
                    <Link to={"/admin/dashboard"}>Admin</Link>
                  )}
                  <Link to={"/orders"}>Orders</Link>
                  <button>
                    <FaSignOutAlt />
                  </button>
                </div>
              </dialog>
            </button>
          ) : (
            <Link to={"/login"}>
              <FaSignInAlt />
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;

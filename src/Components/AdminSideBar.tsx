import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li>
            <NavLink to={"/admin/dashboard"}>
              <RiDashboardFill />
              Dashboard
            </NavLink>
          </li>
          <li>
            <Link to={"/admin/product"}>
              <RiShoppingBag3Fill />
              Product
            </Link>
          </li>
          <li>
            <NavLink to={"/admin/customer"}>
              <IoIosPeople />
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/transaction"}>
              <AiFillFileText />
              Transaction
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSideBar;

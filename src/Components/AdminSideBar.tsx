import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiCoupon3Line,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <aside>
      <h2>Logo.</h2>

      {/* div 1---- */}
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li>
            <NavLink to={"/admin/dashboard"} className="sidebar-link">
              <RiDashboardFill />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/products"} className="sidebar-link">
              <RiShoppingBag3Fill />
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/customer"} className="sidebar-link">
              <IoIosPeople />
              Customer
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/transaction"} className="sidebar-link">
              <AiFillFileText />
              Transaction
            </NavLink>
          </li>
        </ul>
      </div>
      {/* div 2---- */}
      <div>
        <h5>Charts</h5>
        <ul>
          <li>
            <NavLink to={"/admin/chart/bar"} className="sidebar-link">
              <FaChartBar />
              Bar
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/chart/pie"} className="sidebar-link">
              <FaChartPie />
              Pie
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/chart/line"} className="sidebar-link">
              <FaChartLine />
              Line
            </NavLink>
          </li>
        </ul>
      </div>
      {/* div 3---- */}
      <div>
        <h5>Apps</h5>
        <ul>
          <li>
            <NavLink to={"/admin/app/stopwatch"} className="sidebar-link">
              <FaStopwatch />
              Stop-watch
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/app/coupon"} className="sidebar-link">
              <RiCoupon3Fill />
              Coupon
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/app/toss"} className="sidebar-link">
              <FaGamepad />
              Toss
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AdminSideBar;

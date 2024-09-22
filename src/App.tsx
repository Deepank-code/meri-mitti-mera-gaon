import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
import PieChart from "./pages/Admin/charts/PieCharts.tsx";
import LineChart from "./pages/Admin/charts/LineCharts.tsx";
import Header from "./pages/Layout/Header.tsx";
import Shipping from "./pages/Shipping.tsx";

const Home = lazy(() => import("./pages/Home/Home.tsx"));
const Cart = lazy(() => import("./pages/Cart.tsx"));

const Dashboard = lazy(() => import("./pages/Admin/Dashboard.tsx"));
const Products = lazy(() => import("./pages/Admin/Products"));
const Landing = lazy(() => import("./pages/Admin/Landing"));
const Customers = lazy(() => import("./pages/Admin/Customers"));
const NewProduct = lazy(
  () => import("./pages/Admin/management/NewProduct.tsx")
);
const Transaction = lazy(() => import("./pages/Admin/Transaction"));
const ProductManagement = lazy(
  () => import("./pages/Admin/management/ProductManagement.tsx")
);
const Transactionmanagement = lazy(
  () => import("./pages/Admin/management/Transactionmanagement.tsx")
);
const BarCharts = lazy(() => import("./pages/Admin/charts/BarCharts.tsx"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          {/* admin routes */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          <Route path="/" element={<Landing />} />

          {/* charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />

          {/* management*/}
          <Route path="/admin/product/new-product" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<Transactionmanagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

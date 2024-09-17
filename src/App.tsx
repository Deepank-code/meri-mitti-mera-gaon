import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";
import PieChart from "./pages/charts/PieCharts";
import LineChart from "./pages/charts/LineCharts";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Landing = lazy(() => import("./pages/Landing"));
const Customers = lazy(() => import("./pages/Customers"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const Transaction = lazy(() => import("./pages/Transaction"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const Transactionmanagement = lazy(
  () => import("./pages/management/Transactionmanagement")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
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

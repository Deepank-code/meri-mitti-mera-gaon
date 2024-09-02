import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import Loader from "./Components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Veggies = lazy(() => import("./pages/Veggies"));
const Landing = lazy(() => import("./pages/Landing"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/veggies" element={<Veggies />} />
          <Route path="/" element={<Landing />} />

          {/* charts */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

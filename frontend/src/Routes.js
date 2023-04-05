import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateProfileManagement from "./pages/UpdateProfileManagement";
import NewProfileManagement from "./pages/NewProfileManagement"
import NewFuelQuote from "./pages/NewFuelQuote";
import FuelQuoteHistory from "./pages/FuelQuoteHistory";
import { useSelector } from "react-redux";

// TODO catch all for 404
function MainRoutes() {
  const client = useSelector((state) => state.client.clientId);
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/user" element={<Layout />}>
        <Route index element={client ? <UpdateProfileManagement />: <NewProfileManagement />} />
        <Route path="profile-management" element={client ? <UpdateProfileManagement />: <NewProfileManagement />} />
        <Route path="new-fuel-quote" element={<NewFuelQuote />} />
        <Route path="fuel-quote-history" element={<FuelQuoteHistory />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;

import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import RequireAuth from "./Login/RequireAuth/RequireAuth";
import AddAd from "./Pages/AddAd/AddAd";
import AllUsers from "./Pages/AllUsers/AllUsers";
import Homepage from "./Pages/HomePage/Homepage";
import ManagePurchase from "./Pages/ManagePurchase/ManagaePurchase";
import ManageWithdraw from "./Pages/ManageWithdraw/ManageWithdraw";
import Packages from "./Pages/Packages/Packages";
import Navbar from "./Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className=' h-screen bg-dark-blue bg-main bg-contain'>
      <h1 className=' text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/admin" element={
            <RequireAuth>
              <Homepage></Homepage>
            </RequireAuth>} >
          </Route>
          <Route path="/manage-purchase" element={
            <RequireAuth>
              <ManagePurchase></ManagePurchase>
            </RequireAuth>} >
          </Route>
          <Route path="/manage-withdraw" element={
            <RequireAuth>
              <ManageWithdraw />
            </RequireAuth>} >
          </Route>
          <Route path="/all-user" element={
            <RequireAuth>
              <AllUsers />
            </RequireAuth>} >
          </Route>
          <Route path="/packages" element={
            <RequireAuth>
              <Packages />
            </RequireAuth>} >
          </Route>
          <Route path="/add-ads" element={
            <RequireAuth>
              <AddAd />
            </RequireAuth>} >
          </Route>
        </Routes>
      </h1>
      <ToastContainer />
    </div>
  );
}

export default App;

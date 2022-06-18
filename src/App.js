import { Route, Routes } from "react-router-dom";
import Homepage from "./HomePage/Homepage";
import Login from "./Login/Login";
import RequireAuth from "./Login/RequireAuth/RequireAuth";
import AllUsers from "./Pages/AllUsers/AllUsers";
import Packages from "./Pages/Packages/Packages";
import Navbar from "./Shared/Navbar/Navbar";

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
        </Routes>
      </h1>
    </div>
  );
}

export default App;

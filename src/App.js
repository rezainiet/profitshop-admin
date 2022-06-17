import { Route, Routes } from "react-router-dom";
import Homepage from "./HomePage/Homepage";
import Login from "./Login/Login";
import RequireAuth from "./Login/RequireAuth/RequireAuth";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className=' h-screen bg-dark-blue bg-main bg-contain'>
      <h1 className=' text-white'>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/admin" element={<RequireAuth>
            <Homepage></Homepage>
          </RequireAuth>} ></Route>
        </Routes>
      </h1>
    </div>
  );
}

export default App;

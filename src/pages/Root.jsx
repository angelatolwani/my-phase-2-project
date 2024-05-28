import { Outlet } from "react-router-dom"
// import Nav from "../nav";
import NavBar from "../components/NavBar";

// This component will render on load.
export default function Root() {
    return (
      <>
        {/* <h1>Header</h1> */}
        {/* <Nav /> */}
        <NavBar />
        <Outlet />
      </>
    );
  }
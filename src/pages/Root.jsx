import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar";

// This component will render on load.
export default function Root() {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  }
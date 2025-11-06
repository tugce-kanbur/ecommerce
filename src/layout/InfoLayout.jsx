import { Outlet } from "react-router-dom";
import NavBarLight from "../components/NavBarLight";
import Footer from "./Footer";

export default function InfoLayout() {
  return (
    <>
      <NavBarLight />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
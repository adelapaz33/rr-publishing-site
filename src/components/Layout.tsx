import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
    <main className="max-w-9xl mx-auto">
        <Header/>
        <Outlet/>
        <Footer/>
        </main>
    )
}
export default Layout;

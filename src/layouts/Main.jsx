
import { Outlet } from "react-router";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Main = () => {
    console.log('Main component rendered');
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main;

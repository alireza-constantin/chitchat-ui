import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";


export default function App() {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}

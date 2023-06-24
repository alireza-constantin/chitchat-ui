import { Outlet, useLoaderData } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";


export default function App() {
    const user = useLoaderData() 
    console.log(user);
    
    return (
        <>
            <div className="flex w-full">
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

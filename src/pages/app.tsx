import { Navigate, Outlet } from "react-router-dom";

export function HandleAuthError(){
    return <Navigate to="/login" replace={true} />
}

export default function App() {


    return (
        <>
            <Outlet />
        </>
    )
}

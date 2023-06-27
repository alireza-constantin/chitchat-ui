import { Navigate, Outlet, useLoaderData, useRouteError } from "react-router-dom";


export function HandleAuthError(){
    return <Navigate to="/login" replace={true} />
}

export default function App() {
    const user = useLoaderData()


    return (
        <>
            {user ? <Outlet /> : <Navigate  to="/login" />}
        </>
    )
}

import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { router } from "./routes"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./app"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
        <ReduxProvider store={store}>
            <Toaster />
            <RouterProvider router={router} />
        </ReduxProvider>
    </>
)

import MemoriaPage from "./MemoriaPage"

import { createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path : "/",
        element : <MemoriaPage/>  
    }
])

const App = () => {
    return <div>
        <RouterProvider router={router}/>        
    </div>
}

export default App
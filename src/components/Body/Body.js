import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import SignUp from '../Forms/SignUp'
import Browse from '../Browse/Browse'
function Body() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<SignUp/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        // {
        //     path:"/",
        //     element:<SignIn/>
        // },
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Body
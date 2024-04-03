import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import SignIn from './components/Forms/SignIn'
import Browse from './components/Browse/Browse'
function Body() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<SignIn/>
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
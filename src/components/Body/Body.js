import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from '../Forms/SignUp'
import Browse from '../Browse/Browse' 
import WatchPage from '../Watch/WatchPage'

function Body() {
  
  const router = createBrowserRouter([                                                                                                                        
    {
      path: "/",
      element: <SignUp />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
    path: "/watch",
    element: <WatchPage />
  },

  ])
  

  return (
    <div >

      <RouterProvider router={router} />
    </div>
  )
}

export default Body
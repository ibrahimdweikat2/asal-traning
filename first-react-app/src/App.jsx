import {Announcement,NavBar,Footer} from './components';
import {Home} from './pages';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
function App() {
  const Layout=()=>{
    return (
      <>
        <Announcement />
        <NavBar />
        <Outlet />
        <Footer />
      </>
    )
  };

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

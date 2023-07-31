import {Suspense} from 'react';
import {Announcement,NavBar,Footer,
        Loading} from './components';
import {Home,Login,Resetpassword,
        CreateAccount,Cart,Order,
        Shipping,Payment,Account} from './pages';
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
        },
        {
          path:'/login',
          element:<Login />
        },
        {
          path:'/resetpasswords',
          element:<Resetpassword />
        },
        {
          path:'/account/register',
          element:<CreateAccount />
        },
        {
          path:'/cart',
          element:<Cart />
        },
        {
          path:'/account',
          element:<Account />
        }
      ]
    },
    {
      path:'/order',
      element:<Order />
    },
    {
      path:'/shipping',
      element:<Shipping />
    },
    {
      path:'/payment',
      element:<Payment />
    }
  ]);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}/>
      </Suspense>
    </div>
  );
}

export default App;

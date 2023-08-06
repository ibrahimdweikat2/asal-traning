import {Suspense,useEffect,useState} from 'react';
import {Announcement,NavBar,Footer,
        Loading} from './components';
import {Home,Login,Resetpassword,
        CreateAccount,Cart,Order,
        Shipping,Payment,Account} from './pages';
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {getAllUserCart,getAllAddress} from './action/index'
import {getProduct} from './network/controllers/products';
function App() {
  const [productsCategories,setProductsCategories]=useState([]);
  const dispatch=useDispatch();
  let {user} = useSelector(state=>state.User);
  useEffect(()=>{
    user=JSON.parse(localStorage.getItem('user'));
    const getCarts=()=>{
      user !==null && dispatch(getAllUserCart(user.userId));
    }
    const getAllUserAddress=(userId)=>{
      user !==null && dispatch(getAllAddress(userId))
    }
    user && getAllUserAddress(user.userId);
    getCarts();
  },[dispatch,user]);
  // let user=null;
  let isInit=false;
  useEffect(()=>{
    if(!isInit){
      isInit=true;
      getProduct().then(product=>{
        setProductsCategories(product);
      });
    }
  },[])
  console.log(productsCategories);
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
          element:<Home productsCategories={productsCategories}/>
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

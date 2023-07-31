import {lazy} from 'react';
const Home=lazy(()=>import('./Home/Home'));
const Login=lazy(()=>import('./Login/Login'));
const Resetpassword=lazy(()=>import('./Resetpassword/Resetpassword'));
const CreateAccount=lazy(()=>import('./CreateAccount/CreateAccount'));
const Cart=lazy(()=>import('./Cart/Cart'));
const Order=lazy(()=>import('./Order/Order'));
const Shipping=lazy(()=>import('./Shipping/Shipping'));
const Payment=lazy(()=>import('./Payment/Payment'));
const Account=lazy(()=>import('./Account/Account'));
export {Home,Login,Resetpassword,
        CreateAccount,Cart,Order,
        Shipping,Payment,Account};
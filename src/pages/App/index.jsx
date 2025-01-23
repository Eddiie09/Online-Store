import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar';
import CheckOutSideMneu from '../../Components/CheckOutSideMenu';
import './App.css';
import { UserProvider } from '../../Components/UserContext';

const routesConfig = [
  { path: '/', element: <Home /> },
  { path: '/my-account', element: <MyAccount /> },
  { path: '/my-order', element: <MyOrder /> },
  { path: '/my-orders', element: <MyOrders /> },
  { path: '/my-orders/last', element: <MyOrder /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '*', element: <NotFound /> },
];

const AppRoutes = () => useRoutes(routesConfig);

const App = () => {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckOutSideMneu />
        </BrowserRouter>
      </ShoppingCartProvider>
    </UserProvider>
  );
};

export default App;

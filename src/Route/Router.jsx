import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AllCraft from "../page/AllCraft/AllCraft";
import AddCraft from "../page/AddCraft/AddCraft";
import MyCraft from "../MyCraft/MyCraft";
import ViewDetails from "../page/ViewDetails/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Update from "../page/Update/Update";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import FirstPage from "../SixItem/FirstPage";
import SecondPage from "../SixItem/SecondPage";
import DetailsF from "../SixItem/DetailsF";
import DetailsS from "../SixItem/DetailsS";
import ThiredPage from "../SixItem/ThiredPage";
import DetailsT from "../SixItem/DetailsT";
import FourPage from "../SixItem/FourPage";
import DetailsFour from "../SixItem/DetailsFour";
import FivePage from "../SixItem/FivePage";
import DetailsFive from "../SixItem/DetailsFive";
import SixPage from "../SixItem/SixPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('https://assignment-10-server-delta-roan.vercel.app/landscapes')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:'/craft',
        element: <AllCraft></AllCraft>,
        loader: ()=> fetch('https://assignment-10-server-delta-roan.vercel.app/landscapes')
      },
      {
        path:'/addcraft',
        element: <AddCraft></AddCraft>
      },
      {
        path:'/mycraft',
        element: <MyCraft></MyCraft>,
        loader: ()=> fetch('https://assignment-10-server-delta-roan.vercel.app/landscapes')
      },
      {
        path:'/view/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
        loader: ({params})=> fetch(`https://assignment-10-server-delta-roan.vercel.app/landscapes/${params.id}`)
      },
      {
        path:'/update/:id',
        element: <Update></Update>,
        loader: ({params})=> fetch(`https://assignment-10-server-delta-roan.vercel.app/landscapes/${params.id}`)
      },
      {
        path:'/first',
        element: <FirstPage></FirstPage>,
        loader: ()=> fetch('../firstpage.json')
      },
      {
        path:'/first/:id',
        element: <PrivateRoute><DetailsF></DetailsF></PrivateRoute>  ,
        loader: ()=> fetch('../firstpage.json')
      },
      {
        path:'/second',
        element:  <SecondPage></SecondPage>,
        loader: ()=> fetch('../secondpage.json')
      },
      {
        path:'/second/:id',
        element: <PrivateRoute><DetailsS></DetailsS></PrivateRoute> ,
        loader: ()=> fetch('../secondpage.json')
      },
      {
        path:'/third',
        element: <ThiredPage></ThiredPage>,
        loader: ()=> fetch('../thiredpage.json')
      },
      {
        path:'/third/:id',
        element: <PrivateRoute><DetailsT></DetailsT></PrivateRoute> ,
        loader: ()=> fetch('../thiredpage.json')
      },
      {
        path:'/four',
        element: <FourPage></FourPage>,
        loader: ()=> fetch('../fourpage.json')
      },
      {
        path:'/four/:id',
        element: <PrivateRoute><DetailsFour></DetailsFour></PrivateRoute> ,
        loader: ()=> fetch('../fourpage.json')
      },
      {
        path:'/five',
        element: <FivePage></FivePage>,
        loader: ()=> fetch('../fivepage.json')
      },
      {
        path:'/five/:id',
        element: <PrivateRoute><DetailsFive></DetailsFive></PrivateRoute> ,
        loader: ()=> fetch(`../fivepage.json`)
      },
      {
        path:'/six',
        element: <SixPage></SixPage>,
        loader: ()=> fetch('../sixpage.json')
      },
      {
        path:'/six/:id',
        element: <PrivateRoute><DetailsFive></DetailsFive></PrivateRoute> ,
        loader: ()=> fetch(`../sixpage.json`)
      },
    ],
  },
]);

export default router;

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './pages/Layout';
import About from './pages/about/About';
// import PricingPlans from './pages/pricing/PricingPage';


const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      // {
      //   path: 'pricing',
      //   element: <PricingPlans/>
      // },
    ]
  },
  // {
  //   path:'/login',
  //   element: <Login/>
  // },
  // {
  //   path:'/signup',
  //   element: <SignUp/>
  // }
])

function App() {
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubinfoLoader } from './Components/GitHub/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',      //ab path ke andar nesting ho rahi hai to ye element hame batana padega jise ye render karega
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, 
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="user/:userid" element={<User />}/>   {/* data hamesha id ke basis par display hota hai */}
      <Route 
      loader={githubinfoLoader}
      path="github" 
      element={<Github />}
      /> 
    </Route>
  )
)

// Making Custom Route
//loader use karne se api ki fetching phele hi shuru ho jati hai useEffect se bhi phele matlab jaise hi ham mouse laate hai waisse hi loading start


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
